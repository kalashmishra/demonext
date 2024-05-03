"use client";
import { Box, Container, Grid, Hidden, Typography } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import bl_acc2 from "@/public/assets/images/bl_acc2.webp";
import { AccordionItem } from "@/app/components/AccordianItem";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";

const FeaturesBenefitsBl = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth={"xl"} sx={{ padding: "30px 0px 0px" }}>
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
            <Hidden smDown>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={bl_acc2}
                  alt="Business Loan features and benefits"
                  style={{
                    width: "80%",
                    height: "100%",
                  }}
                />
              </Box>
            </Hidden>
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
              marginTop: { xs: "20px", sm: "0px" },
            }}
          >
            <Box
              sx={{
                width: { sm: "90%", xl: "100%" },
              }}
            >
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "24px", sm: "32px", lg: "34px" },
                  color: "#243771",
                  fontWeight: "900",
                  paddingBottom: "10px",
                  lineHeight: "normal",
                }}
              >
                Features And Benefits Of A Business Loan
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "19px" },
                  color: "#222",
                  margin: "0px 0px 24px",
                  textAlign: { xs: "left", sm: "left" },
                  lineHeight: "1.4",
                }}
              >
                If you are planning to apply for a business loan, you must know
                the following features and benefits of this credit facility:
              </Typography>
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                heading="Instant Disbursal"
                content="The requested sum of money gets credited to your account
                  real quick once the application and documents are verified
                  successfully. If you choose Credmudra, the wait time is
                  minimal. Moreover, you can get the amount credited the same
                  day."
              />
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                heading="Collateral-free Advances"
                content="As unsecured loans, financial institutions do not ask for
                any collateral while sanctioning the loan application."
              />
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                heading="Hassle-free Documentation"
                content=" Only a handful of documents are needed while sanctioning 
                business loan applications."
              />
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                heading="Convenient Repayment Facility"
                content="Use a business loan EMI calculator to determine the EMI amount 
                and choose the instalment that best suits your financial strength."
              />
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                heading="No End-use Restriction Attached"
                content="You can use the borrowed sum to fund any business expense without
                any obligation or restriction from the lender."
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
  );
};

export default FeaturesBenefitsBl;
