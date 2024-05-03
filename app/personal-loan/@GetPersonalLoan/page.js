import GetMatchedButton from "@/app/components/GetMatchedButton";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const GetPersonalLoan = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#243771",
        m: 0,
        minHeight: "550px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: { xs: "15%", sm: "0%" },
      }}
    >
      <Container maxWidth={"xl"}>
        <Box sx={{ padding: { xs: "40px 8px", md: "32px" } }}>
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: "26px", sm: "40px", lg: "45px" },
              fontWeight: "900",
              color: "#f7d64a",
              lineHeight: "1.5",
            }}
          >
            Get A Personal Loan Starting From As Low As
            <Typography
              component={"span"}
              sx={{
                fontSize: { xs: "26px", sm: "40px", lg: "45px" },
                fontWeight: "900",
                color: "#fff",
                lineHeight: "1.5",
                padding: "0px 0px 20px",
              }}
            >
              {" "}
              Rs.1,000
            </Typography>{" "}
            To A Maximum Of
            <Typography
              component={"span"}
              sx={{
                color: "#fff",
                fontSize: { xs: "26px", sm: "40px", lg: "45px" },
                fontWeight: "900",
                lineHeight: "1.5",
                padding: "0px 0px 20px",
              }}
            >
              {" "}
              Rs.5 Lakh
            </Typography>{" "}
            Through Credmudra!
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: "17px", sm: "22px" },
              margin: "0px 0px 32px",
              color: "#FFFFFF",

              lineHeight: { xs: "1.7" },
              marginTop: { xs: "20px" },
            }}
          >
            Experience seamless borrowing with Credmudra! Instantly meet your
            credit needs with easy online applications, attractive interest
            rates, and minimum touchpoints. Sign up, get matched with a lender,
            and complete quick formalities for hassle-free disbursal.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href="/get-registered/user-number">
              <GetMatchedButton />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GetPersonalLoan;
