import { Box, Grid, Hidden, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import Image from "next/image";
import cred_angle_full from "@/public/assets/images/cred_angle_full.webp";
const EligibilityCriteria = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
  };

  return (
      <Box
        sx={{
          background: "#243771",
          overflow: "hidden",
          padding: "45px 5px",
          position: "relative",
        }}
      >
        <Hidden smDown>
          <Image
            src={cred_angle_full}
            alt="Credmudra logo"
            style={{
              left: "10%",
              maxWidth: "530px",
              opacity: 0.6,
              position: "absolute",
              top: "50%",
              transform: "translate(0%,-50%)",
            }}
          />
        </Hidden>
        <Grid container sx={{ padding: { xs: "20px", md: "48px" } }}>
          <Grid
            item
            xs={6}
            sm={4}
            md={6}
            sx={{ display: { xs: "none", sm: "flex" } }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                color: "#ffffff",
                paddingRight: { xl: "10px" },
                width: { sm: "95%", xl: "75%" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "22px", md: "36px" },
                  fontWeight: "900",
                  color: "#f7d64a",
                  marginBottom: "25px",
                  textAlign: { xs: "center", sm: "left" },
                  lineHeight: "1.1",
                }}
              >
                Eligibility Criteria For Debt Consolidation Loan
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "17px", md: "20px" },
                  textAlign: { xs: "center", sm: "left" },
                  opacity: 0.8,
                }}
              >
                Although the eligibility criteria for a debt consolidation loan
                can vary from lender to lender, here are some basic parameters
                that an applicant must meet to get the required funds:
              </Typography>

              <List>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    padding: 0,
                    marginBottom: "15px",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
                      // display: "inline",
                    }}
                  >
                    Nationality:{" "}
                    <span style={{ color: "#fff", fontWeight: "500" }}>
                      Indian
                    </span>
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "18px", sm: "18px" },
                    fontWeight: "400",
                    padding: 0,
                    marginBottom: "15px",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                      fontSize: { xs: "18px", sm: "18px" },
                      // display: "inline",
                    }}
                  >
                    Employment:{" "}
                    <span style={{ color: "#fff", fontWeight: "500" }}>
                      Both salaried and self-employed individuals
                    </span>
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "18px", sm: "18px" },
                    fontWeight: "400",
                    padding: 0,
                    marginBottom: "15px",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                      fontSize: { xs: "18px", sm: "18px" },
                    }}
                  >
                    CIBIL Score:{" "}
                    <span style={{ color: "#fff", fontWeight: "500" }}>
                      Minimum 685
                    </span>
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "18px", sm: "18px" },
                    fontWeight: "400",
                    padding: 0,
                    marginBottom: "15px",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                      fontSize: { xs: "18px", sm: "18px" },
                    }}
                  >
                    Monthly Income:{" "}
                    <span style={{ color: "#fff", fontWeight: "500" }}>
                      More than Rs.25,000 per month
                    </span>
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
};

export default EligibilityCriteria;
