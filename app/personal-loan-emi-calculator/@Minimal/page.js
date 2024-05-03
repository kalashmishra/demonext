import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";


const Minimal = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#10162c",
        overflow: "hidden",
        position: "relative",
        width: { xs: "100%", md: "100%" },
        padding: {xs:'50px 0px', sm:'50px 15px'},
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
     
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            color: " #fff!important",
            fontSize: { xs: "22px", sm: "32px" },
            fontWeight: "900",
            lineHeight: "1.4",
           
            textAlign: { xs: "center", md: "left" },
            marginBottom: { xs: "20px", md: "0" },
          }}
        >
          Apply For A Personal Loan Online With Minimal Documentation
        </Typography>

        <Link href="/get-registered/user-number">
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#243788",
                color: "#F7D64A",
              },
              padding: "14px 30px",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "10px",
              border: "1px solid #F7D64A",
              backgroundColor: "#F7D64A",
              color: "#243788",
              marginLeft: { md: "8px" },
              fontWeight: "900",
              transition: ".4s all ease-in-out",
              textTransform: "capitalize ",
              whiteSpace: "nowrap",
            }}
          >
            Apply Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Minimal;
