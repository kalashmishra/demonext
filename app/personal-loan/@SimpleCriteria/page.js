import React from "react";
import { Box, Grid, Hidden, List, ListItem, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import cred_angle_full from "@/public/assets/images/cred_angle_full.webp";
import Image from "next/image";
const SimpleCriteria = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
  };

  return (
    <>
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
              opacity: ".6",
              position: "absolute",
              top: "50%",
              transform: "translate(0%,-50%)",
            }}
          />
        </Hidden>
        <Grid container sx={{ padding: { xs: "0px 16px", md: "32px" } }}>
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
                width: { xl: "80%" },
                paddingRight: { xl: "10px" },
              }}
            >
              <Typography
                sx={{
                  color: "#f7d64a",
                  fontSize: { xs: "24px", md: "36px" },
                  fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: { xs: "center", sm: "left" },
                  lineHeight: "1.1",
                }}
              >
                Simple Criteria To Secure Your Personal Loan
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "17px", md: "20px" },
                  fontWeight: "100",
                  opacity: 0.8,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                You can get the personal loan easily by meeting the simple
                eligibility criteria as mentioned below:
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
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
                      color: "#f7d64a",
                    }}
                  >
                    Nationality:{" "}
                    <Typography sx={{ color: "#fff" }} component={"span"}>
                      Indian
                    </Typography>
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
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
                      color: "#f7d64a",
                    }}
                  >
                    Employment:{" "}
                    <Typography sx={{ color: "#fff" }} component={"span"}>
                      Both salaried and self-employed individuals
                    </Typography>
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
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
                      color: "#f7d64a",
                    }}
                  >
                    CIBIL Score:{" "}
                    <Typography sx={{ color: "#fff" }} component={"span"}>
                      Minimum 685
                    </Typography>
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
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
                      color: "#f7d64a",
                    }}
                  >
                    Monthly Income:{" "}
                    <Typography sx={{ color: "#fff" }} component={"span"}>
                      More than Rs.25,000 per month
                    </Typography>
                  </Typography>
                </ListItem>
              </List>
              <Typography sx={{ fontSize: "15px", color: "#fff" }}>
                {" "}
                Note: These eligibility parameters are indicative and subject to
                change
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SimpleCriteria;
