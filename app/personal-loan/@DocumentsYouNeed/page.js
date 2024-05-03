import GetMatchedButton from "@/app/components/GetMatchedButton";
import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const DocumentsYouNeed = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
  };

  const TypographySubHeadings = {
    color: "#243771",
    fontSize: { xs: "16.8px", sm: "20px" },
    fontWeight: "900",
  };
  return (
    <Box>
      <Container
        maxWidth={"xl"}
        sx={{
          padding: "30px 10px 0px",
        }}
      >
        <Grid
          container
          sx={{
            padding: { xs: "16px", sm: "32px" },
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { xs: "center", sm: "flex-start" },
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: { sm: "90%" },
                }}
                textAlign={{ xs: "center", sm: "left" }}
              >
                <Typography
                  sx={{
                    color: "#243771",
                    fontSize: { xs: "24px", sm: "30px", lg: "36px" },
                    fontWeight: "900",
                    lineHeight: "1.1",
                    margin: "0 0 14px",
                  }}
                >
                  Documents You Need To Prepare For Personal Loan
                </Typography>
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    lineHeight: "1.5",
                    margin: "0 0 24px",
                    fontWeight: "500",
                  }}
                >
                  Here are the documents you will need to submit during the
                  personal loan application process:
                </Typography>
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
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", xl: "flex-start" },
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                marginTop: { xs: "20px", sm: "0px" },
              }}
            >
              <List>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: { xs: "16px", sm: "17px" },
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ ...TypographySubHeadings }}>
                      Identity Proof:
                    </span>{" "}
                    Voter ID Card, Passport, Driving License, Aadhaar Card, PAN
                    Card, etc.
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: { xs: "16px", sm: "17px" },
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ ...TypographySubHeadings }}>
                      Residential Proof:
                    </span>
                    Voter ID Card, Utility Bills (Electricity and Water Bill),
                    etc.
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: { xs: "16px", sm: "17px" },
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ ...TypographySubHeadings }}>
                      Income Proof:
                    </span>
                    Salary Slip (for salaried individuals), Audited financial
                    record (for self-employed individuals), bank account
                    statement.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DocumentsYouNeed;
