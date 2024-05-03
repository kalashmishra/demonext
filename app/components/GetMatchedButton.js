"use client";
import { Button } from "@mui/material";
import React from "react";

const GetMatchedButton = ({ backCol, Col }) => {
  return (
    <>
      <Button
        sx={{
          "&:hover": {
            backgroundColor: backCol ? backCol : "#243771",
            color: Col ? Col : "#f7d64a",
          },
          padding: { xs: "12px 34px 12px" },
          boxShadow: "0px 3px 6px #00000029",
          borderRadius: "10px",
          backgroundColor: "#f7d64a",
          color: "#243771",
          fontWeight: "600",
          transition: ".4s all ease-in-out",
          textTransform: "capitalize ",
          fontSize: { xs: "16px" },
          marginTop: { xs: "10px", md: "30px" },
        }}
      >
        Get Matched Now!
      </Button>
    </>
  );
};

export default GetMatchedButton;
