"use client"
import React, { useEffect } from "react";
import { Box, Container, Grid, List, ListItem, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import Image from "next/image";
import form_new_image from "@/public/assets/images/form-new-image.png"
import UserNumber from "@/app/FormComponent/user-number/page";
import Loader from "@/app/components/Loader/page";
import { useSelector } from "react-redux";
const BusinessLanding = (props) => {
  const theme = useTheme();
  const hideOnSm = useMediaQuery("(max-width:600px)");
  const isLoading = useSelector((state) => state?.form?.isLoading);
  
  useEffect(() => {
   
    document.body.classList.add(props?.classname);
    return () => {
      document.body.classList.remove(props?.classname);
    };
  });
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "8px",
  };
  const ListStyling = {
    padding: "0px",
    fontSize: { xs: "16px", sm: "12px" },
    margin: { xs: "0px 0px 5px" },
    fontFamily: "Inter,sans-serif",
    color: "#404040",
  };

  return (
    <Box sx={{ position: "relative" }}>
       <Container maxWidth={"xl"} sx={{ padding: { md: "0 7%" } }}>
        <Grid
          Container
          sx={{
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
          }}
        >
           <Grid
            item
            md={12}
            xs={12}
            lg={6}
            sx={{
              width: "100%",
            }}
          >
            {/**-----formSection------------*/}
            <Box>
              <Container sx={{ position: "relative" }}>
                <Box
                  sx={{
                    minHeight: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "50px",
                    paddingRight:'70px'
                  }}
                >
                   
                  {isLoading === true ? <Loader /> : <UserNumber/>}
                </Box>

                <br />
              </Container>
            </Box>

            {/**other paragraph section */}
            <Box
                sx={{
                  padding: "20px 11% 50px",
                  [theme.breakpoints.down("md")]: {
                    padding: "0",
                  },
                }}
              >
                {" "}
                <Container sx={{ display: "block" }}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Features of Business loan:
                    </Typography>
                    <List>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Instant Disbursal{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Collateral-free Advances{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Hassle-free Documentation{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Convenient Repayment Facility{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          No End-use Restriction Attached{" "}
                        </Typography>
                      </ListItem>
                    </List>

                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Eligibility Criteria For A Business Loan:
                    </Typography>
                    <List>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Age: 21 to 65 years old
                        </Typography>
                      </ListItem>

                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Employment type: Self-employed
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Business tenure: At least 1 year or more
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Minimum yearly turnover: Vary across lenders
                        </Typography>
                      </ListItem>

                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Credit score: 750 or more
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Business owners, individuals, entrepreneurs, MSMEs,
                          startups and self-employed professionals, such as CS,
                          CAs, architects and doctors
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Public and private limited companies, partnership
                          firms, sole proprietorships, LLPs
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Large enterprises dealing only in trading, services
                          and manufacturing sectors
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                          Co-operative societies, NGOs and trusts
                        </Typography>
                      </ListItem>
                    </List>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      <span
                        style={{
                          color: "#243771",
                          fontWeight: 700,
                          marginBottom: "20px",
                          fontSize: "15px",
                        }}
                      >
                        Note:
                      </span>{" "}
                      The above-mentioned details can vary from lender to lender
                      depending on their terms and conditions.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Documents Required:
                    </Typography>
                    <List >
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >Passport-sized photographs  </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >
                        KYC documents, such as Aadhaar card, PAN card, driving
                        license, passport, electricity or water bills, voter ID
                        card
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >ITR Required for more than 10 Lakh Business loan*  </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >Previous 1 year's bank account statement  </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >Non-collateral overdraft copy (if applicable)  </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize:'12px',
                            color: "#404040",
                          }}
                        >Copy of business incorporation paperwork  </Typography>
                        </ListItem>
                    </List>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Disclaimer:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      Credmudra functions as a loan aggregator and provides
                      services on behalf of its partners, duly authorized for
                      the purpose. The registered address is B No.08 Nirupam,
                      PH-II Nirupam state, Ahmedpur kalan Hujur, Bhopal, Madhya
                      Pradesh 46202
                    </Typography>
                  </Box>
                </Container>
              </Box>
          </Grid>

            {hideOnSm ? (
            ""
          ) : (
            <Grid
            item
            md={12}
            xs={12}
            lg={6}
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ position: "fixed", right: "-20px", width: "50%" }}>
              <Image
                style={{
                  borderStyle: "none",
                  height: "auto",
                  maxWidth: "100%",
                  verticalAlign: "middle",
                }}
                src={form_new_image}
                alt="Get registered"
              />
            </Box>
          </Grid> 
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default BusinessLanding;
