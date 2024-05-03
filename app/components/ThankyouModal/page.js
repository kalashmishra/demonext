"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ThankyouModal = () => {
  const theme = useTheme();
  return (
    <div>
      <Modal
        sx={{ top: "10%", padding: "10px" }}
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          bgcolor="white"
          maxWidth={800}
          alignItems={"center"}
          margin="auto"
          // padding={"40px 20px"}
          p={9}
          borderRadius={5}
          rowGap={3}
          sx={{
            outline: "none",
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
              // rowGap: 1,
              padding: "40px",
            },
          }}
        >
          <Grid xs={12} item>
            <Typography
              sx={{
                color: "#262250",
                font: "normal normal 900 45px/normal Inter",
                letterSpacing: "0px",
                textTransform: "capitalize",
                opacity: 1,
                textAlign: "center",
                [theme.breakpoints.down("md")]: {
                  fontSize: "24px",
                },
              }}
            >
              Thanks For Choosing Credmudra!
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Typography
              sx={{
                color: "#262250",
                font: "normal normal normal 22px/normal Inter",
                letterSpacing: "0px",
                textTransform: "capitalize",
                opacity: 1,
                textAlign: "center",
                [theme.breakpoints.down("md")]: {
                  fontSize: "18px",
                },
              }}
            >
              Your loan application is underway, and we're connecting with
              matched lenders for a speedy process. To expedite, register
              directly with them.
            </Typography>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default ThankyouModal;
