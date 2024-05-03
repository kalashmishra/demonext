import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import plme_s_img from "@/public/assets/images/medical/plme_s_img.webp";

const WhyDoesTaking = () => {
  const ParaStyling = {
    textAlign: { sm: "left" },
    fontSize: { xs: "16px", sm: "18px" },

    color: "#404040",

    lineHeight: { xs: "1.3", md: "1.1", lg: "1.5" },
    margin: "0px 0px 24px",
  };
  return (
    <>
      <Box bgcolor="#fcefb8">
        <Container
          sx={{
            display: {
              xs: "block",
              padding: "40px 0px 0px",
            },
          }}
          maxWidth={"xl"}
        >
          <Grid container sx={{ padding: { xs: "0px", md: "48px" } }}>
            <Grid
              item
              xs={12}
              sm={6}
              md={7}
              sx={{
                padding: "0px 10px 0px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: { xl: "90%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    fontSize: { xs: "24px", sm: "30px" },

                    color: "#243771",
                    fontWeight: "900",
                    lineHeight: { xs: "1.3", md: "1.1", lg: "1.5" },
                    margin: "0px 0px 24px",
                  }}
                >
                  Why Does Taking A Personal Loan For A Medical Emergency Make
                  Sense?
                </Typography>
                <Typography sx={{ ...ParaStyling }}>
                  1) Medical loans can be a low-cost alternative to using credit
                  cards to pay for your medical expenses.
                </Typography>
                <Typography sx={{ ...ParaStyling }}>
                  2) A medical loan can be a life-saving grace when you do not
                  have medical insurance or when your insurance policy does not
                  cover all the expenses.
                </Typography>
                <Typography sx={{ ...ParaStyling }}>
                  3) A medical personal loan can help you budget and control
                  medical costs while providing flexible monthly repayment
                  options over a loan term.
                </Typography>
                <Typography sx={{ ...ParaStyling }}>
                  4) Medical loans can be used to pay for doctor’s fees,
                  hospital stays, medical bills, and surgical procedures
                  immediately.
                </Typography>
                <Typography sx={{ ...ParaStyling }}>
                  Given the rising costs of healthcare, not everyone can afford
                  a comprehensive health insurance plan that provides coverage
                  against all potential medical uncertainties. With CredMudra’s
                  medical loan, you can be assured of timely medical attention
                  without worrying about the ensuing financial burden.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              sx={{
                padding: "0px 10px 0px",
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <Box
                sx={{
                  width: { xl: "90%" },
                }}
              >
                <Image
                  src={plme_s_img}
                  alt="why to get a personal loan for medical emergencies"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WhyDoesTaking;
