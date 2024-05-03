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

const InterestRate = () => {
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
    // hide last border
    "&:last-child th": {
      border: 0,
      borderRight: "2px solid #C1C5D3",
    },
  }));
  function createData(bank, interestrate) {
    return { bank, interestrate };
  }
  const rows = [
    createData("Axis Bank", "14.95% to 19.20% per annum"),
    createData("Bajaj Finserv", "9.75% to 30% per annum"),
    createData("HDB Financial Services Ltd.	", "Up to 36% per annum"),
    createData("HDFC Bank", "10% to 22.50% per annum"),
    createData("IDFC FIRST Bank	", "10.50% per annum onwards"),
    createData("Kotak Mahindra Bank	", "16% to 26% per annum"),
    createData("Tata Capital", "12% per annum onwards"),
  ];
  return (
    <Grid>
      <Container maxWidth={"xl"} sx={{ padding: "0px 0px 50px" }}>
        <Grid
          container
          spacing={2}
          sx={{ padding: { xs: "20px", md: "48px" } }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              alignItems: { sm: "center", md: "flex-start" },
              justifyContent: { sm: "center" },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: { sm: "80%", lg: "80%", xl: "65%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "22px", sm: "24px", md: "36px" },
                  marginBottom: "10px",
                  color: "#243771",
                  fontWeight: "900",
                  lineHeight:'1.2'
                }}
              >
                Interest Rates On Business Loan Offers
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "17px",
                    sm: "18px",
                    lg: "16px",
                    xl: "18px",
                  },

                  marginBottom: "10px",
                  color: "#10162c",
                  opacity: 0.9,
                  marginTop: "20px",
                }}
              >
                Please check the applicable interest rates on business loan
                offers extended by several leading financial institutions in our
                country:
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "17px",
                    sm: "18px",
                    lg: "16px",
                    xl: "18px",
                  },
                  marginBottom: "10px",
                  color: "#10162c",
                  opacity: 0.9,
                  marginTop: "20px",
                }}
              >
                You must note that these interest rates are subject to change
                without any prior notice. Further, the applicable interest rate
                will depend on your eligibility for the credit facility. Hence,
                contact your lending institution in order to know the actual
                interest rate applicable to your business loan.
              </Typography>
              <Box>
                <Link href="/business-loan/get-registered">
                  <GetMatchedButton />
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "center" },
              justifyContent: { xs: "center", sm: "center" },
              marginTop: "20px",
            }}
          >
            <Box sx={{ width: { md: "100%" } }}>
              <Paper
                elevation={5}
                sx={{
                  padding: 2,
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
                          BANK OR NBFC
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{
                            borderRight: "2px solid #C1C5D3",
                            fontSize: { xs: "18px" },
                          }}
                        >
                          INTEREST RATE RANGE
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            sx={{
                              borderRight: "2px solid #C1C5D3",
                              fontSize: "18px",
                              padding: "15px",
                              textAlign: "center",
                              color: "#404040",
                            }}
                          >
                            {row.bank}
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
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default InterestRate;
