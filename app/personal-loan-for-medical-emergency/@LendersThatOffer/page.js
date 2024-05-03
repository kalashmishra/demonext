"use client";

import GetMatchedButton from "@/app/components/GetMatchedButton";
import styled from "@emotion/styled";
import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const LendersThatOffer = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#243771",
      color: "white",
      fontWeight: "900",

      textAlign: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      textAlign: "center",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FCEFB8",
    },
    "&:last-child th": {
      border: 0,
      borderRight: "2px solid #C1C5D3",
    },
  }));
  function createData(lender, interestrate, loanamount) {
    return { lender, interestrate, loanamount };
  }

  const rows = [
    createData("State Bank of India	", "11% – 15%", "₹1,00,000 – ₹1,00,00,000"),
    createData("ICICI Bank", "10.75% Onwards", "₹50,000 – ₹50,00,000"),
    createData("Tata Capital", "10.5% Onwards", "₹75,000 – ₹25,00,000"),
    createData("Axis Bank", "10.5% Onwards", "₹75,000 – ₹25,00,000"),
    createData("Axis Bank", "11.25% Onwards", "₹50,000 – ₹40,00,000"),
    createData("Fullerton India	", "10.49% Onwards	", "Up to ₹25,00,000"),
    createData("Kotak Mahindra Bank", "11.9% Onwards", "₹50,000 – ₹40,00,000"),
    createData("IDFC First Bank", "10.49% Onwards", "₹20,000 – ₹1,00,00,000"),
    createData("IndusInd Bank", "10.49% Onwards", "₹30,000 – ₹15,00,000"),
    createData("Bajaj Finserv", "11% Onwards", "₹30,000 – ₹15,00,000"),
    createData("Dhani Loans", "11.9% Onwards", "₹1,000 – ₹15,00,000"),
    createData("MoneyTap", "13% – 24%", "₹3,000 – ₹5,00,000"),
  ];
  return (
    <Box>
      <Container
        sx={{
          display: { xs: "block" },
          padding: "20px 0px 50px",
        }}
        maxWidth={"xl"}
      >
        <Grid
          container
          alignItems="center"
          sx={{ padding: { xs: "20px", md: "48px" } }}
        >
          <Grid
            item
            xs={12}
            md={6}
            xl={4}
            sx={{
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "center", md: "flex-start" },
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: { md: "100%", xl: "100%" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "26px", sm: "30px", xl: "44px" },

                  fontWeight: "900",
                  color: "#243771",
                  lineHeight: "1.3",
                  textAlign: { xs: "center", md: "left" },
                  margin: "0 0 10px",
                }}
                gutterBottom
              >
                Lenders That Offer Medical Loans
              </Typography>
              <Typography
                sx={{
                  margin: "0 0 10px",
                  paddingRight: { md: "30%", xl: "0" },
                  fontSize: { xs: "17px", md: "18px", xl: "22px" },
                  marginBottom: { xs: "30px" },
                  color: "#404040",
                  lineHeight: "1.5",
                  textAlign: { xs: "center", md: "left" },
                }}
                gutterBottom
              >
                Here is a table listing several prominent financial institutions
                that provide personal loans for medical emergencies:
              </Typography>
              <Typography
                sx={{
                  margin: "0 0 10px",
                  paddingRight: { md: "30%", xl: "0" },
                  fontSize: { xs: "17px", md: "18px", xl: "22px" },
                  marginBottom: { xs: "20px" },
                  color: "#404040",
                  lineHeight: "1.5",
                  textAlign: { xs: "center", md: "left" },
                }}
                gutterBottom
              >
                It is imperative that you compare personal medical loan offers
                across various lenders before deciding on which one to finalize,
                as per your financial needs and requirements.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", md: "flex-start" },
                  justifyContent: { xs: "center", md: "flex-start" },
                  margin: "0px 0px 20px",
                  marginBottom: { xs: "50px" },
                }}
              >
                <Link href="/get-registered/user-number">
                  <GetMatchedButton />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            xl={8}
            sx={{
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Paper
              sx={{
                padding: 2,
                overflowX: "auto",
                backgroundColor: "#E9E9E9",
              }}
            >
              <TableContainer component={Paper}>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell
                        sx={{
                          borderRight: "2px solid #C1C5D3",

                          fontSize: { xs: "18px" },
                        }}
                      >
                        Lender
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{
                          borderRight: "2px solid #C1C5D3",

                          fontSize: { xs: "18px" },
                        }}
                      >
                        INTEREST RATE (P.A.)
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{
                          borderRight: "2px solid #C1C5D3",

                          fontSize: { xs: "18px" },
                        }}
                      >
                        Loan Amount
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row,index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          sx={{
                            borderRight: "2px solid #C1C5D3",
                            fontSize: "18px",
                            fontFamily: "Inter,sans-serif",
                            padding: "15px",
                            textAlign: "center",
                            color: "#404040",
                          }}
                        >
                          {row.lender}
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{
                            borderRight: "2px solid #C1C5D3",
                            fontSize: "18px",
                            padding: "15px",
                            textAlign: "center",
                            color: "#404040",
                          }}
                        >
                          {row.interestrate}
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{
                            fontSize: "18px",
                            padding: "15px",
                            textAlign: "center",
                            color: "#404040",
                          }}
                        >
                          {row.loanamount}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LendersThatOffer;
