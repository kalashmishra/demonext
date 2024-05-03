"use client";
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getInitialUserNumberValues } from "@/app/components/initialValues";
import { userNumberSchema } from "@/app/components/validateSchema";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";
import { setFormData } from "@/lib/reducers/reducer";
import { UserNumberErrorFocus } from "@/app/components/errorFocus";
import { useRouter } from "next/navigation";
import { useApiCallMutation } from "@/lib/services/apiCallServices";
import Loader from "@/app/components/Loader/page";

const CommonUserNumber = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  //data from redux
  const formData = useSelector((state) => state?.form?.formData);

  const [SendOtpApi, sendOptData] = useApiCallMutation();

  const handleSubmit = async () => {
    const anonymousId = sessionStorage.getItem("anonymousId") || "";
    const data = {
      contactNo: formData?.contactNo,
      resend: false,
      anonymousId: "",
    };
    SendOtpApi({
      endPoint: apiEndPointsConfig.SendOtp,
      method: "POST",
      data: {
        data,
      },
    });

    router.push("/get-registered/verify-user");
  };

  const formik = useFormik({
    initialValues: getInitialUserNumberValues(formData),
    validationSchema: userNumberSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      {sendOptData.isLoading && <Loader />}
      <form name="mobile_form" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            maxWidth: { md: "450px" },
          }}
        >
          <Box>
            <TextField
              placeholder="XXXXXXXXXX"
              onChange={(e) => {
                if (
                  /^\d*$/.test(e.target.value) &&
                  e.target.value.length <= 10
                ) {
                  dispatch(
                    setFormData({
                      contactNo: e.target.value,
                    })
                  );
                  formik.handleChange(e);
                }
              }}
              name="contactNo"
              id="contactNo"
              value={formData?.contactNo}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{
                      fontWeight: 900,
                      paddingRight: "15px",
                      opacity: 2,
                    }}
                  >
                    <span></span>🇮🇳 +91
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "#fff",
                // border: "1px solid #F7D64A",
                width: { xs: "100%", md: "285px" },
                borderRadius: "8px",
                "& input": {
                  fontSize: "16px",
                  border: "none",
                },
                "& fieldset": {
                  borderColor: "#F7D64A",
                },
              }}
            />
            {formik.touched.contactNo && formik.errors.contactNo && (
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "14px",
                  ml: 1,
                }}
              >
                {formik.errors.contactNo}
              </FormHelperText>
            )}
          </Box>
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#243788",
                color: "#F7D64A",
              },
              padding: "14px 18px",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "10px",
              border: "1px solid #F7D64A",
              backgroundColor: "#F7D64A",
              color: "#243788",
              marginLeft: { md: "8px" },
              fontWeight: "900",
              fontSize:{xs:'16px'},
              transition: ".4s all ease-in-out",
              textTransform: "capitalize ",
              marginTop: { xs: "16px", md: "0px" },
              height: "56px",
            }}
            type="submit"
            onClick={() => UserNumberErrorFocus(formik)}
          >
            Apply Now
          </Button>
        </Box>
        {/* <Box display="flex" alignItems="flex-start" sx={{ width: "90%" }}>
          <Checkbox
            {...label}
            defaultChecked
            sx={{ marginTop: "12px" }}
            id="termsAndCondition"
            name="termsAndCondition"
            onChange={(e) => {
              dispatch(
                setFormData({
                  termsAndCondition: e.target.checked,
                })
              );
              formik.setFieldValue("termsAndCondition", e.target.checked);
            }}
            onBlur={formik.handleBlur}
            checked={formData.termsAndCondition}
          />
          <Typography
            marginTop="20px"
            textAlign="justify"
            sx={{
              color: "#999",
              fontSize: "13px",
              lineHeight: "1.5",
              fontFamily: "Inter,sans-serif",
            }}
          >
            By continuing, I agree to Credmudra's Privacy Policy and Terms &
            Conditions and receive communication from Credmudra via SMS, E-mail,
            and WhatsApp.
          </Typography>
        </Box>
        {formik.touched.termsAndCondition && formik.errors.termsAndCondition && (
          <FormHelperText
            sx={{
              margin: 0,
              color: "red",
              fontSize: "14px",
              ml: 1,
            }}
          >
            {formik.errors.termsAndCondition}
          </FormHelperText>
        )} */}
        <Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              marginTop: "20px",
            }}
          >
            <Checkbox
              id="termsAndCondition"
              name="termsAndCondition"
              onChange={(e) => {
                dispatch(
                  setFormData({
                    termsAndCondition: e.target.checked,
                  })
                );
                formik.setFieldValue("termsAndCondition", e.target.checked);
              }}
              onBlur={formik.handleBlur}
              checked={formData.termsAndCondition}
            />
            <Typography sx={{ color: "#666", fontSize: "14px" }}>
              By continuing, I agree to Credmudra's
              <Link
                style={{ textDecoration: "none", color: "#243788" }}
                href={"/privacy-policy"}
              >
                {" "}
                Privacy Policy{" "}
              </Link>{" "}
              and
              <Link
                style={{ textDecoration: "none", color: "#243788" }}
                href={"/terms-and-conditions"}
              >
                {" "}
                Terms & Conditions{" "}
              </Link>{" "}
              and receive communication from Credmudra via SMS, E-mail, and
              WhatsApp.
            </Typography>
          </Box>
          {formik.touched.termsAndCondition &&
            formik.errors.termsAndCondition && (
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "14px",
                  ml: 1,
                }}
              >
                {formik.errors.termsAndCondition}
              </FormHelperText>
            )}
        </Grid>
      </form>
    </>
  );
};

export default CommonUserNumber;
