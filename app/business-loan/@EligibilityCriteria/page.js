import React from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";

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
        padding: "35px 0",
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
            alignItems: { sm: "center" },
            justifyContent: { xs: "flex-start", sm: "center" },
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: { sm: "80%", md: "60%" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              sx={{
                color: "#f7d64a",
                fontSize: { xs: "25px", sm: "30px", md: "36px" },
                fontWeight: "900",

                marginBottom: "25px",
                lineHeight: "1.1",
              }}
            >
              Eligibility Criteria For A Business Loan
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "17px", sm: "20px" },
                fontWeight: "100",
                marginBottom: "20px",
                color: "#fff",
                opacity: 0.8,
              }}
            >
              Eligibility Assessment Made Easy: Find Out If You Qualify in Under
              3 minutes*
            </Typography>
            <Box>
              <Link href="/business-loan/get-registered">
                <GetMatchedButton />
              </Link>
            </Box>
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
            marginTop: "20px",
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
                fontSize: "16px",
                marginBottom: "30px",
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
                fontSize: "16px",
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
                fontSize: "16px",
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
                fontSize: "16px",
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
                    // display: "inline",
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
              sx={{ fontSize: "15px", color: "FFFFFF", marginTop: "20px" }}
            >
              <Typography sx={{ fontWeight: "600" }} component={"span"}>
                Note:
              </Typography>{" "}
              The above-mentioned details can vary from lender to lender
              depending on their terms and conditions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EligibilityCriteria;
