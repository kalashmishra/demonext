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

const DocumentsForTwoWheeler = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
  };

  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: "40px 0px 50px" }}>
        <Grid container sx={{ padding: { xs: "0px", md: "48px" } }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: { xs:'90%',sm: "70%", md: "80%", xl: "90%" },

                  paddingLeft: { sm: "30px", md: "20px", lg: "40px", xl: "0" },
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
                  Documents Required To Apply For A Two Wheeler Loan
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
                  You will be surprised to see the extremely short list of
                  necessary documents while applying from Credmudra. Here is all
                  you need:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <Link
                   
                    href="/get-registered/user-number"
                  >
                    <GetMatchedButton />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", xl: "flex-start" },

                flexDirection: "column",
                color: "white",
                marginLeft: { xl: "5%" },
              }}
            >
              <List>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: { xs: "16px", sm: "18px" },
                       marginTop:'20px',
                      fontWeight: "700",
                    }}
                  >
                    Any valid address/ ID proof like utility bills, Aadhaar
                    card, PAN card, Passport, etc.
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
                    Duly-filled loan application of the desired lender
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
                    Passport-sized photograph
                  </Typography>
                </ListItem>
              </List>
              <Typography
                sx={{
                  color: "#404040",
                  fontSize: { xs: "16px", sm: "18px" },
                   
                  lineHeight: "1.5",
                  fontWeight: "500",
                  paddingLeft:{xs:'20px'}
                }}
              >
                Besides these documentation procedures, you may need to bear
                minimal on-boarding fees. Every small detail is relayed to you
                before loan approval to maintain 100% transparency.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DocumentsForTwoWheeler;
