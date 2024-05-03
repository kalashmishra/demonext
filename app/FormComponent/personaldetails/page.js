"use client";
import React, { useEffect } from "react";
import {
  Typography,
  TextField,
  Box,
  Autocomplete,
  FormHelperText,
  Grid,
  CssBaseline,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useFormik } from "formik";
import ManLogo from "@/public/Images/man.svg";
import CoupleLogo from "@/public/Images/couple.svg";
import Image from "next/image";
import NavButton from "@/app/components/NavButton";
import { PersonalDetailsErrorFocus } from "@/app/components/errorFocus";
import { personalDetailsSchema } from "@/app/components/validateSchema";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";
import { useDispatch, useSelector } from "react-redux";
import { useApiCallMutation, useGetApiCallQuery } from "@/lib/services/apiCallServices";
import {
  setFormData,
  setGenderType,
  setQualifications,
} from "@/lib/reducers/reducer";
import { getInitialPersonalDetailsValues } from "@/app/components/initialValues";
import { useRouter } from "next/navigation";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loanType = useSelector((state) => state?.form?.loanType);
  const formData = useSelector((state) => state?.form?.formData);
  const QualificationsListData = useSelector(
    (state) => state?.form?.qualificationsList
  );
  const GenderTypesListData = useSelector(
    (state) => state?.form?.genderTypesList
  );
  const GetQualificationsList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getQualifications,
    method: "POST",
    data: {},
  });
  const GetGenderTypesList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getGenderTypes,
    method: "POST",
    data: {},
  });
  useEffect(() => {
    if (
      GetQualificationsList?.isSuccess &&
      GetQualificationsList?.data?.data !== null
    ) {
      const modifyres = GetQualificationsList?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      console.log(modifyres);
      dispatch(setQualifications(modifyres));
    }
  }, [GetQualificationsList?.isSuccess]);
  useEffect(() => {
    if (
      GetGenderTypesList?.isSuccess &&
      GetGenderTypesList?.data?.data !== null
    ) {
      const modifyres = GetGenderTypesList?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      dispatch(setGenderType(modifyres));
    }
  }, [GetGenderTypesList?.isSuccess]);

  const navigateToAddress = () => {
    router.push("/get-registered/addressdetails");
  };

  //Drop-Off Api
  const [DropOffApi, dropOffApiData] = useApiCallMutation();
  const dropOffRequest = async () => {
    const data = {
      leadId: sessionStorage.getItem("leadId"),
      stage: "personal details",
      personalInfo: {
        emailId: formData?.personalInfo?.emailId,
        firstName: formData?.personalInfo?.firstName,
        lastName: formData?.personalInfo?.lastName,
        genderId: formData?.personalInfo?.genderId,
        dateOfBirth: formData?.personalInfo?.dateOfBirth,
        qualificationId: formData?.personalInfo?.qualificationId,
        maritalStatus: formData?.personalInfo?.maritalStatus,
      },
      employmentType: formData?.employmentType,
      loan: {
        reason: formData?.loan?.reason,
        otherReason: formData?.loan?.otherReason,
        amount: formData?.loan?.amount,
        tenure: formData?.loan?.tenure,
      },
      panCard: formData?.panCard,
      emailId: formData?.personalInfo?.emailId,
      utm: {
        id: formData?.utm?.id,
        url: formData?.utm?.url,
        source: formData?.utm?.source,
        medium: formData?.utm?.medium,
        campaign: formData?.utm?.campaign,
        term: formData?.utm?.term,
        content: formData?.utm?.content,
        clickId: formData?.utm?.clickId,
      },
      extras: {
        browser: formData?.extras?.browser,
        operatingSystem: formData?.extras?.operatingSystem,
        ipAddress: formData?.extras?.ipAddress,
        timestamp: formData?.extras?.timestamp,
        userAgent: formData?.extras?.userAgent,
        location: formData?.extras?.location,
      },
    };
    DropOffApi({
      endPoint: apiEndPointsConfig.DropOff,
      method: "POST",
      data: { data },
    });
  };

  const handleSubmit = async () => {
    await dropOffRequest();
    navigateToAddress();
  };

  const handlePrev = () => {
    if (loanType !== "businessLoan") {
      router.push("/get-registered/employe-type");
    } else {
      if (formData.employmentType === "Self Employed") {
        router.push("/get-registered/selfemployed");
      } else {
        router.push("/get-registered/loan");
      }
    }
  }
  const formik = useFormik({
    initialValues: getInitialPersonalDetailsValues(formData),
    validationSchema: personalDetailsSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <CssBaseline />
      <form onSubmit={formik.handleSubmit}>
        <Grid container rowGap={6}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", md: "35px", lg: "36px", xl: "40px" },
              fontWeight: "bold",
              color: "#243771",
            }}
          >
            Personal Details
          </Typography>

          <Grid container rowGap={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                First Name (As per PAN card) *
              </Typography>
              <TextField
                variant="outlined"
                id="firstName"
                name="firstName"
                fullWidth
                placeholder="Enter Your First Name "
                value={formData?.personalInfo?.firstName}
                onChange={(event, newValue) => {
                  if (/^[A-Za-z]*$/.test(event.target.value)) {
                    dispatch(
                      setFormData({
                        personalInfo: {
                          ...formData.personalInfo,
                          firstName: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
                onBlur={formik.handleBlur}
              />

              {formik.touched?.firstName && formik.errors?.firstName && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik?.errors?.firstName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Last Name (As per PAN card) *
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                name="lastName"
                placeholder="Enter the Last Name "
                value={formData?.personalInfo?.lastName}
                onBlur={formik.handleBlur}
                onChange={(event, newValue) => {
                  if (/^[A-Za-z]*$/.test(event.target.value)) {
                    dispatch(
                      setFormData({
                        personalInfo: {
                          ...formData.personalInfo,
                          lastName: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />

              {formik.touched?.lastName && formik.errors?.lastName && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik?.errors?.lastName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                DOB
              </Typography>
              <TextField
                type="date"
                variant="outlined"
                fullWidth
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData?.personalInfo?.dateOfBirth}
                onBlur={formik.handleBlur}
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      personalInfo: {
                        ...formData.personalInfo,
                        dateOfBirth: event.target.value,
                      },
                    })
                  );
                  formik.handleChange(event);
                }}
              />

              {formik.touched?.dateOfBirth && formik?.errors?.dateOfBirth && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors?.dateOfBirth}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Gender *
              </Typography>
              <Autocomplete
                disablePortal
                id="genderId"
                name="genderId"
                options={GenderTypesListData ? GenderTypesListData : ""}
                value={
                  GenderTypesListData?.find(
                    (option) =>
                      formData?.personalInfo?.genderId === option.value
                  )?.label
                }
                onBlur={formik.handleBlur}
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      personalInfo: {
                        ...formData.personalInfo,
                        genderId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("genderId", newValue);
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField placeholder="Select Gender Type" {...params} />
                )}
              />
              {formik.touched?.genderId && formik.errors?.genderId && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors?.genderId}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                rowGap={4}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                  Marital Status *
                </Typography>
                <RadioGroup
                  row
                  id="maritalStatus"
                  value={formik.values.employmentType}
                  onChange={(e) => {
                    dispatch(
                      setFormData({
                        personalInfo: {
                          ...formData.personalInfo,
                          maritalStatus: e.target.value,
                        },
                      })
                    );
                    formik.handleChange("maritalStatus")(e.target.value);
                  }}
                  sx={{ display: "flex", gap: 4, justifyContent: "center" }}
                >
                  <FormControlLabel
                    value="Single"
                    name="maritalStatus"
                    control={<Radio sx={{ display: "none" }} />}
                    label={
                      <Box
                        sx={{
                          width: " 120px",
                          height: "116px",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "15px",
                          color: "#243771",
                          border: "1px solid #000",
                          borderRadius: "20px",
                          backgroundColor:
                            formData?.personalInfo?.maritalStatus === "Single"
                              ? { backgroundColor: " #F7D64A", border: "none" }
                              : { backgroundColor: "transparent" },
                        }}
                        onBlur={formik.handleBlur}
                      >
                        <Image src={ManLogo} alt="type" />
                        <Typography sx={{ fontSize: "11px" }}>
                          Single
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="Married"
                    name="maritalStatus"
                    control={<Radio sx={{ display: "none" }} />}
                    label={
                      <Box
                        sx={{
                          width: " 120px",
                          height: "116px",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "15px",
                          color: "#243771",
                          border: "1px solid #000",
                          borderRadius: "20px",
                          backgroundColor:
                            formData?.personalInfo?.maritalStatus === "Married"
                              ? { backgroundColor: " #F7D64A", border: "none" }
                              : { backgroundColor: "transparent" },
                        }}
                        onBlur={formik.handleBlur}
                      >
                        <Image src={CoupleLogo} alt="type" />
                        <Typography sx={{ fontSize: "11px" }}>
                          Married
                        </Typography>
                      </Box>
                    }
                  />
                </RadioGroup>
              </Grid>
              {formik.touched.maritalStatus && formik.errors?.maritalStatus && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors?.maritalStatus}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Qualification *
              </Typography>
              <Autocomplete
                disablePortal
                id="qualificationId"
                name="qualificationId"
                options={QualificationsListData ? QualificationsListData : ""}
                onBlur={formik.handleBlur}
                value={
                  QualificationsListData?.find(
                    (option) =>
                      formData?.personalInfo?.qualificationId === option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      personalInfo: {
                        ...formData.personalInfo,
                        qualificationId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("qualificationId", newValue);
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
              />
              {formik.touched?.qualificationId &&
                formik.errors?.qualificationId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors?.qualificationId}
                  </FormHelperText>
                )}
            </Grid>
          </Grid>
          <>
            <NavButton
              handlePrev={handlePrev}
              ErrorFocus={() => PersonalDetailsErrorFocus(formik)}
            />
          </>
        </Grid>
      </form>
    </>
  );
};

export default PersonalDetails;
