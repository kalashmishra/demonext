import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import Link from "next/link";

const DocumentsRequiredToApply = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
  };

  const TypographySubHeadings = {
    color: "#243771",
    fontSize: { xs: "16.8px", sm: "18.8px" },
    fontWeight: "900",
  };
  return (
    <Box>
      <Container
        maxWidth={"xl"}
        sx={{
          padding: "20px 0px 50px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ padding: { xs: "20px", md: "48px" } }}
        >
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Box
              sx={{
                width: { sm: "80%", xl: "70%" },
                display: "flex",
                alignItems: { xs: "center", md: "flex-start" },
                justifyContent: { xs: "center" },
                flexDirection: "column",
              }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "30px", lg: "36px" },
                  fontWeight: "900",
                  color: "#243771",
                  lineHeight: "1.1",
                  margin: "0 0 14px",
                }}
              >
                Documents Required To Apply For A Debt Consolidation Loan
              </Typography>
              <Typography
                sx={{
                  color: "#404040",
                  fontSize: { xs: "16px", sm: "18px" },
                  lineHeight: "1.5",
                  margin: "0 0 24px",
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
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", xl: "flex-start" },
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <List>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: { xs: "16px", sm: "18px" },
                      fontWeight: "500",
                    }}
                  >
                    <span display="inline" style={{ ...TypographySubHeadings }}>
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
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    <span display="inline" style={{ ...TypographySubHeadings }}>
                      {" "}
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
                      fontSize: "16px",

                      fontWeight: "500",
                    }}
                  >
                    <span display="inline" style={{ ...TypographySubHeadings }}>
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

export default DocumentsRequiredToApply;
