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


const FinancialInstitution = () => {
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
    createData("HDFC Bank", "10.50% per annum"),
    createData("Axis Bank", "10.49% per annum"),
    createData("IndusInd Bank", "10.49% per annum"),
    createData("Bajaj Finserv", "11.00% per annum"),
    createData("Tata Capital", "10.99% per annum"),
    createData("YES Bank", "10.99% per annum"),
    createData("Fullerton India", "11.99% per annum"),
  ];
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "20px 0px 0px" }}>
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
                  fontWeight: "800",
                  lineHeight: "1.2",
                }}
              >
                Financial Institutions Offering Personal Loans For Home
                Renovation
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    lg: "16px",
                    xl: "18px",
                  },
                  
                  marginBottom: "10px",
                  color: "#10162c",

                  opacity: 1,
                }}
              >
                For further convenience, we listed down some of the leading
                financial institutions offering personal loans for home
                renovation, along with the associated interest rates:
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
                          FINANCIAL INSTITUTION
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{
                            borderRight: "2px solid #C1C5D3",

                            fontSize: { xs: "18px" },
                           
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
            <Box sx={{ marginTop: "30px" }}>
              <Typography>
                <Typography
                  sx={{ fontWeight: "600", color: "#404050" }}
                  component={"span"}
                >
                  Note:
                </Typography>{" "}
                These interest rates are subject to change without any prior
                notice. Hence, you should get in touch with the lender in order
                to know the applicable interest rates.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FinancialInstitution;
