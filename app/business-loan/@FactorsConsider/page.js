"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import bl_acc3 from "@/public/assets/images/bl_acc3.webp";
import { AccordionItem } from "@/app/components/AccordianItem";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";

const FactorsConsider = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "40px 0px 0px" }}>
          <Grid container sx={{ padding: { xs: "10px", md: "32px" } }}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={bl_acc3}
                    alt="best business loan for your firm"
                    style={{
                      width: "80%",
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
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "white",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    width: { sm: "90%", xl: "100%" },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: { xs: "24px", sm: "24px", lg: "34px" },
                      color: "#243771",
                      fontWeight: "900",
                      paddingBottom: "10px",
                      lineHeight: "normal",
                    }}
                  >
                    Factors To Consider Before Taking A Business Loan
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", sm: "18px", md: "20px" },
                      color: "#222",
                      margin: "0px 0px 24px",
                      textAlign: "left",
                      lineHeight: "1.5",
                    }}
                  >
                    You must take into account several essential factors while
                    you decide on the best business loan for your firm.
                  </Typography>
                  <AccordionItem
                    checkCircle="black"
                    headingColor="#243771"
                    contentColor="#222"
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    heading="Purpose of the Loan"
                    content={
                      <>
                        In order to make the best use of borrowed money, you
                        must know your financial needs before applying for
                        credit.
                        <br />
                        <br />
                        For example, you must determine what equipment you need
                        to buy if you are opting for a loan to upgrade your
                        business. This will help you determine the exact amount
                        you need and what type of business loan you should opt
                        for.
                      </>
                    }
                  />
                  <AccordionItem
                    checkCircle="black"
                    headingColor="#243771"
                    contentColor="#222"
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    heading="Interest Rates and Other Costs"
                    content={
                      <>
                        To get the best deal, you must compare the interest
                        rates offered by different lenders. Based on the
                        comparison, choose a lender that offers the lowest
                        interest rate.
                        <br />
                        <br />
                        Further, you should keep an eye out for additional
                        costs, such as processing charges, foreclosure fees,
                        etc. These costs add up to the total loan amount.
                      </>
                    }
                  />
                  <AccordionItem
                    checkCircle="black"
                    headingColor="#243771"
                    contentColor="#222"
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    heading="Repayment Schedule"
                    content="Make sure you know all the repayment terms of the credit
                    you are applying for. Factors, such as business loan
                    length, repayment schedule and charges associated with
                    early and late payments should be known by every
                    borrower."
                  />
                  <AccordionItem
                    checkCircle="black"
                    headingColor="#243771"
                    contentColor="#222"
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    heading="Company Cash Flow"
                    content="Assess your business's cash flow in order to determine
                    your repayment capability. This will help you make a
                    repayment plan and save from a financial burden."
                  />
                  <AccordionItem
                    checkCircle="black"
                    headingColor="#243771"
                    contentColor="#222"
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    heading="Lender's Reputation"
                    content={
                      <>
                        Do thorough research about the financial institution or
                        NBFC you are choosing. Learn about the lender's
                        reputation in the market, customer service, etc. You can
                        look for ratings and reviews from previous borrowers in
                        order to learn more about a financial institution.
                        <br />
                        <br />
                        Credmudra has partnered with some of the leading
                        business loan providers in India. With our user-friendly
                        interface and paperless loan application process, take a
                        step closer to reaching your business goals.
                        Nevertheless, if you face any issues while applying for
                        a loan from our portal, contact our Mudra Mentors to
                        receive comprehensive assistance.
                      </>
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "left" },
                    padding: "16px 0 16px",
                  }}
                >
                  <Link href="/business-loan/get-registered">
                    <GetMatchedButton />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FactorsConsider;
