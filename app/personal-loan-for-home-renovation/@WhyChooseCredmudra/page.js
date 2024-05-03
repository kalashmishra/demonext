
import SwiperComponent from "@/app/LandingPage/@Swiper/page";
import { Box, Container, Typography, keyframes } from "@mui/material";
import React from "react";



const WhyChooseCredmudra = () => {
 
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
     
      <Container maxWidth={"xl"}>
        <Typography
          sx={{
            lineHeight: { xs: "1.1", md: "1.5" },
            marginBottom: "25px",
         
            color: "#243771",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Why Choose Credmudra?
        </Typography>
        <Typography
          sx={{
            lineHeight: { xs: "1.1", sm: "1.5" },
            marginBottom: "25px",
            fontSize: { xs: "16px", sm: "20px" },

            color: "#243771",

            margin: { sm: "0px 0px 100px", md: "0px 40px 100px" },
          }}
        >
          There are a number of reasons why hundreds of people choose us during
          a financial crisis. Following are some of the reasons that make us one
          of the leading ‘loan match-making’ portals in the market:

        </Typography>
      </Container>
       <SwiperComponent /> 
    </Box>
  );
};

export default WhyChooseCredmudra;
