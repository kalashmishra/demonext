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
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";

const DocumentRequired = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
  };

  return (
    <Box>
      <Container maxWidth={"xl"}>
        <Grid
          container
          sx={{ padding: { xs: "20px 0px", sm: "40px 15px", md: "48px" } }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={5}
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "flex-start" },
              justifyContent: { xs: "center", sm: "flex-start" },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: { sm: "70%", xl: "70%" },
                marginTop: { xs: "25px", sm: "0px" },
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
                Documents Required To Apply For A Travel Loan
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
                The documentation process is really simple and minimal. Lenders
                just need the following documents to run a quick check before
                proceeding to disburse your travel loan:
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
          <Grid item xs={12} sm={6} md={6} lg={6} xl={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", xl: "flex-start" },
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                marginLeft: { md: "5%" },
                marginTop: { xs: "20px", sm: "0px" },
              }}
            >
              <List>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: { xs: "16px", sm: "18px" },

                      fontWeight: "700",
                    }}
                  >
                    PAN card details
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: "16px",

                      fontWeight: "700",
                    }}
                  >
                    Valid ID proof (Driving License, Voter ID, Aadhaar ID,
                    Passport)
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: "16px",

                      fontWeight: "700",
                    }}
                  >
                    Valid address proof (Driving License, Passport, Aadhaar
                    Card)
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: "16px",

                      fontWeight: "700",
                    }}
                  >
                    Bank statement for the last 3 months
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: "16px",

                      fontWeight: "700",
                    }}
                  >
                    Income proof (Payslip or IT Returns)
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: "16px",

                      fontWeight: "700",
                    }}
                  >
                    Photographs
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

export default DocumentRequired;
