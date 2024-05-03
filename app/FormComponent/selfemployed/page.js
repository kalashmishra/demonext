"use client";
import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Grid,
  CssBaseline,
  Autocomplete,
  FormHelperText,
} from "@mui/material";
import NavButton from "@/app/components/NavButton";
import { SelfEmployedDetailsErrorFocus } from "@/app/components/errorFocus";
import { useFormik } from "formik";
import { SelfEmployedDetailsSchema } from "@/app/components/validateSchema";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setBanks,
  setBusinessOwned,
  setBusinessType,
  setCompanyAddress,
  setFormData,
  setIndustryType,
  setPincodeError,
} from "@/lib/reducers/reducer";
import {
  useApiCallMutation,
  useGetApiCallQuery,
} from "@/lib/services/apiCallServices";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";
import { getInitialSelfEmployedValues } from "@/app/components/initialValues";
import numberToWords from "number-to-words";
const SelfEmployed = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [turnoverInWords, setTurnoverInWords] = useState();
  const [monthlyProfitInWords, setMonthlyProfitInWords] = useState();
  //data from redux
  const formData = useSelector((state) => state?.form?.formData);
  const PinCodeErrorData = useSelector((state) => state?.form?.pinCodeError);
  const CompanyAddressData = useSelector(
    (state) => state?.form?.companyAddress
  );
  const BusinessOwnedListData = useSelector(
    (state) => state?.form?.businessOwnedList
  );
  const BusinessTypeListData = useSelector(
    (state) => state?.form?.businessTypeList
  );
  const IndustryTypeListData = useSelector(
    (state) => state?.form?.industryTypeList
  );
  const BankListData = useSelector((state) => state?.form?.bankList);
  //----
  const GetBusinessOwnedList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getBusinessOwned,
    method: "POST",
    data: {},
  });
  useEffect(() => {
    if (
      GetBusinessOwnedList?.isSuccess &&
      GetBusinessOwnedList?.data?.data !== null
    ) {
      const modifyres = GetBusinessOwnedList?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      console.log(modifyres);
      dispatch(setBusinessOwned(modifyres));
    }
  }, [GetBusinessOwnedList?.isSuccess]);
  //----
  const GetBusinessList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getBusinessTypes,
    method: "POST",
    data: {},
  });
  useEffect(() => {
    if (GetBusinessList?.isSuccess && GetBusinessList?.data?.data !== null) {
      const modifyres = GetBusinessList?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      console.log(modifyres);
      dispatch(setBusinessType(modifyres));
    }
  }, [GetBusinessList?.isSuccess]);
  //----
  const GetIndustryTypesList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getIndustryTypes,
    method: "POST",
    data: {},
  });
  useEffect(() => {
    if (
      GetIndustryTypesList?.isSuccess &&
      GetIndustryTypesList?.data?.data !== null
    ) {
      const modifyres = GetIndustryTypesList?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      console.log(modifyres);
      dispatch(setIndustryType(modifyres));
    }
  }, [GetIndustryTypesList?.isSuccess]);
  //----
  const GetAllBankList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getBanks,
    method: "POST",
    data: {},
  });
  useEffect(() => {
    if (GetAllBankList?.isSuccess && GetAllBankList?.data?.data !== null) {
      const modifyres = GetAllBankList?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      console.log(modifyres);
      dispatch(setBanks(modifyres));
    }
  }, [GetAllBankList?.isSuccess]);
  //----
  const Year = [
    { label: "1 Year", value: "1 Year" },
    { label: "1-2 Years", value: "1-2 Years" },
    { label: "3 Years", value: "3 Years" },
    { label: "3-5 Years", value: "3-5 Years" },
    { label: "5+ Years", value: "5+ Years" },
  ];
  const handlePrev = () => {
    router.push("/get-registered/employe-type");
  };
  const navigateToPersonalDetails = () => {
    router.push("/get-registered/personaldetails");
  };
  //getAddress API Call
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
          companyPincode: "",
        })
      );
      dispatch(
        setFormData({
          employmentDetails: {
            ...formData.employmentDetails,
            pinCode: event.target.value,
          },
        })
      );
      if (event.target.value?.length === 6) {
        dispatch(
          setPincodeError({
            ...PinCodeErrorData,
            companyPincode: "",
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
            employmentDetails: {
              ...formData.employmentDetails,
              pinCode: event.target.value,
              cityId: "",
              stateId: "",
              countryId: "",
            },
          })
        );
        dispatch(
          setCompanyAddress({
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
            employmentDetails: {
              ...formData.employmentDetails,
              pinCode: formData?.employmentDetails?.pinCode,
              cityId: getPinCodeAddressApiData?.data?.data?.city?.id,
              stateId: getPinCodeAddressApiData?.data?.data?.state?.id,
              countryId: getPinCodeAddressApiData?.data?.data?.country?.id,
            },
          })
        );
        dispatch(
          setCompanyAddress({
            city: getPinCodeAddressApiData?.data?.data?.city?.name,
            state: getPinCodeAddressApiData?.data?.data?.state?.name,
            country: getPinCodeAddressApiData?.data?.data?.country?.name,
          })
        );
      } else if (getPinCodeAddressApiData?.data?.status.code === 404)
       {
        dispatch(
          setPincodeError({
            ...PinCodeErrorData,
            companyPincode: "Pin code does not exists",
          })
        );
      } else {
        dispatch(
          setPincodeError({
            ...PinCodeErrorData,
            companyPincode: "",
          })
        );
      }
    }
  }, [getPinCodeAddressApiData?.isSuccess]);

  //Drop-Off Api
  const [DropOffApi, dropOffApiData] = useApiCallMutation();
  const dropOffRequest = async () => {
    const data = {
      leadId: sessionStorage.getItem("leadId"),
      stage: "employment details",
      employmentDetails: {
        companyTypeId: formData?.employmentDetails?.companyTypeId,
        industryTypeId: formData?.employmentDetails?.industryTypeId,
        companyName: formData?.employmentDetails?.companyName,
        designation: formData?.employmentDetails?.designation,
        address: formData?.employmentDetails?.address,
        pinCode: formData?.employmentDetails?.pinCode,
        countryId: formData?.employmentDetails?.countryId,
        stateId: formData?.employmentDetails?.stateId,
        cityId: formData?.employmentDetails?.cityId,
        yearsWorkingIn: formData?.employmentDetails?.yearsWorkingIn,
        businessTypeId: formData?.employmentDetails?.businessTypeId,
        professionTypeId: formData?.employmentDetails?.professionTypeId,
        turnover: formData?.employmentDetails?.turnover,
        monthlyProfit: formData?.employmentDetails?.monthlyProfit,
        income: formData?.employmentDetails?.income,
        salaryMode: formData?.employmentDetails?.salaryMode,
        bankId: formData?.employmentDetails?.bankId,
        currentAccountBankId: formData?.employmentDetails?.currentAccountBankId,
        savingAccountBankId: formData?.employmentDetails?.savingAccountBankId,
        businessOwnedId: formData?.employmentDetails?.businessOwnedId,
        gst: formData?.employmentDetails?.gst,
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
      endPoint: apiEndPointsConfig.DropOff,
      method: "POST",
      data: { data },
    });
  };
  //submit handle
  const handleSubmit = async () => {
    dispatch(
      setFormData({
        employmentDetails: {
          ...formData.employmentDetails,
          salaryMode: "Bank Transfer",
          income: "0",
        },
      })
    );
    if (PinCodeErrorData?.companyPincode === "") {
      await dropOffRequest();
      navigateToPersonalDetails();
    } else {
      document.getElementById("pinCode").focus();
    }
    navigateToPersonalDetails();
  };
  const formik = useFormik({
    initialValues: getInitialSelfEmployedValues(formData),
    validationSchema: SelfEmployedDetailsSchema,
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
            Employment Details
          </Typography>

          <Grid container rowGap={2}>
            <Typography varient="h6" sx={{ color: "green" }}>
              Business
            </Typography>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Business Run By*{" "}
              </Typography>
              <Autocomplete
                id="businessOwnedId"
                name="businessOwnedId"
                disablePortal
                options={BusinessOwnedListData}
                value={
                  BusinessOwnedListData?.find(
                    (option) =>
                      formData?.employmentDetails?.businessOwnedId ===
                      option.value
                  )?.label
                }
                onBlur={formik.handleBlur}
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        businessOwnedId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("businessOwnedId", newValue);
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
              />
              {formik.touched?.businessOwnedId &&
                formik.errors?.businessOwnedId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.businessOwnedId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                How many years have you been working at your current Business?*
              </Typography>
              <Autocomplete
                disablePortal
                id="yearsWorkingIn"
                name="yearsWorkingIn"
                options={Year}
                fullWidth
                onBlur={formik.handleBlur}
                value={formData?.employmentDetails?.yearsWorkingIn}
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        yearsWorkingIn: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("yearsWorkingIn", newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
              />
              {formik.touched?.yearsWorkingIn &&
                formik.errors?.yearsWorkingIn && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.yearsWorkingIn}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Business Type*
              </Typography>
              <Autocomplete
                disablePortal
                onBlur={formik.handleBlur}
                id="businessTypeId"
                name="businessTypeId"
                options={BusinessTypeListData ? BusinessTypeListData : ""}
                fullWidth
                value={
                  BusinessTypeListData?.find(
                    (option) =>
                      formData?.employmentDetails?.businessTypeId ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        businessTypeId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("businessTypeId", newValue);
                }}
                renderInput={(params) => (
                  <TextField placeholder="Please Select" {...params} />
                )}
              />
              {formik.touched?.businessTypeId &&
                formik.errors?.businessTypeId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.businessTypeId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Industry
              </Typography>
              <Autocomplete
                disablePortal
                onBlur={formik.handleBlur}
                id="industryTypeId"
                name="industryTypeId"
                options={IndustryTypeListData ? IndustryTypeListData : ""}
                fullWidth
                value={
                  IndustryTypeListData?.find(
                    (option) =>
                      formData?.employmentDetails?.industryTypeId ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        industryTypeId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("industryTypeId", newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select..." />
                )}
              />
              {formik.touched?.industryTypeId &&
                formik.errors?.industryTypeId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.industryTypeId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Company Name
              </Typography>
              <TextField
                variant="outlined"
                id="companyName"
                name="companyName"
                fullWidth
                onBlur={formik.handleBlur}
                placeholder="Enter Your Company Name"
                value={formData?.employmentDetails?.companyName}
                onChange={(event, newValue) => {
                  if (/^(?![ ]).*$/.test(event.target.value)) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          companyName: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />

              {formik.touched?.companyName && formik.errors?.companyName && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.companyName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Company Address
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id="address"
                onBlur={formik.handleBlur}
                name="address"
                placeholder="Enter the Company address"
                value={formData?.employmentDetails?.address}
                onChange={(event, newValue) => {
                  if (
                    /^(?![^A-Za-z0-9])[A-Za-z0-9\s,-/]*$/.test(
                      event.target.value
                    )
                  ) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          address: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />
              {formik.touched?.address && formik.errors?.address && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.address}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} sx={{ color: "#243771" }}>
              <TextField
                onBlur={formik.handleBlur}
                variant="outlined"
                fullWidth
                id="pinCode"
                name="pinCode"
                placeholder="Enter the Company Pincode"
                value={formData?.employmentDetails?.pinCode}
                onChange={(event) => {
                  getAddress(event);
                  formik.handleChange(event);
                }}
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
              {PinCodeErrorData?.companyPincode ? (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {PinCodeErrorData?.companyPincode}
                </FormHelperText>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="cityId"
                name="cityId"
                disabled
                placeholder="City"
                value={CompanyAddressData?.city}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="stateId"
                name="stateId"
                disabled
                placeholder="State"
                value={CompanyAddressData?.state}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                disabled
                id="countryId"
                name="countryId"
                placeholder="Country"
                value={CompanyAddressData?.country}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Designation
              </Typography>
              <TextField
                onBlur={formik.handleBlur}
                variant="outlined"
                fullWidth
                id="designation"
                name="designation"
                placeholder="Enter Your Designation"
                value={formData?.employmentDetails?.designation}
                onChange={(event, newValue) => {
                  if (/^(?![ ]).*$/.test(event.target.value)) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          designation: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />
              {formik.touched?.designation && formik.errors?.designation && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.designation}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Gross Annual Sales/Turnover *
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                onBlur={formik.handleBlur}
                id="turnover"
                name="turnover"
                placeholder="Enter Annual Turnover"
                value={formData?.employmentDetails?.turnover}
                onChange={(e, newValue) => {
                  if (
                    /^\d*$/.test(e.target.value) &&
                    e.target.value.length <= 10
                  ) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          turnover: e.target.value,
                        },
                      })
                    );
                    const number = parseFloat(e.target.value);
                    if (!isNaN(number) && isFinite(number)) {
                      setTurnoverInWords(numberToWords.toWords(number));
                    } else {
                      setTurnoverInWords("");
                    }
                    formik.handleChange(e);
                  }
                }}
              />
              {formik.touched?.turnover && formik.errors?.turnover && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.turnover}
                </FormHelperText>
              )}
              {turnoverInWords ? (
                <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                  {turnoverInWords?.charAt(0).toUpperCase() +
                    turnoverInWords?.slice(1)}{" "}
                  Only
                </Typography>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Monthly Profit
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                onBlur={formik.handleBlur}
                id="monthlyProfit"
                name="monthlyProfit"
                placeholder="Enter Your Monthly Profit"
                value={formData?.employmentDetails?.monthlyProfit}
                onChange={(e, newValue) => {
                  if (
                    /^\d*$/.test(e.target.value) &&
                    e.target.value.length <= 7
                  ) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          monthlyProfit: e.target.value,
                        },
                      })
                    );
                    const number = parseFloat(e.target.value);
                    if (!isNaN(number) && isFinite(number)) {
                      setMonthlyProfitInWords(numberToWords.toWords(number));
                    } else {
                      setMonthlyProfitInWords("");
                    }
                    formik.handleChange(e);
                  }
                }}
              />
              {formik.touched?.monthlyProfit &&
                formik.errors?.monthlyProfit && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.monthlyProfit}
                  </FormHelperText>
                )}
              {monthlyProfitInWords ? (
                <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                  {monthlyProfitInWords?.charAt(0).toUpperCase() +
                    monthlyProfitInWords?.slice(1)}{" "}
                  Only
                </Typography>
              ) : (
                ""
              )}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                GST{" "}
                {formData?.employmentDetails?.turnover >= 2000000 && (
                  <span style={{ color: "#243771" }}>*</span>
                )}
              </Typography>
              <TextField
                variant="outlined"
                id="gst"
                name="gst"
                fullWidth
                onBlur={formik.handleBlur}
                inputProps={{ maxLength: 15 }}
                placeholder="Enter GST Number"
                value={formData?.employmentDetails?.gst}
                onChange={(event, newValue) => {
                  const inputValue = event.target.value.toUpperCase();
                  if (event.target.value.length <= 15) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          gst: inputValue,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />

              {formik.touched?.gst && formik.errors?.gst && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.gst}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Business/Current Account Is With? *
              </Typography>
              <Autocomplete
                disablePortal
                id="currentAccountBankId"
                name="currentAccountBankId"
                onBlur={formik.handleBlur}
                options={BankListData ? BankListData : ""}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
                value={
                  BankListData?.find(
                    (option) =>
                      formData?.employmentDetails?.currentAccountBankId ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        currentAccountBankId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("currentAccountBankId", newValue);
                }}
              />
              {formik.touched?.currentAccountBankId &&
                formik.errors?.currentAccountBankId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.currentAccountBankId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Primary/Savings Bank Account Is With? *
              </Typography>
              <Autocomplete
                disablePortal
                id="savingAccountBankId"
                name="savingAccountBankId"
                onBlur={formik.handleBlur}
                options={BankListData ? BankListData : ""}
                fullWidth
                value={
                  BankListData?.find(
                    (option) =>
                      formData?.employmentDetails?.savingAccountBankId ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        savingAccountBankId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("savingAccountBankId", newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
              />
              {formik.touched?.savingAccountBankId &&
                formik.errors?.savingAccountBankId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.savingAccountBankId}
                  </FormHelperText>
                )}
            </Grid>
          </Grid>
          <>
            <NavButton
              handlePrev={handlePrev}
              ErrorFocus={() => SelfEmployedDetailsErrorFocus(formik)}
            />
          </>
        </Grid>
      </form>
    </>
  );
};

export default SelfEmployed;
