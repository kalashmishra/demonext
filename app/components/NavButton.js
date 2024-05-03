"use client"
import { BottomNavigation, Grid, Paper, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const NavButton = ({ErrorFocus, handlePrev, isSubmit }) => {
  const hideOnSm = useMediaQuery("(max-width:600px)");
 
  return (
    <>
      <Grid
        sx={{ display: hideOnSm === true ? "none" : "flex" }}
        container
        justifyContent={"space-between"}
      >
        <Grid item xs={5.5}>
          {handlePrev ? (
            <Button
              onClick={() => {          
                handlePrev();
              }}
              sx={{
                color: "#000",
                textTransform: "none",
                "&:hover": { color: "#000", bgcolor: "#f7d64a" },
                fontSize: "16px",
                border: "2px solid #f7d64a",
                p: "7px 10px",
                borderRadius: 2,
              }}
              fullWidth
            >
            
              <ArrowBackIcon fontSize="small" />
              Previous
            </Button>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={5.5}>
          <Button
            onClick={() => { ErrorFocus()}}
            type="submit"
            sx={{
              textTransform: "none",
              color: "#000",
              bgcolor: "#f7d64a",
              "&:hover": { color: "#000", bgcolor: "#f7d64a" },
              fontSize: "16px",
              border: "2px solid #f7d64a",
              p: "7px 10px",
              borderRadius: 2,
            }}
            fullWidth
          >
            {isSubmit === true ? "Submit" : "Next"}
         
            <ArrowForwardIcon fontSize="small" />
          </Button>
        </Grid>
      </Grid>
      <Paper
        sx={{
          display: hideOnSm ? "block" : "none",
          position: "fixed",
          zIndex: 99,
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "white",
          p: 1,
        }}
      >
        <BottomNavigation>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item xs={5.5}>
              {handlePrev ? (
                <Button
                  onClick={() => {                 
                    handlePrev();
                  }}
                  sx={{
                    color: "#000",
                    textTransform: "none",
                    "&:hover": { color: "#000", bgcolor: "#f7d64a" },
                    fontSize: "16px",
                    border: "2px solid #f7d64a",
                    p: "7px 10px",
                    borderRadius: 2,
                  }}
                  fullWidth
                >
                 
                   <ArrowBackIcon fontSize="small" />

                  Previous
                </Button>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={5.5}>
              <Button
                 onClick={() => { ErrorFocus()}}
                type="submit"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  bgcolor: "#f7d64a",
                  "&:hover": { color: "#000", bgcolor: "#f7d64a" },
                  fontSize: "16px",
                  border: "2px solid #f7d64a",
                  p: "7px 10px",
                  borderRadius: 2,
                }}
                fullWidth
              >
                {isSubmit === true ? "Submit" : "Next"}
               
                <ArrowForwardIcon fontSize="small" />
              </Button>
            </Grid>
          </Grid>
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default NavButton;
