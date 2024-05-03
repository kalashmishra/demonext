"use client"
import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
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
import React from "react";


import FAQEligibility from "../@FAQEligibility/page";
import Link from "next/link";
import styled from "@emotion/styled";


const CheckYourEligibility = () => {
  const salariedListData = [
    { title: "Nationality:", content: "Indian" },
    { title: "Age range:", content: "Between 21 years and 80 years" },
    { title: "CIBIL score:", content: "Above 685" },
    {
      title: "Employment status:",
      content:
        "Must be an employee of an MNC, private or a public limited company.",
    },
  ];
  const selfEmployedData = [
    { title: "Nationality:", content: "Indian" },
    { title: "Age range:", content: "Between 24 years and 70 years" },
    { title: "CIBIL score:", content: "685 or Above" },
    { title: "Business vintage:", content: "A minimum of 3 years" },
  ];
  const rows = [
    createData("CASHe", "Rs.15,000 per month", "23 years to 58 years"),
    createData("MoneyTap", "Rs.20,000 per month", "23 years to 55 years"),
    createData("Fibe", "Rs.15,000 per month", "21 years to 55 years"),
    createData("Bajaj Finance", "Rs.25,000 per month", "21 years to 67 years"),
    createData("Axis Bank", "Rs.15,000 per month", "21 years to 60 years"),
    createData("ICICI Bank", "Rs.17,500 per month", "23 years to 58 years"),
    createData("HDFC Bank", "Rs.25,000 per month", "21 years to 60 years"),
    createData("IndusInd Bank", "Rs.25,000 per month", "21 years to 60 years"),
    createData("Punjab National Bank", "Rs.15,000 per month", "Above 18 years"),
    createData("State Bank of India", "Rs.15,000 per month", "Above 18 years"),
    createData(
      "Standard Chartered Bank",
      "Above Rs.22,000 per month",
      "22 years to 58 years"
    ),
    createData(
      "IDFC First Bank",
      "Rs.20,000 per month",
      "23 years to 65 years"
    ),
  ];
  const influencingData = [
    {
      title: "Credit Score:",
      content:
        "Personal loan, being an unsecured credit type demands a higher CIBIL score. This assures creditors that you are a trustworthy borrower and they can expect you to pay your monthly instalments on time. Since no collateral is involved, it is vital to maintain a score of 700 and above.",
    },
    {
      title: "Age bar:",
      content:
        "As you have already seen that most of the lenders have set the minimum age bar to 21 years, it becomes mandatory to have reached it to get approval. Also, you must ensure that your maximum age at the time you complete loan repayment should be 58 or as the lender specifies.",
    },
    {
      title: "Minimum income:",
      content:
        "If a borrower has a high income, lenders are sure that you will have sufficient cash to pay an increased monthly instalment. So, you can easily go for a sumptuous credit amount. On the contrary, if your monthly salary is less or below the minimum income bar, there are chances of rejection of credit application.",
    },
    {
      title: "Repayment capacity:",
      content:
        "While reviewing your personal loan application, lenders check the liabilities that you already have. If you have multiple credits to repay at the time of loan application, lenders realise that it can pose a financial burden to repay another credit. So, they might reject your application or lower the allowed credit amount.",
    },
    {
      title: "Business or working experience:",
      content:
        "Several financial institutions have set a minimum work experience of two years or more as an eligibility criterion for salaried individuals. Also, some lenders demand a business vintage of 3 years, which self-employed individuals need to fulfil to stand eligible for credit approval.",
    },
  ];
  const boostData = [
    {
      title: "Nationality:",
      content:
        "Go for a co-applicant or guarantor: In case you have a low CIBIL score and want a personal loan urgently, you can request your friends or family members with a good CIBIL score to be your co-applicant or even a guarantor. This can lead to a prompt improvement in your personal loan eligibility and approval of credit application.",
    },
    {
      title: "Refrain from frequent job switches:",
      content:
        "Wondering why frequent job switches hamper your loan eligibility? If you keep changing your job again and again, lenders are not able to estimate your monthly income and view you as a high-risk borrower. Hence, it would be prudent to avoid changing your job randomly.",
    },
    {
      title: "Maintain a credit score above 750:",
      content:
        "A credit score above 750 makes lenders believe that you are an ardent financial planner having good experience in repaying your credits. However, if you have a lower score, try to take some effective steps to improve it immediately and fulfill the loan eligibility criteria.",
    },
    {
      title: "Do not apply for multiple loan applications:",
      content:
        "If you already have more than one credit to repay, it can pose a financial burden to pay EMIs for all. Also, at times it can make you miss out on the monthly instalment date, leading to lowering of your CIBIL score. Thus, it would be prudent to apply for credit only when needed.",
    },
    {
      title: "Create sources of additional income:",
      content:
        "Creating additional sources of income allows you to earn extra every month. This eases the payment of monthly instalments on time. In view of this, creditors will see you as a more eligible candidate and approve your loan immediately after application.",
    },
  ];

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
  function createData(lender, income, age) {
    return { lender, income, age };
  }
  const paraStyling = {
    fontSize: { xs: "18px" },
    fontWeight: "300",
    color: "#404040",
    lineHeight: 1.5,
    margin: "23px 0",
  };
  const PLPagesStyling = {
    borderBottom: "1px solid #858585",
    color: "#243771",
    display: "block",
    fontSize: "16px",
    fontWeight: 700,
    padding: "9px 0 10px",
    textDecoration: "none",
  };
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
  };

  const ListItemTextTitle = {
    color: "#404040",
    fontSize: { xs: "18px" },
    fontWeight: "900",
    margin: "0 0 20px",
  };
  const ListItemTextContetnt = {
    color: "#404040",
    fontSize: { xs: "18px" },
    fontWeight: "300",
    margin: "0 0 20px",
  };
  const TabelRowStyling = {
    borderRight: "2px solid #C1C5D3",
    fontSize: "18px",

    padding: "15px",
    textAlign: "center",
    color: "#404040",
  };
  const TabelHeadingStyling = {
    borderRight: "2px solid #C1C5D3",

    fontSize: { xs: "18px" },
  };

  return (
    <Box
      sx={{
        paddingBottom: "50px",
        marginTop: { xs: "40px" },
        padding: { xs: "0px 10px" },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            paddingRight: { xs: "0", md: "8%" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "35.5px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
              }}
            >
              Check Your Personal Loan Eligibility To Get A Credit Of Up To
              Rs.20 Lakh From Credmudra!
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              A personal loan is one of the choicest go-to options for
              individuals with immediate requirement of funds. The main reason
              behind its popularity is the flexibility of loan customisation,
              easy application process, and instant fund disbursement. In
              addition, the personal loan eligibility criteria are quite lenient
              which ensures you can get assured and instant credit approval on
              applying correctly.
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              Before proceeding with the credit application process you should
              note that the eligibility requirements for salaried and
              self-employed people are somewhat different. Let’s dive deep to
              get an explicit idea regarding each.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
               
              }}
            >
              Eligibility Criteria For Salaried Persons
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              If you are a salaried individual, you will need to fulfil some
              simple eligibility criteria to get an instant approval for your
              credit application. These are as follows:
            </Typography>
            <List>
              {salariedListData.map((item, index) => (
                <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextTitle }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextContetnt }}
                        >
                          {item.content}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Typography sx={{ ...paraStyling }}>
              Disclaimer: The eligibility criteria of Self-Employed individuals
              can vary with the lender that you are selecting for availing a
              personal loan.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
               
              }}
            >
              Eligibility Criteria For Self-Employed Persons
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              Are you a self-employed individual? If yes, check the personal
              loan eligibility criteria to ensure that that you can get instant
              approval for your credit:
            </Typography>
            <List>
              {selfEmployedData.map((item, index) => (
                <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <FiberManualRecord
                          sx={{ ...CircleIcon, padding: "0" }}
                        />
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextTitle }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextContetnt }}
                        >
                          {item.content}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Typography sx={{ ...paraStyling }}>
              Disclaimer: The eligibility criteria of Self-Employed individuals
              can vary with the lender that you are selecting for availing a
              personal loan.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
              
              }}
            >
              Eligibility Of Top Banks And Private Lenders
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              The minimum income and age range to stand eligible for personal
              credit vary considerably with lenders. Here are some personal loan
              eligibility check boxes that are imperative to tick for getting
              credit approval from some of the top banks and private lenders:
            </Typography>
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
                      <StyledTableCell sx={{ ...TabelHeadingStyling }}>
                        Lender
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{ ...TabelHeadingStyling }}
                      >
                        MINIMUM INCOME
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{ ...TabelRowStyling }}
                      >
                        AGE RANGE
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          sx={{ ...TabelRowStyling }}
                        >
                          {row.lender}
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{ ...TabelRowStyling }}
                        >
                          {row.income}
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{ ...TabelRowStyling }}
                        >
                          {row.age}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <Typography sx={{ ...paraStyling }}>
              <span style={{ color: "#404040" }}> Disclaimer:</span> You must
              keep in mind that these figures are just an average. The rate of
              interest that the lender charges can change based on your
              application.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#10162c",
              overflow: "hidden",
              position: "relative",
              width: { xs: "100%", md: "100%" },
              padding: {xs:'50px 0px', sm:'50px 15px'},
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}></Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: { xs: "column", md: "row" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  color: " #fff!important",
                  fontSize: { xs: "22px", sm: "32px" },
                  fontWeight: "900",
                  lineHeight: "1.4",
                 
                  textAlign: { xs: "center", md: "left" },
                  marginBottom: { xs: "20px", md: "0" },
                }}
              >
                Apply For A Personal Loan Online With Minimal Documentation
              </Typography>

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
                    fontWeight: "900",
                    transition: ".4s all ease-in-out",
                    textTransform: "capitalize ",
                    whiteSpace: "nowrap",
                  }}
                >
                  Apply Now
                </Button>
              </Link>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
              
              }}
            >
              Factors Influencing Personal Loan Eligibility
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              Wondering which factors can have a prominent effect on the
              personal loan eligibility criteria? Here are some of the primary
              ones that have a notable effect on your personal credit
              eligibility:
            </Typography>
            <List>
              {influencingData.map((item, index) => (
                <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextTitle }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextContetnt }}
                        >
                          {item.content}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
              
              }}
            >
              How Can You Boost Your Personal Loan Eligibility?
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              Worried about getting low personal loan approval due to the impact
              of the above factors? Here are some of the sure-shot steps that
              you can take for improving your personal loan eligibility:
            </Typography>
            <List>
              {boostData.map((item, index) => (
                <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextTitle }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextContetnt }}
                        >
                          {item.content}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <FAQEligibility />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ marginTop: "70px" }}>
            <List>
              <Typography
                sx={{
                  background: "#10162c",
                  boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                  color: "#fff !important",
                  fontSize: "18px",
                  marginBottom: "18px",
                  padding: "15px 5px 14px",
                  textAlign: "center",
                }}
              >
                Personal Loan Pages
              </Typography>
              <Link
                href="/personal-loan-interest-rate"
                style={{ textDecoration: "none" }}
              >
                <ListItem sx={{ ...PLPagesStyling }}>
                  Personal Loan Interest Rate
                </ListItem>
              </Link>
              <Link
                href="/personal-loan-eligibility"
                style={{ textDecoration: "none" }}
              >
                <ListItem sx={{ ...PLPagesStyling }}>
                  Personal Loan Eligibility
                </ListItem>
              </Link>
              <Link
                href="/personal-loan-emi-calculator"
                style={{ textDecoration: "none" }}
              >
                <ListItem sx={{ ...PLPagesStyling }}>
                  Personal Loan EMI Calculator
                </ListItem>
              </Link>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckYourEligibility;
