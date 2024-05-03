"use client"
import React, { useEffect } from "react";
import {
  Typography,
  TextField,
  Autocomplete,
  CssBaseline,
  Grid,
  FormHelperText,
} from "@mui/material";


import { useFormik } from "formik";
import NavButton from "@/app/components/NavButton";
import { AddressDetailsErrorFocus } from "@/app/components/errorFocus";
import { addressDetailsSchema } from "@/app/components/validateSchema";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useApiCallMutation, useGetApiCallQuery } from "@/lib/services/apiCallServices";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";
import { getInitialAddressDetailsValues } from "@/app/components/initialValues";
import { setResidenceType } from "@/lib/reducers/reducer";


const AddressDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  //data from redux
  const formData = useSelector((state) => state?.form?.formData);
  const PinCodeErrorData = useSelector((state) => state?.form?.pinCodeError);
  const PersonalAddressData = useSelector(
    (state) => state?.form?.personalAddress
  );
  const residenceTypesListData = useSelector(
    (state) => state?.form?.residenceTypesList
  );
  //api calls
  const GetResidenceTypeList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getResidenceTypes,
    method: "POST",
    data: {},
  });
  useEffect(() => {
    if (
      GetResidenceTypeList?.isSuccess &&
      GetResidenceTypeList?.data?.data !== null
    ) {
      const modifyres = GetResidenceTypeList?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      dispatch(setResidenceType(modifyres));
    }
  }, [GetResidenceTypeList?.isSuccess]);

  const Year = [
    { label: "1 Year", value: "1 Year" },
    { label: "1-2 Years", value: "1-2 Years" },
    { label: "3 Years", value: "3 Years" },
    { label: "3-5 Years", value: "3-5 Years" },
    { label: "5+ Years", value: "5+ Years" },
  ];
  const navigateToOtherDetails = () => {
    router.push("/get-registered/otherdetails");
  };
  //Drop-Off Api
  const [DropOffApi, dropOffApiData] = useApiCallMutation();
  const dropOffRequest = () => {
    const data = {
      leadId: sessionStorage.getItem("leadId"),
      stage: "address details",
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
  //get pincode Address Api Call
  const [GetPinCodeAddressApi, getPinCodeAddressApiData] = useApiCallMutation();
  const getAddress = async (event) => {
    if (
      /^\d*$/.test(event.target.value) &&
      event.target.value.length <= 6 &&
      event.target.value !== "000000"
    ) {
      dispatch(
        setPincodeError({
          ...PinCodeErrorData,
          addressPincode: "",
        })
      );
      dispatch(
        setFormData({
          address: {
            ...formData.address,
            pinCode: event.target.value,
          },
        })
      );
      if (event.target.value?.length === 6) {
        dispatch(
          setPincodeError({
            ...PinCodeErrorData,
            addressPincode: "",
          })
        );
        const data = {
          pinCode: event.target.value,
        };
        GetPinCodeAddressApi({
          endPoint: apiEndPointsConfig.getPincodesAddress,
          method: "POST",
          data: { data },
        });
      } else {
        dispatch(
          setFormData({
            address: {
              ...formData.address,
              pinCode: event.target.value,
              cityId: "",
              stateId: "",
              countryId: "",
            },
          })
        );
        dispatch(
          setPersonalAddress({
            city: "",
            state: "",
            country: "",
          })
        );
      }
    }
  };
  useEffect(() => {
    if (getPinCodeAddressApiData?.isSuccess) {
      if (getPinCodeAddressApiData?.data?.status.code === 200) {
        dispatch(
          setFormData({
            address: {
              ...formData.address,
              pinCode: formData?.address?.pinCode,
              cityId: getPinCodeAddressApiData?.data?.data?.city?.id,
              stateId: getPinCodeAddressApiData?.data?.data?.state?.id,
              countryId: getPinCodeAddressApiData?.data?.data?.country?.id,
            },
          })
        );
        dispatch(
          setPersonalAddress({
            city: getPinCodeAddressApiData?.data?.data?.city?.name,
            state: getPinCodeAddressApiData?.data?.data?.state?.name,
            country: getPinCodeAddressApiData?.data?.data?.country?.name,
          })
        );
      } else if (getPinCodeAddressApiData?.data?.status.code === 404) {
        dispatch(
          setPincodeError({
            ...PinCodeErrorData,
            addgetPinCodeAddressApiDatasPincode: "Pin code does not exists",
          })
        );
      } else {
        dispatch(
          setPincodeError({
            ...PinCodeErrorData,
            addgetPinCodeAddressApiDatasPincode: "",
          })
        );
      }
    }
  }, [getPinCodeAddressApiData?.isSuccess]);

  //get check Eligibility Api Call
  const [CheckEligibilityApi, checkEligibilityApiData] = useApiCallMutation();
  const checkEligibility = async () => {
    const data = { formData };
    CheckEligibilityApi({
      endPoint: apiEndPointsConfig.CheckEligibility,
      method: "POST",
      data: { data },
    });
  };
  //next submit
  const handleSubmit = async () => {
    if (PinCodeErrorData?.addressPincode === "") {
      dropOffRequest();
      checkEligibility();
      navigateToOtherDetails();
    } else {
      document.getElementById("pinCode").focus();
    }
    navigateToOtherDetails();
  };
  const handlePrev = () => {
    router.push("/get-registered/personaldetails");
  };
  const formik = useFormik({
    initialValues: getInitialAddressDetailsValues(formData),
    validationSchema: addressDetailsSchema,
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
            Address Details *
          </Typography>
          <Grid container xs={12} rowGap={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Address Line 1(Flat/Block) *
              </Typography>
              <TextField
                id="addressLine1"
                name="addressLine1"
                fullWidth
                placeholder="Enter the Address"
                value={formData?.address?.addressLine1}
                onChange={(event, newValue) => {
                  if (
                    /^(?![^A-Za-z0-9])[A-Za-z0-9\s,-/]*$/.test(
                      event.target.value
                    )
                  ) {
                    dispatch(
                      setFormData({
                        address: {
                          ...formData.address,
                          addressLine1: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched?.addressLine1 && formik.errors?.addressLine1 && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.addressLine1}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Landmark (Area/Locality) *
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id="addressLine2"
                name="addressLine2"
                placeholder="Enter the LandMark"
                value={formData?.address?.addressLine2}
                onChange={(event, newValue) => {
                  if (
                    /^(?![^A-Za-z0-9])[A-Za-z0-9\s,-/]*$/.test(
                      event.target.value
                    )
                  ) {
                    dispatch(
                      setFormData({
                        address: {
                          ...formData.address,
                          addressLine2: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched?.addressLine2 && formik.errors?.addressLine2 && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.addressLine2}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Pincode *
              </Typography>
              <TextField
                variant="outlined"
                id="pinCode"
                name="pinCode"
                fullWidth
                placeholder="Pincode"
                value={formData?.address?.pinCode}
                onChange={(event) => {
                  getAddress(event);
                  formik.handleChange(event);
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched?.pinCode && formik.errors?.pinCode && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.pinCode}
                </FormHelperText>
              )}
              {PinCodeErrorData?.addressPincode ? (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {PinCodeErrorData?.addressPincode}
                </FormHelperText>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} sx={{ color: "#243771" }}>
              <Typography variant="subtitle1">City *</Typography>
              <TextField
                variant="outlined"
                fullWidth
                disabled
                id="cityId"
                name="cityId"
                placeholder="City"
                value={PersonalAddressData?.city}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                State *
              </Typography>
              <TextField
                id="stateId"
                name="stateId"
                variant="outlined"
                disabled
                fullWidth
                placeholder="State"
                value={PersonalAddressData?.state}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Country *
              </Typography>
              <TextField
                variant="outlined"
                id="countryId"
                name="countryId"
                fullWidth
                disabled
                placeholder="Country"
                value={PersonalAddressData?.country}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Resident Type *
              </Typography>
              <Autocomplete
                id="residenceTypeId"
                name="residenceTypeId"
                disablePortal
                options={residenceTypesListData ? residenceTypesListData : ""}
                value={
                  residenceTypesListData?.find(
                    (option) =>
                      formData?.address?.residenceTypeId === option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      address: {
                        ...formData.address,
                        residenceTypeId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("residenceTypeId", newValue);
                }}
                onBlur={formik.handleBlur}
                fullWidth
                renderInput={(params) => (
                  <TextField placeholder="Select Resident Type" {...params} />
                )}
              />
              {formik.touched?.residenceTypeId &&
                formik.errors?.residenceTypeId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.residenceTypeId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                How Many Years Are You Living in Your Current Address?*
              </Typography>
              <Autocomplete
                id="yearsLivingIn"
                name="yearsLivingIn"
                disablePortal
                options={Year}
                value={formData?.address?.yearsLivingIn}
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      address: {
                        ...formData.address,
                        yearsLivingIn: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("yearsLivingIn", newValue);
                }}
                onBlur={formik.handleBlur}
                fullWidth
                renderInput={(params) => (
                  <TextField placeholder="Please Select" {...params} />
                )}
              />
              {formik.touched?.yearsLivingIn &&
                formik.errors?.yearsLivingIn && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.yearsLivingIn}
                  </FormHelperText>
                )}
            </Grid>
          </Grid>
          <NavButton
            handlePrev={handlePrev}
            ErrorFocus={() => AddressDetailsErrorFocus(formik)}
          />
        </Grid>
      </form>
    </>
  );
};

export default AddressDetails;
