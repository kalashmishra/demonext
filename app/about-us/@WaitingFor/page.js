import { Box, Typography } from "@mui/material";
import React from "react";

const WaitingFor = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FA" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "13%", md: "6%" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "75%" },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#10162c",
              fontFamily: "Inter,sans-serif",
              fontSize: { xs: "30px", md: "40px" },
              fontWeight: "900",
            }}
          >
            So What Are You Waiting For? Let's Make That Move Together And Make
            Your Dreams Come True!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WaitingFor;
