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
      <Container
        maxWidth={"xl"}
        sx={{ padding: { xs: "30px 0px 0px", lg: "30px 60px 30px" } }}
      >
        <Grid container sx={{ padding: { xs: "16px", md: "32px" } }}>
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
                  width: { sm: "80%", xl: "90%" },
                }}
                textAlign="left"
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
                  Documents Required For A Business Loan
                </Typography>
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "15px", sm: "18px" },
                    lineHeight: "1.5",
                    margin: "0 0 24px",
                    fontWeight: "500",
                  }}
                >
                  Along with fulfilling all the eligibility parameters, you will
                  have to submit some documents in order to get loan approval.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <Link href="/business-loan/get-registered">
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
                marginLeft: { md: "5%" },
                marginTop: "20px",
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
                    Passport-sized photographs
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
                    KYC documents, such as Aadhaar card, PAN card, driving
                    license, passport, electricity or water bills, voter ID card
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
                    Previous 1 year's bank account statement
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
                    Non-collateral overdraft copy (if applicable)
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
                    Copy of business incorporation paperwork
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
