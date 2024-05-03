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

const DocumentRequired = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
  };

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "20px 0px 0px" }}>
        <Grid container sx={{ padding: { xs: "20px", md: "48px" } }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
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
                  width: { sm: "90%", xl: "90%" },
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
                  Documents Required For A Personal Loan For Home Renovation
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
                  Here are the documents you will need to submit while applying
                  for a personal loan for home renovation:
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
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                width: { xl: "90%" },
                marginTop: { xs: "30px" },
              }}
            >
              <List>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },

                    padding: 0,
                  }}
                
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontWeight: "900",
                      fontSize: { xs: "16px", sm: "18px" },
                    }}
                  >
                    Identity proof-{" "}
                    <Typography component={"span"}>
                      Voter ID Card, Passport, Driving License, Aadhaar Card,
                      PAN Card, etc.
                    </Typography>
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",

                    padding: 0,
                  }}
               
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontWeight: "900",
                      fontSize: { xs: "16px", sm: "18px" },
                    }}
                  >
                    Residential proof-{" "}
                    <Typography component={"span"}>
                      Voter ID Card, Utility bills(Electricity and Water Bill),
                      etc.
                    </Typography>
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",

                    padding: 0,
                  }}
                 
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontWeight: "900",
                      fontSize: { xs: "16px", sm: "18px" },
                    }}
                  >
                    Income proof-{" "}
                    <Typography component={"span"}>
                      Audited financial records(for self-employed individuals),
                      Salary slip(for salaried individuals), Bank account
                      statement
                    </Typography>
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
