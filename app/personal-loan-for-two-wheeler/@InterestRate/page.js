"use client"
import React from "react";
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
import GetMatchedButton from "@/app/components/GetMatchedButton";
import styled from "@emotion/styled";


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

    "&:last-child th": {
      border: 0,
      borderRight: "2px solid #C1C5D3",
    },
  }));
  function createData(lender, maximum, interest, processing, foreclosure) {
    return { lender, maximum, interest, processing, foreclosure };
  }

  const rows = [
    createData(
      "ICICI Bank",
      "100% of the vehicle’s on-road price",
      "9.00% p.a. onwards",
      "Up to 4.75% of the borrowed principal",
      "5% of the loan amount + GST"
    ),
    createData(
      "Bajaj Auto Finance",
      "100% of the vehicle’s on-road price",
      "8.50% p.a. onwards",
      "Up to 3.00% of the borrowed principal",
      "Not applicable after 12 months"
    ),
    createData(
      "Axis Bank",
      "100% of the vehicle’s on-road price",
      "11.00% p.a. onwards",
      "Up to 2.50% of the borrowed principal",
      "5% of the loan amount"
    ),
    createData(
      "Punjab National Bank",
      "Up to Rs. 10 Lakhs",
      "11.15% p.a. onwards",
      "0.5% of the principal subject to Rs.500 to Rs.1000",
      "Nil"
    ),
    createData(
      "Fullerton India",
      "Up to Rs. 30 Lakhs",
      "8.00% p.a. onwards",
      "Up to 5.00% of the borrowed principal",
      "3% of the loan amount"
    ),
    createData(
      "Tata Capital",
      "100% of the vehicle’s on-road price",
      "11.50% p.a. onwards",
      "Up to 2.50% of the borrowed principal",
      "4% of the loan amount + GST"
    ),
    createData(
      "HeroFinCorp",
      "Up to Rs. 1.5 Lakhs",
      "10.65% p.a. onwards",
      "Up to 2.50% of the borrowed principal",
      "4% of the loan amount + GST"
    ),
  ];
  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: "0px 10px 20px" }}>
        <Grid container spacing={4} sx={{ padding: "10px" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                textAlign: { xs: "center" },
                fontSize: { xs: "24px", sm: "40px" },

                color: "#243771",
                fontWeight: "800",
                lineHeight: { xs: "1.3", sm: "1.5" },
                margin: { xs: "0px 0px 35px" },
              }}
            >
              Interest Rate & Other Charges
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center" },
                fontSize: { xs: "20px" },

                color: "#404040",
                opacity: "0.8",
                lineHeight: { xs: "1.3", sm: "1.5" },
                margin: { xs: "0px 0px 20px" },
                maxWidth: "660px",
              }}
            >
              Applying for a two-wheeler loan is now very easy as the entire
              procedure gets executed online. Just go through the interest rates
              and other particulars to decide the best plan. Finally, wait for
              instant disbursal of the loan amount from the lender's end.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center" },
              }}
            >
              <Link
              
                href="/get-registered/user-number"
              >
                <GetMatchedButton />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={5}
              sx={{
                padding: 2,
                marginTop: "20px",
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
                        MAXIMUM LOAN AMOUNT
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{
                          borderRight: "2px solid #C1C5D3",

                          fontSize: { xs: "18px" },
                         
                        }}
                      >
                        INTEREST RATES
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{
                          borderRight: "2px solid #C1C5D3",

                          fontSize: { xs: "18px" },
                          
                        }}
                      >
                        PROCESSING FEES
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{
                          borderRight: "2px solid #C1C5D3",

                          fontSize: { xs: "18px" },
                         
                        }}
                      >
                        FORECLOSURE CHARGES
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
                          {row.maximum}
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
                          {row.interest}
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
                          {row.processing}
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
                          {row.foreclosure}
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
    </>
  );
};

export default InterestRate;
