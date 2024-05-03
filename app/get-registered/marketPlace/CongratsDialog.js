import React, { useState } from "react";
import {
  Button,
  Modal,
  Grid,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import { ValidateOtp, sendOpt } from "../../../../constant/services/credMudra";
import OtpInput from "react-otp-input";

function MyModal({ setOpen, open, MarketplaceClickAsync, lenderData }) {
  const [showNumberBox, setShowNumberBox] = useState(true);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  const SendOTP = async () => {
    const data = {
      contactNo: sessionStorage.getItem("leadData")?JSON.parse(sessionStorage.getItem("leadData"))?.contactNo:'',
      resend: false,
      anonymousId: "",
    };
    const res = await sendOpt(data);
    setShowNumberBox(false);
  };
  const handleChange = (newValue) => {
    setErrors({ verifyOtp: "" });
    setOtp(newValue);
  };

  const handleSubmit = async () => {
    const requestData = {
      contactNo:sessionStorage.getItem("leadData")?JSON.parse(sessionStorage.getItem("leadData"))?.contactNo:'',
      otp: otp,
    };
    const res = await ValidateOtp(requestData);
    const responseData = res?.data?.data;
    if (res?.data.status.code === 200) {
      sessionStorage.setItem("accessToken", responseData.token.accessToken);
      sessionStorage.setItem("refreshToken", responseData.token.refreshToken);
      sessionStorage.setItem("leadId", responseData.leadId);
      setOpen(false);
      MarketplaceClickAsync(lenderData?.lenderId, lenderData?.redirectionLink);
    }
    if (res?.data.status.code === 400) {
      setErrors({ verifyOtp: "Invalid OTP" });
    }
  };

  const renderInput = (inputProps) => {
    return (
      <input
        {...inputProps}
        style={{
          width: "50px",
          height: "50px",
          fontSize: "22px",
          marginRight: "10px",
          textAlign: "center",
        }}
      />
    );
  };

  return (
    <>
      <Modal
        sx={{ top: "7%" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          bgcolor="white"
          maxWidth={800}
          alignItems={"center"}
          margin="auto"
          padding={"60px 40px"}
          borderRadius={5}
          rowSpacing={2}
          sx={{ outline: "none" }}
        >
          <Grid item xs={12} align="center">
            <Typography
              id="modal-modal-title"
              variant="h4"
              align="center"
              sx={{
                font: "normal normal 900 32px/35px Inter",
                letterSpacing: "0px",
                color: "#262250",
                textTransform: "capitalize",
                opacity: 1,
                
                marginBottom: "40px",
              }}
            >
              Hi {sessionStorage.getItem("leadData")?JSON.parse(sessionStorage.getItem("leadData"))?.firstName:''}{" "}
              <br></br>Congrats On Choosing Credmudra!

            </Typography>
          </Grid>
          {showNumberBox && (
            <Box id="number">
              <Grid item xs={12} align="center">
                <Typography
                  variant="h6"
                  id="modal-modal-description"
                  sx={{
                    font: "normal normal normal 16px/30px Inter",
                    padding: " 0px 60px",
                    letterSpacing: "0px",
                    color: " #262250",
                    textTransform: "capitalize",
                    opacity: 1,
                  }}
                >
                  Please Click On Send OTP Button To Receive The Same On Your
                  Registered Phone Number Ending with{" "}
                  <strong>
                    {sessionStorage.getItem("leadData")?JSON.parse(
                      sessionStorage.getItem("leadData")
                    )?.contactNo?.slice(-4):''}
                  </strong>
                </Typography>
              </Grid>
              <Grid item xs={12} align="center">
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#243771",
                    },
                    marginTop: "60px",
                    width: "35%",
                    background: "#243771",
                    color: "#F7D64A",
                    padding: "18px 0px",
                  }}
                  type="submit"
                  variant="contained"
                  color="success"
                  onClick={SendOTP}
                >
                  Send OTP
                </Button>
              </Grid>
            </Box>
          )}
          {!showNumberBox && (
            <Box id="otp">
              <Grid item xs={12} align="center">
                <Typography
                  variant="h6"
                  id="modal-modal-description"
                  sx={{
                    font: "normal normal normal 16px/30px Inter",
                    padding: " 0px 60px",
                    letterSpacing: "0px",
                    color: " #262250",
                    textTransform: "capitalize",
                    opacity: 1,
                  }}
                >
                  {" "}
                  Please fill the OTP sent on your registered mobile number
                  ending with{" "}
                  <strong>
                    {sessionStorage.getItem("leadData")?JSON.parse(
                      sessionStorage.getItem("leadData")
                    )?.contactNo?.slice(-4):''}
                  </strong>
                </Typography>
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "80%",
                    marginTop: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={6}
                    separator={<span>-</span>}
                    inputStyle="myInputStyle"
                    renderInput={renderInput}
                  />
                  {errors?.verifyOtp && (
                    <FormHelperText
                      sx={{
                        margin: 0,
                        color: "red",
                        fontSize: "14px",
                        mt: 2,
                      }}
                    >
                      {errors.verifyOtp}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
              <Grid item xs={12} align="center">
                <Button
                  sx={{
                    marginTop: "60px",
                    width: "35%",
                    background: "#243771",
                    color: "#F7D64A",
                    padding: "18px 0px",
                  }}
                  disabled={otp.length === 6 ? false : true}
                  type="submit"
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                >
                  Verify OTP
                </Button>
              </Grid>
            </Box>
          )}
        </Grid>
      </Modal>
    </>
  );
}

export default MyModal;
