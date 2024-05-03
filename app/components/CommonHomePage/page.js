import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import CommonUserNumber from "@/app/FormComponent/CommonUserNumber/page";

const CommonHomePage = ({ heading, subheading1, subheading2, image }) => {
  return (
    <>
      <Grid
        container
        sx={{
          padding: {
            xs: " 50px 20px",
            sm: "50px 32px",
            md: "50px 32px",
            lg: "75px 32px",
            xl: "40px 32px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: { xs: "55px", sm: "40px", xl: "40px" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              maxWidth: "540px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontSize: { xs: "26px", sm: "34px", md: "34px", lg: "38px" },
                color: "#243771",
                lineHeight: "1.2",
                fontWeight: "900",
              }}
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem" },
                color: "#10162c",
                marginBottom: { xs: "0", md: "15px" },
                fontWeight: "100",
                opacity: "0.9",
                lineHeight: "normal",
                padding: { xs: "10px", sm: "0px" },
              }}
            >
              {subheading1}
            </Typography>
            {subheading2 && (
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  color: "#10162c",
                  marginBottom: "15px",
                  marginTop: { xs: "0", md: "10px" },
                  fontWeight: "100",
                  opacity: "0.9",
                  lineHeight: "normal",
                  padding: { xs: "10px", sm: "0px" },
                }}
              >
                {subheading2}
              </Typography>
            )}
            <Box sx={{ width: { sm: "90%", md: "100%" } }}>
              <Typography
                sx={{
                  marginBottom: "14px",
                  color: "#404040",
                  fontSize: "14px",
                }}
              >
                Enter your 10 digit mobile number to proceed
              </Typography>
              <CommonUserNumber />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} display={{ xs: "none", sm: "flex" }}>
          <Hidden smDown>
            <Box
              sx={{
                display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
                justifyContent: "flex-end",
                marginLeft: { md: "100px", xl: "0" },
              }}
            >
              <Image
                priority={true}
                src={image}
                style={{
                  width: "90%",
                  height: "auto",
                }}
                alt="get personal loan with highest disbursal rate"
              />
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
};

export default CommonHomePage;
