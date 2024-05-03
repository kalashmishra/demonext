"use client"
import {
  
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import Image from "next/image";
import pl_hr_acc1 from "@/public/assets/images/pl_hr_acc1.jpg"
import Link from "next/link";
import { AccordionItem } from "@/app/components/AccordianItem";

const BenefitsPersonalLoan = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "40px 0px 50px" }}>
        <Grid container sx={{ paddingX: { xs: "16px" } }}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: "80%" }}>
                <Image
                  src={pl_hr_acc1}
                  alt="Benefits Of House Renovation loan"
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
                marginTop: "20px",
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
                    lineHeight: "normal",
                    fontSize: { xs: "24px", sm: "24px", lg: "34px" },

                    color: "#243771",
                    fontWeight: "900",
                  }}
                >
                  Benefits Of Personal Loan For House Renovation
                </Typography>
                <AccordionItem
                 checkCircle="black"
                 headingColor="#243771" 
                 contentColor="#222"
                     expanded={expanded === "panel1"}
                     onChange={handleChange("panel1")}
                    heading="  Quick loan approvals"
                    content="  When you fulfil all the eligibility criteria and submit
                    the necessary paperwork, there are chances that the lender
                    may sanction your loan application faster as compared to
                    other loans. This feature enables you to receive the loan
                    amount instantly."
                  />
                    <AccordionItem
                 checkCircle="black"
                 headingColor="#243771" 
                 contentColor="#222"
                     expanded={expanded === "panel2"}
                     onChange={handleChange("panel2")}
                    heading=" No need for any collateral"
                    content=" Unlike any other credit option, you do not have to
                    mortgage or pledge any asset to get a loan for home
                    improvement. The lender will sanction your request based
                    on your eligibility and credit score."
                  />
                    <AccordionItem
                 checkCircle="black"
                 headingColor="#243771" 
                 contentColor="#222"
                     expanded={expanded === "panel3"}
                     onChange={handleChange("panel3")}
                    heading="    Flexible repayment terms"
                    content="  One of the most beneficial aspects of a loan for home
                    improvement is that you can choose a repayment plan as per
                    your financial capacity. Borrowers can select repayment
                    tenure between three months to two years as per their
                    financial strength."
                  />
             
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Link
                
                  href="/get-registered/user-number"
                >
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

export default BenefitsPersonalLoan;
