"use client";
import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Grid,
  Box,
  Autocomplete,
  CssBaseline,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import bankTransfer from "@/public/Images/bank-transfer.svg";
import cash from "@/public/Images/cash.svg";

import { useFormik } from "formik";
import numberToWords from "number-to-words";
import { salariedSchema } from "@/app/components/validateSchema";
import Image from "next/image";
import NavButton from "@/app/components/NavButton";
import { SalariedErrorFocus } from "@/app/components/errorFocus";
import { useDispatch, useSelector } from "react-redux";
import {
  setBanks,
  setCompanyAddress,
  setCompanyType,
  setFormData,
  setIndustryType,
  setPincodeError,
} from "@/lib/reducers/reducer";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";
import {
  useApiCallMutation,
  useGetApiCallQuery,
} from "@/lib/services/apiCallServices";
import { getInitialSalariedValues } from "@/app/components/initialValues";
import { useRouter } from "next/navigation";

const Salaried = () => {
  const CompanyAddressData = useSelector(
    (state) => state?.form?.companyAddress
  );
  const PinCodeErrorData = useSelector((state) => state?.form?.pinCodeError);
  const [incomInWords, setIncomInWords] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const formData = useSelector((state) => state?.form?.formData);
  const IndustryTypeListData = useSelector(
    (state) => state?.form?.industryTypeList
  );
  const CompanyTypeListData = useSelector(
    (state) => state?.form?.companyTypeList
  );
  const BankListData = useSelector((state) => state?.form?.bankList);

  const GetIndustryTypesList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getIndustryTypes,
    method: "POST",
    data: {},
  });
  const GetCompanyTypesList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getCompanyTypes,
    method: "POST",
    data: {},
  });
  const GetAllBankList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getBanks,
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
  useEffect(() => {
    if (
      GetCompanyTypesList?.isSuccess &&
      GetCompanyTypesList?.data?.data !== null
    ) {
      const modifyres = GetCompanyTypesList?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      console.log(modifyres);
      dispatch(setCompanyType(modifyres));
    }
  }, [GetCompanyTypesList?.isSuccess]);
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
  const Year = [
    { label: "1 Year", value: "1 Year" },
    { label: "1-2 Years", value: "1-2 Years" },
    { label: "3 Years", value: "3 Years" },
    { label: "3-5 Years", value: "3-5 Years" },
    { label: "5+ Years", value: "5+ Years" },
  ];

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
  }
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
      } 
      else if (getPinCodeAddressApiData?.data?.status.code === 404) 
      {
        dispatch(
          setPincodeError({
            ...PinCodeErrorData,
            companyPincode: "Pin code does not exists",
          })
        );
      }
       else {
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

  const handleSubmit = async () => {
    dispatch(
      setFormData({
        employmentDetails: {
          ...formData.employmentDetails,
          monthlyProfit: "0",
          turnover: "0",
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
  const handlePrev = () => {
    router.push("/get-registered/employe-type");
  };

  const formik = useFormik({
    initialValues: getInitialSalariedValues(formData),
    validationSchema: salariedSchema,
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
          <Grid container xs={12} rowGap={2}>
            <Typography varient="h6" sx={{ color: "green" }}>
              Salaried Employee
            </Typography>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Company Type *
              </Typography>
              <Autocomplete
                id="companyTypeId"
                name="companyTypeId"
                disablePortal
                options={CompanyTypeListData}
                value={
                  CompanyTypeListData?.find(
                    (option) =>
                      formData?.employmentDetails?.companyTypeId ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        companyTypeId: newValue?.value,
                      },
                    })
                  );

                  formik.setFieldValue("companyTypeId", newValue);
                }}
                onBlur={formik.handleBlur}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select Company Type" />
                )}
              />
              {formik.touched?.companyTypeId &&
                formik.errors?.companyTypeId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.companyTypeId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Industry *
              </Typography>
              <Autocomplete
                id="industryTypeId"
                name="industryTypeId"
                disablePortal
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
                  <TextField {...params} placeholder="Select Industry Type" />
                )}
                onBlur={formik.handleBlur}
              />
              {formik.touched.industryTypeId &&
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
                Designation *
              </Typography>
              <TextField
                id="designation"
                name="designation"
                variant="outlined"
                fullWidth
                type="text"
                placeholder="Enter the Designation"
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.designation && formik.errors?.designation && (
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
                Company Name *
              </Typography>
              <TextField
                id="companyName"
                name="companyName"
                variant="outlined"
                fullWidth
                type="text"
                placeholder="Enter the Company Name"
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.companyName && formik.errors?.companyName && (
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
                Company Address *
              </Typography>
              <TextField
                id="address"
                name="address"
                variant="outlined"
                fullWidth
                type="text"
                placeholder="Enter the Company address"
                value={formData?.employmentDetails.address}
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors?.address && (
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
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Company Pincode *
              </Typography>
              <TextField
                id="pinCode"
                variant="outlined"
                name="pinCode"
                fullWidth
                placeholder="Enter the Company Pincode"
                value={formData?.employmentDetails?.pinCode}
                onChange={(event) => {
                  getAddress(event);
                  formik.handleChange(event);
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched?.pinCode && formik.errors.pinCode && (
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
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                City *
              </Typography>
              <TextField
                onBlur={formik.handleBlur}
                id="city"
                name="cityId"
                variant="outlined"
                fullWidth
                disabled
                placeholder="City"
                value={CompanyAddressData?.city}
                onChange={(e) => formik.handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                State *
              </Typography>
              <TextField
                variant="outlined"
                id="state"
                name="state"
                fullWidth
                disabled
                placeholder="State"
                value={CompanyAddressData?.state}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Country *
              </Typography>

              <TextField
                id="country"
                variant="outlined"
                name="country"
                fullWidth
                disabled
                placeholder="Country"
                value={CompanyAddressData?.country}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                How many years have you been working at your current company?*
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
                  <TextField placeholder="Please Select" {...params} />
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
                Monthly Income *
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id="income"
                name="income"
                placeholder="Enter the Monthly Income"
                value={formData?.employmentDetails?.income}
                onChange={(e, newValue) => {
                  if (/^\d*$/.test(e.target.value)) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          income: e.target.value,
                        },
                      })
                    );
                    const number = parseFloat(e.target.value);
                    if (!isNaN(number) && isFinite(number)) {
                      setIncomInWords(numberToWords.toWords(number));
                    } else {
                      setIncomInWords("");
                    }
                    formik.handleChange(e);
                  }
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched?.income && formik.errors?.income && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.income}
                </FormHelperText>
              )}
              {incomInWords ? (
                <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                  {incomInWords?.charAt(0).toUpperCase() +
                    incomInWords?.slice(1)}{" "}
                  Only
                </Typography>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                rowGap={4}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                  Mode of Salary *
                </Typography>
                <RadioGroup
                  row
                  id="salaryMode"
                  value={formik.values.employmentType}
                  onChange={(e) => {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          salaryMode: e.target.value,
                        },
                      })
                    );
                    formik.handleChange("salaryMode")(e.target.value);
                  }}
                  sx={{ display: "flex", gap: 4, justifyContent: "center" }}
                >
                  <FormControlLabel
                    value="Bank Transfer"
                    name="salaryMode"
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
                            formData?.employmentDetails?.salaryMode ===
                            "Bank Transfer"
                              ? { backgroundColor: " #F7D64A", border: "none" }
                              : { backgroundColor: "transparent" },
                        }}
                      >
                        <Image src={bankTransfer} alt="type" />
                        <Typography sx={{ fontSize: "11px" }}>
                          Bank Transfer
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="Cash"
                    name="salaryMode"
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
                            formData?.employmentDetails?.salaryMode === "Cash"
                              ? { backgroundColor: " #F7D64A", border: "none" }
                              : { backgroundColor: "transparent" },
                        }}
                      >
                        <Image src={cash} alt="type" />
                        <Typography sx={{ fontSize: "11px" }}>Cash</Typography>
                      </Box>
                    }
                  />
                </RadioGroup>
              </Grid>
              {formik.touched?.salaryMode && formik.errors?.salaryMode && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors?.salaryMode}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Name of Bank Account *
              </Typography>
              <Autocomplete
                disablePortal
                id="bankId"
                name="bankId"
                options={BankListData ? BankListData : ""}
                value={
                  BankListData?.find(
                    (option) =>
                      formData?.employmentDetails?.bankId === option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        bankId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("bankId", newValue);
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField placeholder="Select Bank Name" {...params} />
                )}
                onBlur={formik.handleBlur}
              />
              {formik.touched?.bankId && formik.errors?.bankId && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.bankId}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <>
            <NavButton
              handlePrev={handlePrev}
              ErrorFocus={() => SalariedErrorFocus(formik)}
            />
          </>
        </Grid>
      </form>
    </>
  );
};

export default Salaried;
