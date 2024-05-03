import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import panAadhar from "@/public//assets/images/Paan-aadhar-Linking-768x512.webp";
import epfo from "@/public/assets/images/EPFO-Steps-to-apply-for-higher-pension-768x512.webp";
import rbi from "@/public/assets/images/RBI-Flexi-saving-bond-768x512.webp";
import govtScheme from "@/public/assets/images/Govt-Scheme-Vidhya-Laxmi-portal-768x511.webp";
import postoffice from "@/public/assets/images/Post-office-monthly-income-scheme-2-768x512.webp";
const LatestBlog = () => {
  const bigBoxesImagesStyling = {
    width: "100%",
    height: "auto", // To maintain aspect ratio
    maxHeight: { xs: "250px", sm: "300px" },
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "inset 0 -50px 36px -28px #00000059",
  };
  const bigBoxesHeadingStyling = {
    fontSize: { xs: "16px", md: "22px" },
    fontWeight: "800",
    color: "#243771",
    letterSpacing: "0",
    opacity: "1",
    textAlign: "left",
    textDecoration: "none",
  };
  const bigBoxesParaStyling = {
    fontSize: "14px",

    color: "#191919",
    letterSpacing: "0",
    opacity: "0.9",
    textAlign: "left",
    width: { xs: "57%", sm: "65%" },
    padding: { xs: "12px 0px" },
  };
  const bigBoxesSpanStyling = {
    color: " #64607d",
    fontSize: "14px",
    textAlign: "left",

    opacity: 0.8,
    marginBottom: "20px",
    textDecoration: "none",
  };
  const smallBoxesHeadingStyling = {
    fontSize: { xs: "16px", md: "18px" },
    fontWeight: "600",
    color: "#243771",
    letterSpacing: "0",
    opacity: "1",
    textAlign: "left",
    textDecoration: "none",
  };
  const smallBoxesImageStyling = {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "inset 0 -50px 36px -28px #00000059",
    maxHeight: "108px",
    minHeight: { xs: "90px", sm: "108px" },
    objectFit: "cover",
  };
  const bottomBorderStyling = {
    border: "2px solid #f7d64a",
    borderRadius: "5px",
    marginBottom: "16px",
    marginLeft: "14px",
    marginTop: "20px",
  };
  return (
    <Box sx={{ marginTop: { xs: "20%", sm: "5%" } }}>
      <Container maxWidth={"xl"} sx={{ padding: { md: "0 7%" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            margin: { xl: "70px 0 50px" },
            marginBottom: { xs: "30px", lg: "0" },
          }}
        >
          <Typography
            sx={{
              
              fontSize: { xs: "26px", lg: "40px" },       
              fontWeight: "600",
              color: "#243771",
              letterSpacing: "0",
              opacity: "1",
              textAlign: "left",
              marginBottom: "20px",
            }}
          >
            Our Latest Blog Posts
          </Typography>
          <Link
            href="https://credmudra.com/blog"
            target="_blank"
            sx={{
              "&:hover": {
                backgroundColor: "#243771",
                color: "#f7d64a",
              },
              padding: { xs: "12px 34px 12px" },
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "10px",
              backgroundColor: "#f7d64a",
              color: "#243771",
              marginTop: "10px",
              fontWeight: "600",
              transition: ".4s all ease-in-out",
              textTransform: "capitalize ",
              fontSize: { xs: "16px" },
              textDecoration: "none",
            }}
          >
            See All Blog Post
          </Link>
        </Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={7}
            sx={{ display: "flex", marginTop: { xs: "5%" } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { sm: "20px" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "50%" }, height: "100%" }}>
                <Box>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/pan-and-aadhar-card-linking/"
                  >
                    <Image
                      alt="Pancard and aadhar Linking"
                      src={panAadhar}
                      style={{
                        ...bigBoxesImagesStyling,
                      }}
                    />
                  </Link>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    June 12, 2023
                  </Typography>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/category/pancard/"
                    sx={{ ...bigBoxesSpanStyling }}
                  >
                    Pancard
                  </Link>
                </Box>
                <Box>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/pan-and-aadhar-card-linking/"
                    sx={{
                      ...bigBoxesHeadingStyling,
                    }}
                  >
                    PAN And Aadhar Card Linking
                  </Link>
                  <Typography
                    sx={{
                      ...bigBoxesParaStyling,
                    }}
                  >
                    If your PAN card becomes invalid, you will not be able to
                    get all these financial services
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" }, height: "100%" }}>
                <Box>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/epfo-higher-pension-scheme/"
                  >
                    <Image
                      alt="EPFO Higher Pension Scheme"
                      src={epfo}
                      style={{
                        ...bigBoxesImagesStyling,
                      }}
                    />
                  </Link>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    June 5, 2023
                  </Typography>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/category/saving-schemes/"
                    sx={{ ...bigBoxesSpanStyling }}
                  >
                    Saving Schemes
                  </Link>
                </Box>
                <Box>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/epfo-higher-pension-scheme/"
                    sx={{
                      ...bigBoxesHeadingStyling,
                    }}
                  >
                    EPFO Higher Pension Scheme
                  </Link>
                  <Typography
                    sx={{
                      ...bigBoxesParaStyling,
                    }}
                  >
                    Circulars on Employees' Provident Fund declared on December
                    29, 2022
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Box sx={{ width: "35%" }}>
                <Link
                  target="_blank"
                  href="https://credmudra.com/blog/post-office-monthly-income-scheme/"
                >
                  <Image
                    src={postoffice}
                    alt="Post Office Monthly Income Scheme"
                    style={{
                      ...smallBoxesImageStyling,
                    }}
                  />
                </Link>
              </Box>
              <Box sx={{ width: "65%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    May 25, 2023
                  </Typography>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/category/saving-schemes/"
                    sx={{ ...bigBoxesSpanStyling }}
                  >
                    Saving schemes
                  </Link>
                </Box>
                <Box>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/post-office-monthly-income-scheme/"
                    sx={{
                      ...smallBoxesHeadingStyling,
                    }}
                  >
                    Post Office Monthly Income Scheme
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                ...bottomBorderStyling,
              }}
            ></Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Box sx={{ width: "35%" }}>
                <Link
                  target="_blank"
                  href="https://credmudra.com/blog/vidya-lakshmi-education-loan/"
                >
                  {" "}
                  <Image
                    src={govtScheme}
                    alt="Vidya Lakshmi Loan"
                    style={{
                      ...smallBoxesImageStyling,
                    }}
                  />
                </Link>
              </Box>
              <Box sx={{ width: "65%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    May 25, 2023
                  </Typography>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/category/saving-schemes/"
                    sx={{ ...bigBoxesSpanStyling }}
                  >
                    Saving schemes
                  </Link>
                </Box>
                <Box>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/vidya-lakshmi-education-loan/"
                    sx={{
                      ...smallBoxesHeadingStyling,
                    }}
                  >
                    All You Need Know About Vidya Lakshmi Loan
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                ...bottomBorderStyling,
              }}
            ></Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Box sx={{ width: "35%" }}>
                <Link
                  target="_blank"
                  href="https://credmudra.com/blog/rbi-floating-saving-bond/"
                >
                  <Image
                    src={rbi}
                    alt="RBI Floating saving bond"
                    style={{
                      ...smallBoxesImageStyling,
                    }}
                  />
                </Link>
              </Box>
              <Box sx={{ width: "65%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    May 22, 2023
                  </Typography>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/category/saving-schemes/"
                    sx={{ ...bigBoxesSpanStyling }}
                  >
                    Saving schemes
                  </Link>
                </Box>
                <Box>
                  <Link
                    target="_blank"
                    href="https://credmudra.com/blog/rbi-floating-saving-bond/"
                    sx={{
                      ...smallBoxesHeadingStyling,
                    }}
                  >
                    RBI Floating saving bond  Full Details Along with
                    Calculation Process
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LatestBlog;
