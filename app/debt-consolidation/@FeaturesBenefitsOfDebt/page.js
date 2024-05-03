"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import Image from "next/image";
import pldc1_acc from "@/public/assets/images/debt_consolidation/pldc1_acc.webp";
import { AccordionItem } from "@/app/components/AccordianItem";
const FeaturesBenefitsOfDebt = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "40px 0px 50px" }}>
        <Grid
          container
          spacing={2}
          sx={{ padding: { xs: "20px", md: "48px" } }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "flex-start" },
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: { sm: "100%", xl: "100%" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "24px", lg: "34px" },         
                    fontWeight: "900",
                  textAlign: { xs: "left" },
                  color: "#243771",
                  lineHeight: "1.1",
                  margin: "0 0 18px",
                }}
              >
                Features And Benefits Of Debt Consolidation Loan
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "21px" },
                  textAlign: { sm: "left" },
                  color: "#404040",
                  lineHeight: "1.5",
                  margin: "0 0 18px",
                }}
              >
                Here are the features and benefits that make debt consolidation
                loans a viable option to manage finances:
              </Typography>
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                heading="  Seamless loan approval"
                content=" If you apply for a personal loan to consolidate your ongoing
                    debts, chances are, the lender may process your loan
                    application in just a few hours. After you make an
                    application, the lending partner will review your
                    application, check your credit score and verify your
                    documents. You will receive the loan amount within the
                    shortest waiting time if your loan application passes all
                    the criteria set by the lender."
              />
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                heading="Collateral-free credit facility"
                content=" Unlike other secured credit facilities, you will not have to
                    keep your assets as collateral in order to opt for a
                    personal loan for debt consolidation purposes. You will be
                    able to get the required sum using your CIBIL score."
              />
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                heading=" Flexible repayment terms"
                content="  Choosing the repayment term is one of the biggest advantages
                    of opting for a personal loan for debt consolidation. You
                    can select loan repayment tenure between 3 months to 2 years
                    per your financial strength."
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Link href="/get-registered/user-number">
                  <GetMatchedButton />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "center", sm: "flex-start", lg: "center" },
              flexDirection: "column",
              color: "white",
              padding: { xl: "30px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Image
                src={pldc1_acc}
                alt="Benefits Of Debt Consolidation Loan"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesBenefitsOfDebt;
