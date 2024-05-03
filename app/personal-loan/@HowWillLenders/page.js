import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HowWillLenders = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FCEFB8",
          overflow: "hidden",
          padding: "35px 5px",
          position: "relative",
        }}
      >
        <Container
          maxWidth={"xl"}
          sx={{ padding: { xs: "30px 0 30px", xl: "60px 0px 50px" } }}
        >
          <Grid container sx={{ padding: { xs: "16px", sm: "32px" } }}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={5}
              xl={6}
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: { sm: "100%", md: "90%", lg: "90%", xl: "70%" },
                  marginRight: { xl: "20%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { md: "left" },
                    fontFamily: "Inter,sans-serif",
                    fontSize: { xs: "24px", sm: "40px" },
                    marginBottom: "23px",
                    fontWeight: "900",
                    color: "#243771",
                    lineHeight: "1.1",
                  }}
                >
                  How Will Lenders Disburse The Personal Loan Amount?
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={7} xl={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  width: { sm: "80%", md: "100%", xl: "100%" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "20px" },
                    color: "#243771",
                    fontWeight: "300",
                    lineHeight: { sm: "1.1", md: "1.5" },
                  }}
                >
                  Lenders send the personal loan amount directly to the account
                  of their borrowers who can use the amount as they wish. The
                  turn-around time for the disbursal is significantly less. You
                  can get the amount in your account within a few seconds or
                  minutes of the document verification and approval of your loan
                  application.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HowWillLenders;
