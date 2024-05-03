import GetMatchedButton from "@/app/components/GetMatchedButton";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const MedicalLoanEligibility = () => {
  const eligibilityCriteria = [
    {
      title: "Citizenship",
      description:
        "You should not only be residing in India but also have an Indian citizenship.",
    },
    {
      title: "Income",
      description:
        "You should be earning a minimum income of at least ₹20,000 – ₹30,000 per month.",
    },
    {
      title: "Age",
      description:
        "Your age should range from 21 years old to 58 years old to apply for a medical loan.",
    },
    {
      title: "Employment Type",
      description:
        "You must either be a full-time employee on a monthly salary or a self-employed professional in a business vintage.",
    },
    {
      title: "Work Experience",
      description:
        "You must have a total work experience of 1 year or more. Furthermore, you should be employed in your current firm for 6 months or more.",
    },
  ];

  return (
    <Box bgcolor="#fcefb8">
      <Container
        maxWidth={"xl"}
        sx={{
          display: { xs: "block" },
          padding: { xs: "20px 0px 50px" },
        }}
      >
        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{ padding: { xs: "0px 30px", md: "48px" } }}
        >
          <Grid
            item
            xs={12}
            md={4}
            lg={5}
            xl={4}
            sx={{
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "center", md: "flex-start" },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: { md: "100%", lg: "100%" },
                paddingLeft: { xl: "15px" },
              }}
            >
              <Typography
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "24px", sm: "32px" },

                  color: "#243771",
                  fontWeight: "900",
                  lineHeight: "1.1",
                  margin: "0 0 10px",
                }}
              >
                Medical Loan Eligibility Criteria
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "20px", sm: "20px" },

                  color: "#404040",
                  fontWeight: "300",
                  lineHeight: { xs: "1.1", md: "1.5" },
                  margin: "0 0 10px",
                }}
              >
                Following are the typical eligibility criteria for a medical
                loan:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
                  justifyContent: { xs: "center", md: "flex-start" },
                  margin: "0 0 10px",
                }}
              >
                <Link
                  href="/get-registered/user-number"
                >
                  <GetMatchedButton />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={8}
            lg={7}
            xl={8}
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              listStyle: "none",
              marginLeft: "0",
              paddingLeft: "0",
              textAlign: "center",
            }}
          >
            {eligibilityCriteria.map((criteria, index) => (
              <Grid
                item
                xs={8}
                sm={4}
                lg={3}
                key={index}
                sx={{
                  alignContent: "center",
                  background: "#fff",
                  border: "2px solid #243771",
                  borderRadius: "5px",

                  display: "flex",
                  flexWrap: "wrap",
                  flexFlow: "row wrap",
                  justifyContent: "space-evenly",
                  margin: { xs: "0px 10px 25px", sm: "0px 20px 55px" },
                  minHeight: { xs: "250px" },
                  padding: "25px 12px",
                  minwidth: { xs: "220px", sm: "300px" },
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#243771",
                    fontSize: "20px",

                    fontWeight: "900",
                  }}
                >
                  {criteria.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: "16px",

                    fontWeight: "300",
                  }}
                >
                  {" "}
                  {criteria.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MedicalLoanEligibility;
