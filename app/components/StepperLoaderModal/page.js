"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Modal, Grid, Typography, Box } from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 18,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#262250",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#262250",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 8,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#ccc",
    borderRadius: 1,
  },
}));
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 44,
  height: 44,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    border: "3px solid #58b56a",
    backgroundColor: "#262250",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#262250",
    border: "none",
  }),
}));
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  const icons = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
  };
  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  "Verifying Your Profile",
  "Finding A Suitable Lender",
  "Processing Your Requests",
  "Final Match",
  "Complete",
];

const ModalLoader = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!allStepsCompleted()) {
        handleNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [activeStep, completed]);

  return (
    <Modal
      sx={{ top: "10%", padding: "10px" }}
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid
        container
        bgcolor="white"
        maxWidth={500}
        alignItems={"center"}
        margin="auto"
        padding={"40px 20px"}
        borderRadius={5}
        rowGap={3}
        sx={{
          outline: "none",
          textAlign: "center",
          [theme.breakpoints.down("md")]: {
            rowGap: 2,
          },
        }}
      >
        <Grid xs={12} item>
          <Typography
            sx={{
              color: "#262250",
              font: " normal normal 900 32px/35px Inter",
              letterSpacing: "0px",
              textTransform: "capitalize",
              opacity: 1,
            }}
          >
            Processing Loan <br /> Request
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography
            sx={{
              color: " #262250",
              font: "normal normal normal 14px/12px Inter",
              letterSpacing: "0px",
              textTransform: "capitalize",
              opacity: 1,
            }}
          >
            This Will Take A Few Moments
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography
            sx={{
              color: "#262250",
              font: "normal normal normal 16px/27px Inter",
              letterSpacing: "0px",
              textTransform: "capitalize",
              opacity: 1,
              margin: "auto",
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
            }}
          >
            Please wait while the loan request is being processed. The loan
            request process can take few minutes, please do not click back or
            refresh the page.
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "100%",
            mt: "30px",
            [theme.breakpoints.down("md")]: {
              mt: "10px",
            },
          }}
          spacing={4}
        >
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <Box
                    sx={{
                      fontSize: "12px",
                      textAlign: "center",
                      fontWeight: "600",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "8.5px",
                      },
                    }}
                  >
                    {label}
                  </Box>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid
          xs={12}
          item
          mt={5}
          sx={{
            [theme.breakpoints.down("md")]: {
              mt: 2,
            },
          }}
        >
          <Typography
            sx={{
              color: " #262250",
              font: "normal normal normal 14px/12px Inter",
              letterSpacing: "0px",
              textTransform: "capitalize",
              opacity: 1,
            }}
          >
            You Are Getting Redirect Shortly
          </Typography>
        </Grid>
      </Grid>
    </Modal>
  );
}

export default ModalLoader