"use client"
import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";

import Image from "next/image";
import discover_smarter from "@/public/assets/images/discover-smarter.webp";
import { AccordionItem } from "@/app/components/AccordianItem";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import Link from "next/link";

const ChoosePersonalLoan = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Box bgcolor="#243771">
        <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
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
              xl={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center" },
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Image
                  src={discover_smarter}
                  alt="Why Choose Personal Loan from Credmudra"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
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
                  width: { sm: "100%", xl: "100%" },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      textAlign: { sm: "left" },
                      fontSize: { xs: "24px", sm: "32px", lg: "34px" },
                      color: "#f7d64a",
                      fontWeight: "900",
                    }}
                  >
                    Why Choose Personal Loan @ Credmudra?
                  </Typography>

                  <AccordionItem
                   checkCircle="white"
                   headingColor="#F7D64A" 
                   contentColor="white"
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    heading="Best Loan Matchmaker:"
                    content="As a loan matchmaker, we analyze your profile and match you with the most suitable lender based on their criteria. Within a few seconds we show you the lender with the highest chances of approving your credit request. Say goodbye to lengthy processes and get your loan approval in less than 3 minutes!*"
                  />
                  <AccordionItem
                   checkCircle="white"
                   headingColor="#F7D64A" 
                   contentColor="white"
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    heading=" Quick Loan Disbursement:"
                    content="  Experience the convenience of getting an instant
                    personal loan through our easy application process. We
                    prioritize quick verification, allowing us to fulfill
                    our promise of 'same day disbursal'. With a remarkable
                    disbursal rate of 98%, our lending process is designed
                    to be effortless, seamless, and customer-friendly. Say
                    goodbye to lengthy waiting periods and embrace the speed
                    and efficiency of Credmudra."
                  />
                  <AccordionItem
                   checkCircle="white"
                    headingColor="#F7D64A" 
                    contentColor="white"
                     expanded={expanded === "panel3"}
                     onChange={handleChange("panel3")}
                    heading="Affordable Interest Rate:"
                    content="  You can get the market-best interest rate on personal
                    loans from us. The attractive interest on the credit
                    will make it much easier for you to repay. It will keep
                    the total outflowing interest low and the instalment
                    amount within your budget."
                  />
                  <AccordionItem
                   checkCircle="white"
                    headingColor="#F7D64A" 
                    contentColor="white"
                     expanded={expanded === "panel4"}
                     onChange={handleChange("panel4")}
                    heading="  Purpose-Based Loan:"
                    content=" For the immediate requirement of small-ticket finance,
                    you can go with short-term personal loan. If you need a
                    significant amount of money, you can apply for a regular
                    personal loan. Our existing customers can also take a
                    pre-approved personal loan that comes with the facility
                    of instant approval."
                  />
                  <AccordionItem
                   checkCircle="white"
                    headingColor="#F7D64A" 
                    contentColor="white"
                     expanded={expanded === "panel5"}
                     onChange={handleChange("panel5")}
                    heading=" Easy Online Application:"
                    content=" Visiting the offline branches of lending institutions is
                    hectic. Plus, you will have to book a schedule during
                    office hours only. Eliminate all these inconveniences by
                    applying for a personal loan with us online. So, take
                    the first step and click on the “Apply Now” button."
                  />
                  <AccordionItem
                   checkCircle="white"
                    headingColor="#F7D64A" 
                    contentColor="white"
                     expanded={expanded === "panel6"}
                     onChange={handleChange("panel6")}
                    heading=" Flexible Repayment Period:"
                    content=" Choose a period of repayment according to your
                    preference from the available range of up to 5 years.
                    The extensive tenure will help you ensure that the
                    instalment amount is within your repayment capacity. You
                    can use a personal loan EMI calculator to find the right
                    tenure."
                  />
                  <AccordionItem
                  checkCircle="white"
                    headingColor="#F7D64A" 
                    contentColor="white"
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                    heading="  Lenient Eligibility Criteria:"
                    content="  At Credmudra, we believe in making personal loan
                    eligibility hassle-free for you. Our easy eligibility
                    criteria ensure a seamless qualification process. All
                    you need to do is fill up and submit our online
                    application form. We'll take care of the rest, matching
                    you with the lender that best suits your profile and
                    requirements. Say goodbye to complicated eligibility
                    processes and get closer to your personal loan today."
                  />
                  
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "flex-start" },
                    padding: "16px 0 16px",
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
    </>
  );
};

export default ChoosePersonalLoan;
