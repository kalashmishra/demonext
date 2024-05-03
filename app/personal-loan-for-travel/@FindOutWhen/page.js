import React from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";

const FindOutWhen = () => {
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
      <Grid container sx={{ padding: { xs: "20px", md: "48px" } }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: { sm: "flex-start", xl: "center" },
            justifyContent: { xs: "flex-start", sm: "center" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "70%", xl: "55%" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              sx={{
                color: "#f7d64a",
                fontSize: { xs: "25px", sm: "36px" },
                fontWeight: "900",
                marginBottom: "25px",
                lineHeight: "1.1",
              }}
            >
              Find Out When Are You Not Eligible
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "17px", sm: "20px" },
                opacity: 0.8,

                marginBottom: "20px",
                color: "#fff",
              }}
            >
              You need to satisfy our few simple eligibility criteria in order
              to get connected with our lender and get a travel loan online.
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
            justifyContent: { xs: "flex-start" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { xl: "90%" },
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18pxpx" },

                marginBottom: "25px",
                textAlign: { xs: "left" },
                lineHeight: "1.5",
              }}
            >
              {" "}
              <FiberManualRecord sx={{ ...CircleIcon }} />
              Business owners, individuals, entrepreneurs, MSMEs, startups and
              self-employed professionals, such as CS, CAs, architects and
              doctors
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18pxpx" },

                marginBottom: "25px",
                textAlign: { xs: "left" },
                lineHeight: "1.5",
              }}
            >
              {" "}
              <FiberManualRecord sx={{ ...CircleIcon }} />
              Public and private limited companies, partnership firms, sole
              proprietorships, LLPs
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18pxpx" },

                marginBottom: "25px",
                textAlign: { xs: "left" },
                lineHeight: "1.5",
              }}
            >
              {" "}
              <FiberManualRecord sx={{ ...CircleIcon }} />
              Large enterprises dealing only in trading, services and
              manufacturing sectors
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18pxpx" },

                marginBottom: "25px",
                textAlign: { xs: "left" },
                lineHeight: "1.5",
              }}
            >
              {" "}
              <FiberManualRecord sx={{ ...CircleIcon }} />
              Co-operative societies, NGOs and trusts
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
                  }}
                >
                  Age:{" "}
                  <Typography sx={{ color: "#fff" }} component={"span"}>
                    21 to 65 years old
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
                  Employment type:{" "}
                  <Typography sx={{ color: "#fff" }} component={"span"}>
                    Self-employed
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
                  Business tenure:{" "}
                  <Typography sx={{ color: "#fff" }} component={"span"}>
                    At least 1 year or more
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
                  Minimum yearly turnover:{" "}
                  <Typography sx={{ color: "#fff" }} component={"span"}>
                    Vary across lenders
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
                  Credit score:{" "}
                  <Typography sx={{ color: "#fff" }} component={"span"}>
                    750 or more
                  </Typography>
                </Typography>
              </ListItem>
            </List>
            <Typography
              sx={{
                fontSize: "15px",
                color: "FFFFFF",
                marginBottom: { xs: "15px", sm: "0px" },
              }}
            >
              {" "}
              Note: The above-mentioned details can vary from lender to lender
              depending on their terms and conditions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FindOutWhen;
