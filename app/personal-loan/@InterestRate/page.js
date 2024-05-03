"use client";
import React from "react";
import { styled } from "@mui/material/styles";
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

const InterestRate = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#243771",
      color: "white",
      fontWeight: "bolder",
      fontSize: "18px",
      textAlign: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "18px",
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
  function createData(lender, interestrate) {
    return { lender, interestrate };
  }

  const rows = [
    createData("mPokket", "0% to 48.0% per annum "),
    createData("CASHe", "2.50% per month"),
    createData("MoneyTap", "1.08% per month onward"),
    createData("Fibe", "24.0% to 30.0% per annum"),
    createData("ICICI Bank", "10.75% to 19.0% per annum"),
    createData("Bajaj Finance", "11.0% to 39.0% per annum"),
    createData("HDFC Bank", "10.50% to 24.0% per annum"),
    createData("Axis Bank", "10.49% to 22.0% per annum"),
    createData("Kotak Mahindra Bank", "10.99% per annum onward"),
    createData("IDFC FIRST Bank", "10.49% to 36.0% per annum"),
  ];

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "20px 0px 50px" }}>
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
              padding: { xs: "16px", md: "0px" },
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
                  fontSize: { xs: "26px", sm: "30px", lg: "44px" },
                  marginBottom: "10px",
                  color: "#243771",
                  fontWeight: "900",
                  lineHeight: "1.2",
                }}
              >
                Attractive Personal Loan Interest Rates
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
                  opacity: 1,
                  marginTop: { xs: "20px", sm: "0px" },
                }}
              >
                Check out the applicable interest rate on personal loan across
                several lenders:
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              alignItems: { sm: "center" },
              justifyContent: { sm: "center" },
              flexDirection: "column",
              marginTop: { xs: "20px", sm: "0px" },
            }}
          >
            <Box
              sx={{
                width: { lg: "90%", xl: "95%" },
              }}
            >
              <Paper
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
                          sx={{ borderRight: "2px solid #C1C5D3" }}
                        >
                          Lender
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          APPLICABLE INTEREST RATE
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            sx={{ borderRight: "2px solid #C1C5D3" }}
                          >
                            {row.lender}
                          </StyledTableCell>
                          <StyledTableCell align="right">
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

export default InterestRate;
