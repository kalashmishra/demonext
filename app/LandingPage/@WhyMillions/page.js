import { Box, Typography } from "@mui/material";
import React from "react";
import SwiperComponent from "../@Swiper/page";

const WhyMillions = () => {
  return (
    <Box sx={{ marginBottom: "5%", marginTop: { xs: "15%", sm: "50px" } }}>
      <Box>
        <Box sx={{ paddingBottom: { xs: "15%", sm: "5%" } }}>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "30px", lg: "50px" },
              fontWeight: "900",
              color: "#243771",
              display: "flex",
              letterSpacing: "0",
              margin: "auto",
              opacity: 1,
              textAlign: "center",
              textTransform: "capitalize",
              width: { xs: "100%", sm: "70%" },
              lineHeight: { xs: "1.2" },
            }}
          >
            Why Millions Of Indians Trust Credmudra For Short Term Loans?
          </Typography>
        </Box>
        <SwiperComponent />
      </Box>
    </Box>
  );
};

export default WhyMillions;
