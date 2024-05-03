import React from "react";
import { Box, Typography } from "@mui/material";
// import background from "@/public/assets/images/bg-mask-four.webp";

const OurCommunity = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "500px", sm: "400px" },
        backgroundColor: "#243771",
        backgroundPosition: "100%",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          width: { xs: "90%", sm: "70%", md: "55%", lg: "53%" },
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            color: "#fff",
            lineHeight: 1.7,
            textAlign: "center",
          }}
        >
          Our community of Mudra Mentors has since grown beyond the co-founders
          of CredMudra, and we are now a diverse group of passionate individuals
          dedicated to helping others achieve their goals through financial
          freedom. We roll up our sleeves and get our hands dirty to help you
          find the perfect financial product match.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurCommunity;
