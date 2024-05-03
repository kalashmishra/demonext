"use client";

import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import bl_acc1 from "@/public/assets/images/bl_acc1.webp";
import Image from "next/image";
import { AccordionItem } from "@/app/components/AccordianItem";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";

const ChooseCredmudraForBl = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth={"xl"} sx={{ padding: "40px 0px 0px" }}>
      <Grid container sx={{ padding: { xs: "10px", md: "32px" } }}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
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
                  color: "#243771",
                  fontSize: { xs: "24px", sm: "32px", lg: "34px" },
                  fontWeight: "800",
                  lineHeight: "1.1",
                  margin: "0 0 18px",
                }}
              >
                Choose Credmudra For The Best Business Loan
              </Typography>
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                heading=" Prompt Loan Disbursal"
                content=" With us, the TAT of borrowing a business loan is reduced
                  to meet your financial requirements without wasting time.
                  We promise to sanction and disburse the loan amount the
                  same day."
              />
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                heading=" Loan Match Making"
                content=" Just apply for the loan, submit necessary papers and
                  relax. We will do the rest. Finding the right lending
                  partner that matches your requirements is what we do. And
                  we do it best."
              />
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                heading=" Easy Application"
                content=" Our application process is user-friendly and seamless. You
                  only need to furnish your mobile phone number, required
                  details and mention your loan requirements."
              />
              <AccordionItem
                checkCircle="black"
                headingColor="#243771"
                contentColor="#222"
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                heading=" Loan Tenure at your Discretion"
                content="Choose the loan tenure per your convenience. Just ensure
                  the chosen EMI is within your repayment capacity."
              />

              <Box
                sx={{
                  width: "100%",
                  height: "100px",
                  // display: "flex",
                  // alignItems: "center",
                  // justifyContent: { xs: "center", sm: "left" },
                  marginTop: { xs: "20px", sm: "40px" },
                }}
              >
                <Link href="/business-loan/get-registered">
                  <GetMatchedButton />
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Box sx={{ width: "100%" }} paddingLeft={{ md: "50px" }}>
              <Image
                src={bl_acc1}
                alt="Choose Credmudra For The Best Business Loan"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChooseCredmudraForBl;
