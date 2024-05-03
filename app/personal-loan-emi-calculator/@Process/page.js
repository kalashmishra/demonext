"use client"
import React, { useEffect, useState } from "react";
import {
  Slider,
  Typography,
  Button,
  Grid,
  Box,
  Container,
  Link,
} from "@mui/material";
import * as echarts from "echarts";

const Process = () => {
  const [loanAmount, setLoanAmount] = useState(10000000);
  const [loanPeriod, setLoanPeriod] = useState(30);
  const [interestRate, setInterestRate] = useState(15);
  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanPeriod * 12;
    return (
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    ).toFixed(2);
  };
  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * 12 * loanPeriod;
  const interest = (totalPayment - loanAmount).toFixed(2);

  useEffect(() => {
    var chartDom = document.getElementById("pie-chart");
    var myChart = echarts.init(chartDom, "dark");
    var option;

    option = {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "EMI Calculator",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,

          label: {
            show: false,
            position: "center",
            textStyle: {
              color: "fff",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: loanAmount,
              name: "Principal",
              itemStyle: { color: "#fff" },
            },
            {
              value: interest,
              name: "Interest",
              itemStyle: { color: "#F7D64A" },
            },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  }, [loanAmount, interestRate, loanPeriod]);
  const formatAmountWithCommas = (amount) => {
    return amount.toLocaleString("en-IN", { maximumFractionDigits: 0 });
  };

  const lefttextStyling = {
    fontSize: "16px",
  };

  const righttextStyling = {
    fontSize: { xs: "16px", lg: "18px" },
  };

  return (
    <Box
      bgcolor={"#243771"}
      sx={{ padding: { xs: "80px 16px", md: "80px 40px" } }}
    >
      <Container maxWidth={"xl"}>
        <Box sx={{ marginBottom: "40px" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "24px", md: "36px" },
              fontWeight: "900",
              marginBottom: "20px",
            }}
          >
            The Process Is Pretty Time-Consuming, Isn't It?
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: "900",
              marginBottom: "20px",
            }}
          >
            Choose the faster, more accurate, and easier option – the personal
            loan EMI calculator online.
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="space-evenly">
          <Grid item xs={12} md={6} sx={{ color: "white" }}>
            <Box
              sx={{
                backgroundColor: "#1E2E5F",
                maxWidth: { md: "550px" },
                padding: "8% 10%",
              }}
            >
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography  sx={{ ...lefttextStyling }}>
                    Amount
                  </Typography>
                  <Typography sx={{ ...lefttextStyling }}>
                    {formatAmountWithCommas(loanAmount)}{" "}
                    <Typography
                      component={"span"}
                      sx={{ ...righttextStyling, color: "#F7D64A" }}
                    >
                      ₹
                    </Typography>
                  </Typography>
                </Box>
                <Slider
                  value={loanAmount}
                  min={0}
                  max={10000000}
                  onChange={(event, newValue) => setLoanAmount(newValue)}
                  sx={{
                    WebkitAppearance: "none",
                    background: "#0000",
                    border: "none",
                    width: "100%",
                    color: "#F7D64A",
                  }}
                />
              </Box>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography  sx={{ ...lefttextStyling }}>
                    Length
                  </Typography>
                  <Typography sx={{ ...lefttextStyling }}>
                    {loanPeriod}{" "}
                    <Typography
                      component={"span"}
                      sx={{ ...righttextStyling, color: "#F7D64A" }}
                    >
                      years
                    </Typography>
                  </Typography>
                </Box>
                <Slider
                  value={loanPeriod}
                  min={0}
                  max={30}
                  onChange={(event, newValue) => setLoanPeriod(newValue)}
                  sx={{
                    webkitAppearance: "none",
                    background: "#0000",
                    border: "none",
                    width: "100%",
                    color: "#F7D64A",
                  }}
                />
              </Box>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography  sx={{ ...lefttextStyling }}>
                    % Interest
                  </Typography>
                  <Typography sx={{ ...lefttextStyling }}>
                    {formatAmountWithCommas(interestRate)}{" "}
                    <Typography
                      component={"span"}
                      sx={{ ...righttextStyling, color: "#F7D64A" }}
                    >
                      %
                    </Typography>
                  </Typography>
                </Box>
                <Slider
                  value={interestRate}
                  min={0}
                  max={15}
                  onChange={(event, newValue) => setInterestRate(newValue)}
                  sx={{
                    webkitAppearance: "none",
                    background: "#0000",
                    border: "none",
                    width: "100%",
                    color: "#F7D64A",
                  }}
                />
              </Box>
              <Box style={{ marginTop: "20px" }}>
                <Typography sx={{ color: "#F7D64A", ...lefttextStyling }}>
                  Monthly Payable:
                </Typography>
                <Typography sx={{ color: "#F7D64A" }}>
                  <Typography
                    component={"span"}
                    color={"white"}
                    sx={{ fontSize: "24px" }}
                  >
                    {formatAmountWithCommas(monthlyPayment)}₹
                  </Typography>
                  /mo
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <Link
                 
                  href="/get-registered/user-number"
                >
                  <Button
                    sx={{
                      "&:hover": {
                        backgroundColor: "#243788",
                        color: "#F7D64A",
                      },
                      padding: "14px 30px",
                      boxShadow: "0px 3px 6px #00000029",
                      borderRadius: "10px",
                      border: "1px solid #F7D64A",
                      backgroundColor: "#F7D64A",
                      color: "#243788",
                      marginLeft: { md: "8px" },
                      marginTop: "40x",
                      fontWeight: "900",
                      transition: ".4s all ease-in-out",
                      textTransform: "capitalize ",
                    }}
                  >
                    Apply Now
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",

                justifyContent: "center",
              }}
            >
              <Box
                id="pie-chart"
                sx={{
                  display: "block",
                  boxSizing: "border-box",
                  width: "100%",
                  height: {xs:'300px',sm:'400px'},
                  // marginBottom: "-10px",
                  userSelect: "none",
                  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  position: "relative",
                }}
              >
               
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: "30px", md: "30px", lg: "70px" },
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box>
                  <Typography sx={{ ...righttextStyling }}>
                    Principal
                  </Typography>
                  <Typography sx={{ ...righttextStyling }}>
                    {formatAmountWithCommas(loanAmount)}{" "}
                    <Typography
                      component={"span"}
                      sx={{ ...righttextStyling, color: "#F7D64A" }}
                    >
                      ₹
                    </Typography>
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ ...righttextStyling }}>Interest</Typography>
                  <Typography sx={{ ...righttextStyling }}>
                    {formatAmountWithCommas(interest)}{" "}
                    <Typography
                      component={"span"}
                      sx={{ ...righttextStyling, color: "#F7D64A" }}
                    >
                      ₹
                    </Typography>
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ ...righttextStyling }}>
                    Total Payable
                  </Typography>
                  <Typography sx={{ ...righttextStyling }}>
                    {formatAmountWithCommas(totalPayment.toFixed(2))}{" "}
                    <Typography
                      component={"span"}
                      sx={{ ...righttextStyling, color: "#F7D64A" }}
                    >
                      ₹
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Process;
