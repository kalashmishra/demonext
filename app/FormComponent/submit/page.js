"use client";
import React, { useEffect, useState } from "react";
import {
  Typography,
  Checkbox,
  Box,
  CssBaseline,
  Grid,
  FormHelperText,
} from "@mui/material";

import { useFormik } from "formik";
import Link from "next/link";
import NavButton from "@/app/components/NavButton";
import { SubmitErrorFocus } from "@/app/components/errorFocus";
import ModalLoader from "@/app/components/StepperLoaderModal/page";
import ThankyouModal from "@/app/components/ThankyouModal/page";
import ContinueModal from "@/app/components/ContinueModal/page";
import { submitSchema } from "@/app/components/validateSchema";
import { useDispatch, useSelector } from "react-redux";
import { getInitialSubmitValues } from "@/app/components/initialValues";
import { setFormData, setLenderDetails } from "@/lib/reducers/reducer";
import { useRouter } from "next/navigation";
import { useApiCallMutation } from "@/lib/services/apiCallServices";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";

const Submit = () => {
  const [Read, setRead] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const formData = useSelector((state) => state?.form?.formData);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [thankYouLoader, setThankYouLoader] = useState(false);
  const [ContinueLoader, setContinueLoader] = useState(false);
  //Lead Status Api
  const [LeadStatusApi, LeadStatusApiData] = useApiCallMutation();
  useEffect(() => {
    if (LeadStatusApiData?.isSuccess) {
      console.log(LeadStatusApiData, "LeadStatusApiData");
      const response = JSON.stringify(LeadStatusApiData);
      sessionStorage.setItem("Lenders", response);
      dispatch(setLenderDetails(LeadStatusApiData));
      if (LeadStatusApiData?.data?.data?.status?.length === 0) {
        console.log("submitLoader,false");
        setSubmitLoader(false);
        router.push("/get-registered/offers");
      } else {
        setSubmitLoader(false);
        setContinueLoader(true);
      }
    }
  }, [LeadStatusApiData?.isSuccess]);
  const leadStatusFunction = () => {
    console.log("fff");
    const data = {
      leadId: sessionStorage.getItem("leadId"),
    };
    LeadStatusApi({
      endPoint: apiEndPointsConfig?.LeadStatus,
      method: "POST",
      data: { data },
    });
  };
  //generate Lead Api
  const [GenerateLeadApi, GenerateLeadApiData] = useApiCallMutation();
  useEffect(() => {
    if (GenerateLeadApiData?.isSuccess) {
      const response = GenerateLeadApiData?.data?.data;
      if (
        GenerateLeadApiData?.data?.status?.code === 404 ||
        GenerateLeadApiData?.data?.status?.code === 400
      ) {
        alert("Provided leadId does not exist");
        dispatch(
          setFormData({
            leadId: "",
            stage: "",
            contactNo: "",
            termsAndCondition: true,
            loan: {
              reason: null,
              amount: 1000,
              tenure: 1,
            },
            panCard: "",
            aadharNo: "",
            emailId: "",
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
              emailId: "",
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
            finance: {
              panCard: "",
              aadharNo: "",
            },
            others: {
              totalEmiPaidMonthly: 0,
              interestedToGetCreditCard: true,
            },
            utm: {
              id: "",
              url: "",
              source: "",
              medium: "",
              campaign: "",
              term: "",
              content: "",
              clickId: "",
            },
            extras: {
              browser: "",
              operatingSystem: "",
              ipAddress: "",
              timestamp: "",
              userAgent: "",
              location: "",
            },
          })
        );
        router.push("/");
        return;
      }
      if (response?.duplicate === true) {
        setTimeout(() => {
          setSubmitLoader(false);
          setThankYouLoader(true);
        }, 2000);
        setTimeout(() => {
          router.push("/get-registered/offers");
          setThankYouLoader(false);
        }, 10000);
      } else {
        setTimeout(() => {
          leadStatusFunction();
        }, 14000);
      }
    }
  }, [GenerateLeadApiData?.isSuccess]);

  const handlePrev = () => {
    router.push("/get-registered/otherDetails");
  };
  const handleSubmit = () => {
    setSubmitLoader(true);
    const data = { ...formData };
    GenerateLeadApi({
      endPoint: apiEndPointsConfig?.GenerateLead,
      method: "POST",
      data: { data },
    });
    console.log(GenerateLeadApiData,'GenerateLeadApiData');
  };

  const formik = useFormik({
    initialValues: getInitialSubmitValues(formData),
    validationSchema: submitSchema,
    onSubmit: handleSubmit,
  });

  const toggleRead = () => {
    setRead(true);
  };

  const offRead = () => {
    setRead(false);
  };

  return (
    <>
      <CssBaseline />
      <form onSubmit={formik.handleSubmit}>
        <Grid rowGap={6} container>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", md: "35px", lg: "36px", xl: "40px" },
              fontWeight: "bold",
              color: "#243771",
            }}
          >
            Submit Loan Request
          </Typography>
          <Grid container rowGap={1}>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Checkbox
                  name="termsAndCondition"
                  id="termsAndCondition"
                  onChange={(e) => {
                    dispatch(
                      setFormData({
                        termsAndCondition: e.target.checked,
                      })
                    );
                    formik.handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                  checked={formData.termsAndCondition}
                />
                <Typography>
                  I hereby declare that I have read, understood and agree to the
                  {"  "}
                  <Link
                    style={{ fontWeight: "600" }}
                    href={"/terms-and-conditions"}
                  >
                    Terms & Conditions
                  </Link>
                  {"  "}
                  and the {"  "}
                  <Link style={{ fontWeight: "600" }} href={"/privacy-policy"}>
                    Privacy Policy
                  </Link>
                  .{"  "}And I hereby consent to Boost.Money and EMKAY
                  CONSULTANTS LIMITED being appointed as my authorized
                  representative to receive my Credit Information from Experian
                  for the purpose of Credit Assessment to advise me on the
                  financial journey, on ongoing basis for not exceeding a period
                  of six (6) months.{" "}
                  {Read ? (
                    <>
                      This authorization remains valid until the objective of
                      obtaining the Bureau Score for connecting with Credmudra's
                      lending partner is achieved, or up to six months from the
                      consent collection date. <br />
                      Additionally, I grant permission to Credmudra, its Lending
                      Partners, and affiliated entities to contact me for
                      various communication from Credmudra via SMS, E-mail, and
                      WhatsApp for loans, credit cards, or other relevant
                      information or promotions. <br />I also agree to{" "}
                      <Link
                        target="_blank"
                        style={{ fontWeight: "600" }}
                        href={"/experian-Terms-and-conditions"}
                      >
                        Experian's Terms and Conditions.
                      </Link>
                      <br />
                      <Link
                        style={{ fontWeight: "600" }}
                        onClick={offRead}
                        href={""}
                      >
                        Read Less{" "}
                      </Link>
                    </>
                  ) : (
                    <Link
                      style={{ fontWeight: "600" }}
                      onClick={toggleRead}
                      href={""}
                    >
                      Read More{" "}
                    </Link>
                  )}
                </Typography>
              </Box>
              {formik.errors.termsAndCondition && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.termsAndCondition}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <NavButton
            handlePrev={handlePrev}
            ErrorFocus={() => SubmitErrorFocus(formik)}
            isSubmit={true}
          />
        </Grid>
      </form>
      {submitLoader ? <ModalLoader /> : ""}
      {thankYouLoader ? <ThankyouModal /> : ""}
      {ContinueLoader ? <ContinueModal /> : ""}
    </>
  );
};

export default Submit;
