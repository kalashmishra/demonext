"use client";
import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  styled,
} from "@mui/material";
// import { Subscribe } from "../../../constant/services/credMudra";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    border: "none",
    backgroundColor: "#6c757d",
    borderRadius: "5px",
    color: "#ffffff",
    marginBottom: "12px",
    padding: { xs: "0", sm: "8px", md: "16px 0" },
    textAlign: "center",
    textTransform: "capitalize",
    width: "100%",
  },
  "& .MuiInputBase-input": {
    textAlign: "center",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
});

const AvoidPitfalls = () => {
  // const [displayThanks, setDisplayThanks] = useState(false);
  // const [LoadingButton, setLoadingButton] = useState(false);

  //   const handleSubmit = async (e) => {
  //     setLoadingButton(true);
  //     e.preventDefault();
  //     const data = {
  //       email: e.target.email.value,
  //     };
  //     const res = await Subscribe(data);
  //     setInterval(() => {
  //       setLoadingButton(false);
  //       if (res?.data?.status.code === 200) {
  //         setDisplayThanks(true);
  //       }
  //     }, 1500);
  //   };

  return (
    <Box
      sx={{
        background: `#243771 
      
         50%`,
        padding: "60px 0",
        marginTop: "5%",
        position: "relative",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "20%",
        display: "flex",
        minHeight: "400px",
        objectFit: "cover",
        opacity: 1,
      }}
    >
      <Container maxWidth={"xl"} sx={{ padding: { md: "0 7%" } }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "26px", md: "40px" }, 
                color: "#f7d64a",
                fontWeight: "900",
                lineHeight: "1.1",
                margin: "0 0 15px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Avoid The Pitfalls Of <br />
              Short-Term Loans.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#ffffff",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Sign Up Now To Learn The Best Practices And Borrow Smartly!
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", md: "flex-end" },
                justifyContent: {
                  xs: "center",
                  sm: "flex-start",
                  md: "flex-end",
                },
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: "70%" }}>
                <form
                  // onSubmit={handleSubmit}
                  className="form-for-getstarted page_subscriber_form"
                  id="page_subscriber_form"
                  // style={{
                  //   display: displayThanks === false ? "" : "none",
                  // }}
                >
                  <Box>
                    <CustomTextField
                      id="exampleInputEmail1"
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required
                      fullWidth
                    />
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        "&:hover": {
                          backgroundColor: "#C8A618",
                          color: "#243771",
                        },
                        background: "#f7d64a 0 0 no-repeat padding-box",
                        border: "none",
                        borderRadius: "5px",
                        color: "#243771",
                        fontSize: "20px",
                        fontWeight: 700,
                        opacity: 1,
                        padding: { xs: "10px", md: "12px" },
                        textTransform: "capitalize",
                        transition: "all .4s ease",
                        width: "100%",
                      }}
                    >
                      Get Started
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AvoidPitfalls;
