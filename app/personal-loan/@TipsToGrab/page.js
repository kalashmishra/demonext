"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import best_deal from "@/public/assets/images/best_deal.webp";
import Image from "next/image";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import { AccordionItem } from "@/app/components/AccordianItem";
const TipsToGrab = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "40px 0px 0px" }}>
          <Grid
            container
            spacing={2}
            sx={{ padding: { xs: "16px", md: "32px" } }}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  height: "100%",
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
                      fontWeight: "900",
                      lineHeight: "1.1",
                      margin: "0 0 18px",
                    }}
                  >
                    Tips To Grab The Best Deal On Personal Loan
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { sm: "left" },
                      color: "#404040",
                      fontSize: { xs: "16px", md: "21px" },

                      lineHeight: "1.5",
                      margin: "0 0 18px",
                    }}
                  >
                    You can follow the tips mentioned below to grab the best
                    deal on personal loan and make repayment less troublesome:
                  </Typography>
                  <AccordionItem
                    checkCircle="black"
                    headingColor="#243771"
                    contentColor="#222"
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    heading="  Determine the Required Credit:"
                    content=" Taking a credit more than your requirement will lead you
                    to pay more interest. As it will increase the instalment
                    amount, you may face difficulties in repayment. This is
                    why, before applying to get an instant personal loan,
                    estimate the amount you will need to meet your credit
                    shortage. After this, you will not mistakenly borrow
                    less or more than required."
                  />
                  <AccordionItem
                    checkCircle="black"
                    headingColor="#243771"
                    contentColor="#222"
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    heading="   Check Your Credit Report:"
                    content="   Since a personal loan is an unsecured credit facility,
                    lenders put more focus on the creditworthiness of their
                    borrowers. Credit scores and reports contain all the
                    necessary information regarding your credibility as a
                    borrower. By checking the credit score and report, you
                    can ensure that all the information mentioned there is
                    correct. In case it is not, you can raise a complaint."
                  />
                  <AccordionItem
                    checkCircle="black"
                    headingColor="#243771"
                    contentColor="#222"
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    heading="  Compare Loan Offers:"
                    content="   At Credmudra, there are more than 30 lenders from which
                    you can borrow. You can see that their loan offers are
                    not the same. The interest, charges and other terms can
                    vary. This is why, you should ideally check all the
                    personal loan details properly and choose one that
                    charges comparatively lower. This will help you keep
                    your cost of borrowing as low as possible."
                  />
                  <AccordionItem
                    checkCircle="black"
                    headingColor="#243771"
                    contentColor="#222"
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    heading=" Choose a Suitable Tenure:"
                    content=" Choosing a suitable tenure is essential for smooth
                    repayment. When the tenure is longer, you will have to
                    be ready to pay more interest on your loan. When you go
                    with a shorter tenure, your interest outgo stays low but
                    the instalment becomes high. Therefore, the tenure
                    should be optimum so that the instalment amount stays
                    within your capacity."
                  />

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", sm: "flex-start" },
                      marginBottom: { xs: "20px", sm: "0" },
                      marginTop: { xs: "20px", sm: "0px" },
                    }}
                  >
                    <Link href="/get-registered/user-number">
                      <GetMatchedButton />
                    </Link>
                  </Box>
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
                marginTop: { xs: "20px", sm: "0px" },
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Image
                  src={best_deal}
                  alt="Grab The Best Deal On Personal Loan"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TipsToGrab;
