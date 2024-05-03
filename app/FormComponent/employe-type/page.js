"use client"
import React from "react";
import {
  Box,
  Typography,
  CssBaseline,
  Grid,
  FormHelperText,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import salariedImg from "@/public/Images/salaried.svg";
import selfEmployeedImg from "@/public/Images/self-employeed.svg";
import { useFormik } from "formik";
import Image from "next/image";
import NavButton from "@/app/components/NavButton";
import { EmployeTypeErrorFocus } from "@/app/components/errorFocus";
import { employmentTypeSchema } from "@/app/components/validateSchema";
import { getInitialEmployeTypeValues } from "@/app/components/initialValues";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "@/lib/reducers/reducer";
import { useRouter } from "next/navigation";
import { useApiCallMutation } from "@/lib/services/apiCallServices";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";


const EmployeType =() => {
  const formData = useSelector((state) => state?.form?.formData);
  const dispatch = useDispatch();
  const router = useRouter();
 
  //Drop-Off Api
  const [DropOffApi, dropOffApiData] = useApiCallMutation();
  const dropOffRequest =async()=>{
    const data = {
      leadId: sessionStorage.getItem("leadId"),
      stage: "employment type",
      employmentType: formData?.employmentType,
      loan: {
        reason: formData?.loan?.reason,
        otherReason: formData?.loan?.otherReason,
        amount: formData?.loan?.amount,
        tenure: formData?.loan?.tenure,
      },
      panCard: formData?.panCard,
      emailId: formData?.personalInfo?.emailId,
      utm: {
        id: formData?.utm?.id,
        url: formData?.utm?.url,
        source: formData?.utm?.source,
        medium: formData?.utm?.medium,
        campaign: formData?.utm?.campaign,
        term: formData?.utm?.term,
        content: formData?.utm?.content,
        clickId: formData?.utm?.clickId,
      },
      extras: {
        browser: formData?.extras?.browser,
        operatingSystem: formData?.extras?.operatingSystem,
        ipAddress: formData?.extras?.ipAddress,
        timestamp: formData?.extras?.timestamp,
        userAgent: formData?.extras?.userAgent,
        location: formData?.extras?.location,
      },
    };
    
    DropOffApi({
      endPoint: apiEndPointsConfig.DropOff,
      method: "POST",
      data: { data },
    });
  }

  const handlePrev = () => {
    router.push("/get-registered/loan");
  };

  const handleSubmit = async () => {
    console.log('dsdsd');
    await dropOffRequest();
    if (formData?.employmentType === "Salaried") {
      console.log('dddd');
      router.push("/get-registered/salaried");
      sessionStorage.setItem("employmentType", "Salaried");
    } else if (formData?.employmentType === "Self Employed") {
      console.log('sssss');

      router.push("/get-registered/selfemployed");
      sessionStorage.setItem("employmentType", "Self Employed");
    }
  }

  const formik = useFormik({
    initialValues:getInitialEmployeTypeValues(formData),
    validationSchema:  employmentTypeSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <CssBaseline />
      <form onSubmit={formik.handleSubmit}>
        <Grid container rowGap={5}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", md: "35px", lg: "36px", xl: "40px" },
              fontWeight: "bold",
              color: "#243771",
            }}
          >
            Employment Type
          </Typography>
          <Grid
            container
            rowGap={4}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h4" sx={{ fontSize: "16px", color: "green" }}>
              Your Profession
            </Typography>
            <RadioGroup
              row
              id="employmentType"
              value={formik.values.employmentType}
              onChange={(e) => {
                dispatch(
                  setFormData({
                    employmentType: e.target.value,
                  })
                );
                formik.handleChange("employmentType")(e.target.value);
              }}
              sx={{ display: "flex", gap: 4, justifyContent: "center" }}
            >
              <FormControlLabel
                value="Salaried"
                name="employmentType"
                control={<Radio value="Salaried" sx={{ display: "none" }} />}
                label={
                  <Box
                    sx={{
                      width: "120px",
                      height: "116px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                      color: "#243771",
                      border: "1px solid #000",
                      borderRadius: "20px",
                      backgroundColor:
                        formData?.employmentType === "Salaried"
                          ? { backgroundColor: "#F7D64A", border: "none" }
                          : { backgroundColor: "transparent" },
                    }}
                  >
                    <Image src={salariedImg} alt="type" />
                    <Typography sx={{ fontSize: "11px" }}>Salaried</Typography>
                  </Box>
                }
              />
              <FormControlLabel
                value="Self Employed"
                name="employmentType"
                control={
                  <Radio value="Self Employed" sx={{ display: "none" }} />
                }
                label={
                  <Box
                    sx={{
                      width: "120px",
                      height: "116px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                      color: "#243771",
                      border: "1px solid #000",
                      borderRadius: "20px",
                      backgroundColor:
                        formData?.employmentType === "Self Employed"
                          ? { backgroundColor: "#F7D64A", border: "none" }
                          : { backgroundColor: "transparent" },
                    }}
                  >
                    <Image src={selfEmployeedImg} alt="type" />
                    <Typography sx={{ fontSize: "11px" }}>
                      Self Employed
                    </Typography>
                  </Box>
                }
              />
            </RadioGroup>
          </Grid>
          {formik.touched.employmentType && formik.errors?.employmentType && (
            <FormHelperText
              sx={{
                margin: 0,
                color: "red",
                fontSize: "14px",
                ml: 1,
              }}
            >
              {formik.errors.employmentType}
            </FormHelperText>
          )}
          <NavButton
            handlePrev={handlePrev}
            ErrorFocus={() => EmployeTypeErrorFocus(formik)}
          />
        </Grid>
      </form>
    </>
  );
};
export default EmployeType;
