"use client";
import React, { useEffect, useState } from "react";
import {
  Typography,
  CssBaseline,
  Grid,
  InputBase,
  FormHelperText,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useFormik } from "formik";
import NavButton from "@/app/components/NavButton";
import { VerifyUserErrorFocus } from "@/app/components/errorFocus";
import { verifyUserSchema } from "@/app/components/validateSchema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getInitialVerifyUserValues } from "@/app/components/initialValues";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";
import { useApiCallMutation } from "@/lib/services/apiCallServices";
import Loader from "@/app/components/Loader/page";
const VerifyUser = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [timer, setTimer] = useState(60); 
  //data from redux
  const formData = useSelector((state) => state?.form?.formData);
  //change number navigation
  const handleClickButton = () => {
    const confirmed = window.confirm("Changes you made may not be saved.");
    if (confirmed) {
      router.back();
    }
  };
  //Api Initialization
  const [VerifyOtpApi, validateOptData] = useApiCallMutation();
  const [SendOtpApi, sendOptData] = useApiCallMutation();
  
  const handleSubmit = async (verifyOtp) => {
    const data = {
      contactNo: formData?.contactNo,
      otp: verifyOtp,
    };
    VerifyOtpApi({
      endPoint: apiEndPointsConfig.ValidateOtp,
      method: "POST",
      data: {
        data,
      },
    });
  };
  useEffect(() => {
    if (validateOptData?.data?.status?.code === 200) {
      const responseData = validateOptData?.data?.data;
      sessionStorage.setItem("accessToken", responseData.token.accessToken);
      sessionStorage.setItem("refreshToken", responseData.token.refreshToken);
      sessionStorage.setItem("leadId", responseData.leadId);
      router.push("/get-registered/loan");
    } else if (validateOptData?.data?.status?.code === 400) {
      setErrors({ verifyOtp: "Invalid OTP" });
    }
  }, [validateOptData]);

  const handleChange = async (val) => {
    const anonymousId = sessionStorage.getItem("anonymousId") || "";
    let currentTimer = 60;
    const timerInterval = setInterval(() => {
      currentTimer -= 1;
      setTimer(currentTimer);
      if (currentTimer <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
    if (val === true) {
      const data = {
        contactNo: formData.contactNo,
        resend: true,
        anonymousId: anonymousId || "",
      };
      SendOtpApi({
        endPoint: apiEndPointsConfig.SendOtp,
        method: "POST",
        data: {
          data,
        },
      });
    }
  };
  useEffect(() => {
    handleChange();
  }, []);
  const formik = useFormik({
    initialValues: getInitialVerifyUserValues,
    validationSchema: verifyUserSchema,
    onSubmit: (values) => {
      handleSubmit(values.verifyOtp);
    },
  });

  return (
    <>
      <CssBaseline />
      {validateOptData.isLoading && <Loader />}
      <form onSubmit={formik.handleSubmit}>
        <Grid container rowGap={4}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", md: "35px", lg: "36px", xl: "40px" },
              fontWeight: "900",
              color: "#243771",
            }}
          >
            Verify Mobile
          </Typography>

          <Grid container rowGap={2}>
            <Typography sx={{ fontSize: "15px", color: "#262250" }}>
              Enter 6 digit OTP received on your mobile
              <b> {formData.contactNo} </b>
              <Link
                style={{ textDecoration: "none", color: "#5cb46a" }}
                href={""}
                onClick={handleClickButton}
              >
                change?
              </Link>
            </Typography>
            <Grid
              container
              alignItems={"center"}
              sx={{ border: "1px solid", width: "100%", borderRadius: "7px" }}
            >
              <Grid
                item
                xs={9}
                sm={10}
                md={9.7}
                lg={9.5}
                sx={{ p: "10px", width: "80%" }}
              >
                <InputBase
                  fullWidth
                  id="verifyOtp"
                  autoFocus
                  name="verifyOtp"
                  type="tel"
                  // inputProps={{ autoComplete: "off" }}
                  value={formik.values.verifyOtp}
                  onChange={(e) => {
                    if (
                      /^\d*$/.test(e.target.value) &&
                      e.target.value.length <= 6
                    ) {
                      setErrors({ verifyOtp: "" });
                      formik.handleChange(e);
                    }
                  }}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              {timer > 0 ? (
                <Grid
                  item
                  xs={3}
                  md={2}
                  sm={2}
                  lg={2.5}
                  textAlign={"center"}
                  sx={{
                    backgroundColor: "#5ab56b00 0% 0% no-repeat padding-box",
                    fontSize: "13px",
                  }}
                >
                  {timer} seconds
                </Grid>
              ) : (
                <Grid
                  item
                  xs={3}
                  md={2.3}
                  sm={2}
                  lg={2.5}
                  textAlign={"center"}
                  sx={{
                    backgroundColor: "#5ab56b00 0% 0% no-repeat padding-box",
                    fontSize: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "none",
                      color: "#243771",
                      cursor: "pointer",
                    }}
                    onClick={() => handleChange(true)}
                  >
                    Resend?
                  </Typography>
                </Grid>
              )}
            </Grid>
            {errors?.verifyOtp && (
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "14px",
                  ml: 1,
                }}
              >
                {errors.verifyOtp}
              </FormHelperText>
            )}
            {formik.errors.verifyOtp && (
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "14px",
                  ml: 1,
                }}
              >
                {formik.errors.verifyOtp}
              </FormHelperText>
            )}
            <Grid
              item
              xs={12}
              display={"flex"}
              alignItems={"flex-start"}
              gap={"2px"}
            >
              <InfoIcon
                sx={{
                  color: "#262250",
                  padding: "4",
                  fontSize: "15px",
                  marginTop: "2px",
                }}
              />

              <Typography
                sx={{ color: "#666", fontSize: "14px", color: "#262250" }}
              >
                Credmudra agents will never ask you to transfer money or OTP for
                verification or any other services
              </Typography>
            </Grid>
          </Grid>

          <NavButton ErrorFocus={() => VerifyUserErrorFocus(formik)} />
        </Grid>
      </form>
    </>
  );
};

export default VerifyUser;
