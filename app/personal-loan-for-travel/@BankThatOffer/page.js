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

const BankThatOffer = () => {
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
  function createData(bank, interestrate) {
    return { bank, interestrate };
  }
  const rows = [
    createData("HDFC Bank", "Starting from 10.50% p.a."),
    createData("IDFC First Bank", "Starting from 10.49% p.a."),
    createData("Kotak Mahindra Bank", "Starting from 10.99% p.a."),
    createData("ICICI Bank", "Starting from 10.75% p.a."),
    createData("Axis Bank", "Starting from 10.25% p.a."),
    createData("Standard Chartered", "Starting from 11% p.a."),
  ];
  return (
    <Box bgcolor="#fcefd8">
      <Container maxWidth={"xl"} sx={{ padding: "50px 0px 50px" }}>
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
                  lineHeight: "normal",
                }}
              >
                Banks That Offer Travel Loan
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "17px",
                    sm: "18px",
                    lg: "16px",
                    xl: "18px",
                  },
                  font: "Inter",
                  marginBottom: "10px",
                  color: "#10162c",

                  opacity: 1,
                }}
              >
                Take a look at the following table to learn about some of the
                top banks that offer travel loans at competitive interest rates:
              </Typography>
              <Box>
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
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "center" },
              justifyContent: { xs: "center", sm: "center" },
            }}
          >
            <Box sx={{ width: { md: "100%" } }}>
              <Paper
                elevation={5}
                sx={{
                  padding: 2,
                  marginTop: { xs: "30px", sm: "0px" },
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
                            fontFamily: "Inter,sans-serif",
                          }}
                        >
                          BANK
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{
                            borderRight: "2px solid #C1C5D3",

                            fontSize: { xs: "18px" },
                            fontFamily: "Inter,sans-serif",
                          }}
                        >
                          INTEREST RATE
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
                              fontFamily: "Inter,sans-serif",
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
                              fontFamily: "Inter,sans-serif",
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
    </Box>
  );
};

export default BankThatOffer;
