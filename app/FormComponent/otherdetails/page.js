"use client";
import React from "react";
import {
  Typography,
  TextField,
  Box,
  Autocomplete,
  CssBaseline,
  Grid,
  InputBase,
  FormHelperText,
} from "@mui/material";

import { useFormik } from "formik";
import NavButton from "@/app/components/NavButton";
import { otherDetailsSchema } from "@/app/components/validateSchema";
import { useDispatch, useSelector } from "react-redux";
import { getInitialOtherDetailsValues } from "@/app/components/initialValues";
import { setFormData } from "@/lib/reducers/reducer";
import { useRouter } from "next/navigation";
import { OtherDetailsErrorFocus } from "@/app/components/errorFocus";
import { useApiCallMutation } from "@/lib/services/apiCallServices";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";

const OtherDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const formData = useSelector((state) => state?.form?.formData);

  const options = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];
  //Drop-Off Api
  const [DropOffApi, dropOffApiData] = useApiCallMutation();
  const dropOffRequest = async () => {
    const data = {
      leadId: sessionStorage.getItem("leadId"),
      stage: "other details",
      others: {
        totalEmiPaidMonthly: formData?.others?.totalEmiPaidMonthly,
        interestedToGetCreditCard: formData?.others?.interestedToGetCreditCard,
      },
      address: {
        addressLine1: formData?.address?.addressLine1,
        addressLine2: formData?.address?.addressLine2,
        pinCode: formData?.address?.pinCode,
        countryId: formData?.address?.countryId,
        stateId: formData?.address?.stateId,
        cityId: formData?.address?.cityId,
        residenceTypeId: formData?.address?.residenceTypeId,
        yearsLivingIn: formData?.address?.yearsLivingIn,
      },
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
      aadharNo: formData?.aadharNo,
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
      endPoint: apiEndPointsConfig?.DropOff,
      method: "POST",
      data: { data },
    });
  };
  const handleSubmit = async () => {
    await dropOffRequest();
    router.push("/get-registered/submit");
  };

  const handlePrev = () => {
    router.push("/get-registered/addressdetails");
  };
  const formik = useFormik({
    initialValues: getInitialOtherDetailsValues(formData),
    validationSchema: otherDetailsSchema,
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
            Other Details
          </Typography>
          <Grid container xs={12} rowGap={2}>
            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1">
                Total EMI Pay currently Per Month:
              </Typography>
              <Box
                sx={{
                  width: "90px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "2px solid #C6E5CB",
                }}
              >
                <Typography
                  sx={{
                    color: "#5FB76D",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  ₹
                </Typography>
                <InputBase
                  id="totalEmiPaidMonthly"
                  name="totalEmiPaidMonthly"
                  sx={{ width: "80px", ml: 1, padding: 0 }}
                  value={formData?.others?.totalEmiPaidMonthly}
                  onBlur={formik.handleBlur}
                  onChange={(event, newValue) => {
                    if (
                      /^\d*$/.test(event.target.value) &&
                      event.target.value.length <= 6
                    ) {
                      if (Number(event.target.value <= 500000)) {
                        dispatch(
                          setFormData({
                            others: {
                              ...formData.others,
                              totalEmiPaidMonthly: event.target.value,
                            },
                          })
                        );
                        formik.handleChange(event);
                      }
                    }
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ width: "100%" }}>
              <input
                style={{
                  accentColor: "#08911f",

                  border: "none",
                  width: "100%",
                  borderRadius: "3px",
                  padding: "3px",
                }}
                id="totalEmiPaidMonthly"
                name="totalEmiPaidMonthly"
                type="range"
                value={formData?.others?.totalEmiPaidMonthly}
                onBlur={formik.handleBlur}
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      others: {
                        ...formData.others,
                        totalEmiPaidMonthly: event.target.value,
                      },
                    })
                  );
                  formik.handleChange(event);
                }}
                min="0"
                max="500000"
                step="1000"
              />
            </Grid>
            <Grid
              container
              xs={12}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography sx={{ fontSize: "13px", color: "" }}>0</Typography>
              <Typography sx={{ fontSize: "13px", color: "" }}>
                500000
              </Typography>
            </Grid>
            {formik?.errors?.totalEmiPaidMonthly && (
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "14px",
                  ml: 1,
                }}
              >
                {formik?.errors?.totalEmiPaidMonthly}
              </FormHelperText>
            )}
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Are you interested in getting any credit card?
              </Typography>
              <Autocomplete
                disablePortal
                id="interestedToGetCreditCard"
                name="interestedToGetCreditCard"
                options={options}
                onBlur={formik.handleBlur}
                value={
                  options?.find(
                    (option) =>
                      formData?.others?.interestedToGetCreditCard ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      others: {
                        ...formData.others,
                        interestedToGetCreditCard: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("interestedToGetCreditCard", newValue);
                }}
                fullWidth
                renderInput={(params) => <TextField {...params} />}
              />
              {formik?.errors?.interestedToGetCreditCard && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik?.errors?.interestedToGetCreditCard}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <NavButton
            handlePrev={handlePrev}
            ErrorFocus={() => OtherDetailsErrorFocus(formik)}
          />
        </Grid>
      </form>
    </>
  );
};

export default OtherDetails;
