"use client";
import * as React from "react";
import { Box, Container, Grid, Hidden, Typography } from "@mui/material";

import get_a_loan from "@/public/assets/images/get-a-loan.webp";
import Image from "next/image";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import { AccordionItem } from "@/app/components/AccordianItem";
const WhyIsPlBetter = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "20px 10px " }}>
          <Grid
            container
            spacing={2}
            sx={{ padding: { xs: "16px", md: "32px" } }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
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
                  Why Is Personal Loan A Better Choice?
                </Typography>
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    color: "#404040",
                    lineHeight: "1.5",
                    margin: "0 0 18px",
                    fontSize: { xs: "16px", md: "21px" },
                  }}
                >
                  Why should you opt for a personal loan over other credit
                  facilities? Here are the reasons you should know:
                </Typography>
                <AccordionItem
                  checkCircle="black"
                  headingColor="#243771"
                  contentColor="#222"
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  heading=" Restrictions-Free End-Usage:"
                  content=" The credit you get through the personal loan will come
                    with no restriction upon its usage. That means you are
                    free to spend the loan amount in whichever way you prefer.
                    Whether you use the money to bear the expenses of travel,
                    home or kitchen renovation, healthcare bills, or other, it
                    depends solely on your discretion."
                />

                <AccordionItem
                  checkCircle="black"
                  headingColor="#243771"
                  contentColor="#222"
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  heading=" No Need for Collateral:"
                  content="   Personal loan is a type of unsecured credit facility. This
                    means you do not need to keep your dear properties as
                    collateral. It is due to this nature of the personal loan
                    that you do not need to put your property at risk. It also
                    minimises the time it would take to verify your
                    property-related documents, thereby expediting the loan
                    approval."
                />
                <AccordionItem
                  checkCircle="black"
                  headingColor="#243771"
                  contentColor="#222"
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  heading=" Minimal Documentation:"
                  content="   Since no property is involved, you will not have to
                    provide documents regarding the collateral. To apply for a
                    personal loan, you will have to provide only your basic
                    documents which remain easily available at your house.
                    These include only your KYC papers, identity proof and
                    records of income."
                />
                <AccordionItem
                  checkCircle="black"
                  headingColor="#243771"
                  contentColor="#222"
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  heading="  Immediate Credit Assistance:"
                  content=" With a personal loan, you can meet your financial
                    requirement at a much lower turnaround time. Lenders
                    approve personal loan applications faster as the
                    verification process is less time-consuming. To get the
                    loan without any inconvenience, ensure that you meet the
                    eligibility criteria properly."
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
              xl={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center" },
                flexDirection: "column",
                color: "white",
                marginTop: { xs: "25px", sm: "0px" },
              }}
            >
              <Hidden smDown>
                <Box sx={{ width: "100%" }}>
                  <Image
                    src={get_a_loan}
                    alt="Why Is Personal Loan A Better Choice"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WhyIsPlBetter;
