"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import avoid_loan from "@/public/assets/images/avoid_loan.webp";
import Image from "next/image";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import { AccordionItem } from "@/app/components/AccordianItem";
const TipsToAvoidPl = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box bgcolor="#243771">
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid
          container
          bgcolor="#243771"
          sx={{ padding: { xs: "16px", md: "32px" } }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center" },
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Image
                  src={avoid_loan}
                  alt="Avoid Personal Loan Request Rejection"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                marginTop: { xs: "20px", sm: "0px" },
              }}
            >
              <Box
                sx={{
                  width: { sm: "100%", xl: "100%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    fontSize: { xs: "24px", sm: "32px", lg: "34px" },
                    color: "#f7d64a",
                    fontWeight: "900",
                    lineHeight: "normal",
                  }}
                >
                  Tips To Avoid Personal Loan Request Rejection
                </Typography>
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    fontSize: { xs: "16px" },
                    color: "#fff",
                    marginTop: { xs: "20px", sm: "20px" },
                  }}
                >
                  There are a few aspects you need to stay mindful of to ensure
                  that the lender does not reject your request for credit:
                </Typography>
                <AccordionItem
                  checkCircle="white"
                  headingColor="#F7D64A"
                  contentColor="white"
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  heading="    Submit All the Required Documents"
                  content="   Ensure that you provide all the necessary documents
                    carefully. If any paper goes missing, it can lead to the
                    rejection of your loan request. In such a scenario, you
                    can convey the same to your lender. They may ask you to
                    submit an alternative document."
                />
                <AccordionItem
                  checkCircle="white"
                  headingColor="#F7D64A"
                  contentColor="white"
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  heading="Meet the Eligibility Criteria"
                  content="Lenders ensure that you meet all parameters of the
                    eligibility criteria before approving the personal loan.
                    These parameters include the minimum income, age limit,
                    credit score, citizenship, etc. When you meet these
                    standards, lenders get assurance that you can repay
                    positively."
                />
                <AccordionItem
                  checkCircle="white"
                  headingColor="#F7D64A"
                  contentColor="white"
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  heading="  Correctly Fill in the Form"
                  content="  You should not make any incorrect entries on your loan
                    application form. The information mentioned in the form
                    and the information stated in your documents must match.
                    In case they do not, the lender may ask you to repeat the
                    loan application process."
                />
                <AccordionItem
                  checkCircle="white"
                  headingColor="#F7D64A"
                  contentColor="white"
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  heading="   Keep a Low Debt-to-Income Ratio"
                  content="    A high debt-to-income ratio can lead to the rejection of
                    your credit request as it suggests that most of your
                    income goes to paying EMIs and it will be difficult for
                    you to repay a new loan. So, you need to repay your
                    existing loans first to earn the confidence of your lender
                    about your repayment potential."
                />
                <AccordionItem
                  checkCircle="white"
                  headingColor="#F7D64A"
                  contentColor="white"
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  heading="  Get a Co-Borrower"
                  content="    In case you do not meet one or more of the eligibility
                    parameters, what you can do to avoid rejection on your
                    personal loan application is apply with a co-borrower.
                    However, you need to ensure that the co-borrower meets the
                    eligibility standards."
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Link href="/get-registered/user-number">
                  <GetMatchedButton />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TipsToAvoidPl;
