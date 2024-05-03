"use client";
import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  CssBaseline,
  Grid,
  InputBase,
  Box,
  FormHelperText,
  Autocomplete,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import numberToWords from "number-to-words";
import { getInitialLoanValues } from "@/app/components/initialValues";
import { loanSchema } from "@/app/components/validateSchema";
import { setFormData, setLoanReason } from "@/lib/reducers/reducer";
import NavButton from "@/app/components/NavButton";
import {
  useApiCallMutation,
  useGetApiCallQuery,
} from "@/lib/services/apiCallServices";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";
import { LoanErrorFocus } from "@/app/components/errorFocus";
import { useRouter } from "next/navigation";
const Loan = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [amountInWords, setAmountInWords] = useState();
  // data from redux
  const formData = useSelector((state) => state?.form?.formData);
  const LoanReasonListData = useSelector(
    (state) => state?.form?.loanReasonList
  );
  //Loan Reason Api
  const GetLoanReasonList = useGetApiCallQuery({
    endPoint: apiEndPointsConfig?.getLoanReason,
    method: "POST",
    data: {},
  });
  useEffect(() => {
    if (
      GetLoanReasonList?.isSuccess &&
      GetLoanReasonList?.data?.data !== null
    ) {
      const modifyres = GetLoanReasonList?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      dispatch(setLoanReason(modifyres));
    }
  }, [GetLoanReasonList?.isSuccess]);
  //Drop-Off Api
  const [DropOffApi, dropOffApiData] = useApiCallMutation();
  const dropOffRequest = async () => {
    const data = {
      leadId: sessionStorage.getItem("leadId"),
      stage: "loan details",
      loan: {
        reason: formData?.loan?.reason,
        amount: formData?.loan?.amount,
        otherReason: formData?.loan?.otherReason,
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

  //Prepopulate Api
  const [PrePopulateFormDataApi, prePopulateFormData] = useApiCallMutation();
  const prePopulateForm = (panCard) => {
    dispatch(
      setFormData({
        ...formData,
        panCard: panCard,
        finance: {
          panCard: panCard,
        },
      })
    );
    const data = {
      panCard: panCard,
    };
    PrePopulateFormDataApi({
      endPoint: apiEndPointsConfig.PrePopulateFormData,
      method: "POST",
      data: {
        data,
      },
    });
  };
  useEffect(() => {
    if (prePopulateFormData?.data?.status?.code === 200) {
      console.log(prePopulateFormData?.data?.data, "prepopulated");
      const prePopulateData = {
        ...formData,
        termsAndCondition: prePopulateFormData?.data?.data.termsAndCondition,
        employmentType: prePopulateFormData?.data?.data.employmentType,
        panCard: prePopulateFormData?.data?.data.panCard,
        employmentDetails: {
          ...prePopulateFormData?.data?.data.employmentDetails,
        },
        personalInfo: {
          ...formData.personalInfo,
          firstName: prePopulateFormData?.data?.data.personalInfo.firstName,
          lastName: prePopulateFormData?.data?.data.personalInfo.lastName,
          genderId: prePopulateFormData?.data?.data.personalInfo.genderId,
          dateOfBirth: prePopulateFormData?.data?.data.personalInfo.dateOfBirth,
          qualificationId:
            prePopulateFormData?.data?.data.personalInfo.qualificationId,
          maritalStatus:
            prePopulateFormData?.data?.data.personalInfo.maritalStatus,
        },
        finance: {
          panCard: prePopulateFormData?.data?.data.finance.panCard,
        },
        address: {
          ...prePopulateFormData?.data?.data.address,
        },
        others: {
          totalEmiPaidMonthly:
            prePopulateFormData.data.data.others.totalEmiPaidMonthly,
          interestedToGetCreditCard:
            prePopulateFormData.data.data.others.interestedToGetCreditCard,
        },
      };
      dispatch(setFormData(prePopulateData));
    } else if (prePopulateFormData?.data?.status?.code === 400) {
      const prePopulateData = {
        termsAndCondition: true,
        panCard: formData?.panCard,
        employmentType: "",
        employmentDetails: {
          companyTypeId: "",
          industryTypeId: "",
          companyName: "",
          designation: "",
          address: "",
          pinCode: "",
          countryId: "",
          stateId: "",
          cityId: "",
          yearsWorkingIn: "",
          businessTypeId: "",
          professionTypeId: "",
          turnover: "",
          monthlyProfit: "",
          income: "",
          salaryMode: "",
          bankId: "",
          currentAccountBankId: "",
          savingAccountBankId: "",
          businessOwnedId: "",
          gst: "",
        },
        personalInfo: {
          ...formData.personalInfo,
          firstName: "",
          lastName: "",
          genderId: "",
          dateOfBirth: "",
          qualificationId: "",
          maritalStatus: "",
        },
        address: {
          addressLine1: "",
          addressLine2: "",
          pinCode: "",
          countryId: "",
          stateId: "",
          cityId: "",
          residenceTypeId: "",
          yearsLivingIn: "",
        },
        others: {
          totalEmiPaidMonthly: 0,
          interestedToGetCreditCard: true,
        },
      };
      dispatch(setFormData(prePopulateData));
      dispatch(
        setCompanyAddress({
          city: "",
          state: "",
          country: "",
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
  }, [prePopulateFormData?.isSuccess]);

  const navigateToEmployeType = () => {
    if (
      localStorage.getItem("loanType") !== undefined &&
      localStorage.getItem("loanType") !== "businessLoan"
    ) {
      router.push("/get-registered/employe-type");
    } else {
      dispatch(
        setFormData({
          employmentType: "Self Employed",
        })
      );
      router.push("/get-registered/employe-type");
    }
  };
  const handleSubmit = async () => {
    dispatch(
      setFormData({
        leadId: sessionStorage.getItem("leadId"),
      })
    );
    dropOffRequest();
    navigateToEmployeType();
  };
  const formik = useFormik({
    initialValues: getInitialLoanValues(formData),
    validationSchema: loanSchema,
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
            Loan Details
          </Typography>
          <Grid container rowGap={2}>
            <Grid container rowGap={1}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontSize: { xs: "16px" } }}>
                  Enter the Loan Amount:
                </Typography>
                <Box
                  sx={{
                    width: "90px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "2px solid #c6e5cb",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#5fb76d",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    ₹
                  </Typography>
                  <InputBase
                    id="amount"
                    name="amount"
                    sx={{ width: "80px", ml: 1, padding: 0 }}
                    value={formData?.loan?.amount}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      if (/^\d*$/.test(e.target.value)) {
                        if (e.target.value >= 0 && e.target.value <= 1500000) {
                          dispatch(
                            setFormData({
                              loan: {
                                ...formData.loan,
                                amount: e.target.value,
                              },
                            })
                          );
                          const number = parseFloat(e.target.value);
                          if (!isNaN(number) && isFinite(number)) {
                            setAmountInWords(numberToWords.toWords(number));
                          } else {
                            setAmountInWords("");
                          }
                          formik.handleChange(e);
                        }
                      }
                    }}
                  />
                </Box>
              </Grid>
              <input
                id="amount"
                style={{width:"100%",accentColor: "#08911f",}}
                type="range"
                name="amount range-slider"
                className="form-control-range slider"
                value={formData?.loan?.amount}
                onBlur={formik.handleBlur}
                onChange={(e, newValue) => {
                  if (/^\d*$/.test(e.target.value)) {
                    dispatch(
                      setFormData({
                        loan: {
                          ...formData.loan,
                          amount: e.target.value,
                        },
                      })
                    );
                    const number = parseFloat(e.target.value);
                    if (!isNaN(number) && isFinite(number)) {
                      setAmountInWords(numberToWords.toWords(number));
                    } else {
                      setAmountInWords("");
                    }
                    formik.handleChange(e);
                  }
                }}
                min="1000"
                max="1500000"
                step="1000"
              />
              <Grid
                container
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography sx={{ fontSize: "13px", color: "" }}>
                  1000
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "" }}>
                  1500000
                </Typography>
              </Grid>
              {formik.touched.amount && formik.errors.amount && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.amount}
                </FormHelperText>
              )}
            </Grid>
            {amountInWords ? (
              <Typography variant="subtitle1">
                {amountInWords?.charAt(0).toUpperCase() +
                  amountInWords?.slice(1)}{" "}
                Only
              </Typography>
            ) : (
              ""
            )}
            <Grid container rowGap={1}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontSize: { xs: "16px" } }}>
                  Enter the Loan Tenure:
                </Typography>
                <Box
                  sx={{
                    width: "90px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "2px solid #c6e5cb",
                  }}
                >
                  <InputBase
                    id="tenure"
                    name="tenure"
                    sx={{ ml: 1, padding: 0 }}
                    value={formData?.loan?.tenure}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      if (
                        !isNaN(e.target.value) &&
                        !/\s/.test(e.target.value)
                      ) {
                        if (e.target.value >= 0 && e.target.value <= 60) {
                          dispatch(
                            setFormData({
                              loan: {
                                ...formData.loan,
                                tenure: e.target.value,
                              },
                            })
                          );
                          formik.handleChange(e);
                        }
                      }
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Month
                  </Typography>
                </Box>
              </Grid>
              <input
                id="tenure"
                style={{width:"100%",accentColor: "#08911f",}}
                name="tenure "
                type="range"
                className="form-control-range slider"
                value={formData?.loan?.tenure}
                onBlur={formik.handleBlur}
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      loan: {
                        ...formData.loan,
                        tenure: event.target.value,
                      },
                    })
                  );
                  formik.handleChange(event);
                }}
                min="1"
                max="60"
                step="1"
              />
              <Grid
                container
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography sx={{ fontSize: "13px", color: "" }}>
                  1 Month
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "" }}>
                  60 Months
                </Typography>
              </Grid>
              {formik.touched.tenure && formik.errors.tenure && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.tenure}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Reason For Loan*</Typography>
              <Autocomplete
                id="reason"
                name="reason"
                fullWidth
                disablePortal
                options={LoanReasonListData ? LoanReasonListData : ""}
                value={
                  LoanReasonListData?.find(
                    (option) => formData?.loan?.reason === option.label
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      loan: {
                        ...formData.loan,
                        reason: newValue?.label,
                      },
                    })
                  );
                  formik.setFieldValue("reason", newValue?.label);
                }}
                onBlur={formik.handleBlur}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select Loan Reason" />
                )}
              />
              {formik.touched?.reason && formik.errors?.reason && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.reason}
                </FormHelperText>
              )}
            </Grid>
            {formData?.loan?.reason === "Others" && (
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Other Reason For Loan*
                </Typography>
                <TextField
                  id="otherReason"
                  name="otherReason"
                  variant="outlined"
                  fullWidth
                  placeholder="Loan Reason"
                  value={formData?.loan?.otherReason}
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    if (/^(?![ ]).*$/.test(e.target.value)) {
                      dispatch(
                        setFormData({
                          loan: {
                            ...formData.loan,
                            otherReason: e.target.value,
                          },
                        })
                      );
                    }
                    formik.handleChange(e);
                  }}
                />

                {formik?.touched?.otherReason &&
                  formik?.errors?.otherReason && (
                    <FormHelperText
                      sx={{
                        margin: 0,
                        color: "red",
                        fontSize: "14px",
                        ml: 1,
                      }}
                    >
                      {formik?.errors?.otherReason}
                    </FormHelperText>
                  )}
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography variant="subtitle1">PAN Card Number *</Typography>
              <TextField
                id="panCard"
                name="panCard"
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 10 }}
                placeholder="PAN NUMBER"
                value={formData?.panCard}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  const inputValue = e.target.value.toUpperCase();
                  if (e.target.value.length <= 10) {
                    dispatch(
                      setFormData({
                        ...formData,
                        panCard: inputValue,
                      })
                    );
                  }
                  if (e.target.value?.length === 10) {
                    prePopulateForm(inputValue);
                  }
                  formik.handleChange(e);
                }}
              />

              {formik.touched.panCard && formik.errors?.panCard && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.panCard}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Aadhar Number *</Typography>
              <TextField
                id="aadharNo"
                name="aadharNo"
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 4 }}
                placeholder="Enter Last 4 Digits of Aadhar."
                value={formData?.aadharNo}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  if (
                    /^\d*$/.test(e.target.value) &&
                    e.target.value.length <= 4
                  ) {
                    dispatch(
                      setFormData({
                        ...formData,
                        aadharNo: e.target.value,
                        finance: {
                          ...formData.finance,
                          aadharNo: e.target.value,
                        },
                      })
                    );
                  }
                  formik.handleChange(e);
                }}
              />

              {formik.touched.aadharNo && formik.errors?.aadharNo && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.aadharNo}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Email Address *</Typography>
              <TextField
                id="emailId"
                variant="outlined"
                name="emailId"
                fullWidth
                placeholder="abc@abc.com"
                value={formData?.personalInfo?.emailId}
                onBlur={formik.handleBlur}
                onChange={(event, newValue) => {
                  if (/^(?![ ]).*$/.test(event.target.value)) {
                    dispatch(
                      setFormData({
                        personalInfo: {
                          ...formData.personalInfo,
                          emailId: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />

              {formik.touched.emailId && formik.errors?.emailId && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors?.emailId}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <NavButton ErrorFocus={() => LoanErrorFocus(formik)} />
        </Grid>
      </form>
    </>
  );
};

export default Loan;
