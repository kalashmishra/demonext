import React from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";

const EligibilityCriteria = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
  };
  return (
    <Box
      sx={{
        background: "#243771",
        overflow: "hidden",
        padding: "45px 0",
        position: "relative",
      }}
    >
      <Grid container sx={{ padding: { xs: "10px 20px", md: "48px" } }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: { sm: "center" },
            justifyContent: { xs: "flex-start", sm: "center" },
            flexDirection: "column",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "55%" },
            }}
          >
            <Typography
              sx={{
                color: "#f7d64a",
                fontSize: { xs: "22px", sm: "36px" },
                fontWeight: "900",
                marginBottom: "25px",
                lineHeight: "1.1",
              }}
            >
              Eligibility Criteria For A Personal Loan For Home Renovation
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "17px", sm: "20px" },
                opacity: "0.8",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              In order to get a personal loan, borrowers will have to fulfil a
              set of eligibility requirements. Although, these parameters vary
              from one lender to another, here is a basic list of eligibility
              criteria set by most lending partners in India:
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start" },
            justifyContent: { xs: "flex-start", sm: "center", md: "center" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { xl: "90%" },
              color: "#fff",
            }}
          >
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
                    color: "#f7d64a",
                    fontWeight: "700",
                    fontSize: { xs: "18px", sm: "18px" },
                   
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
                    color: "#f7d64a",
                    fontWeight: "700",
                    fontSize: { xs: "18px", sm: "18px" },
                  }}
                >
                  Credit Score:{" "}
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
                    color: "#f7d64a",
                    fontWeight: "700",
                    fontSize: { xs: "18px", sm: "18px" },
                  }}
                >
                  Monthly Income:{" "}
                  <Typography sx={{ color: "#fff" }} component={"span"}>
                    More than Rs.25,000 per month
                  </Typography>
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
