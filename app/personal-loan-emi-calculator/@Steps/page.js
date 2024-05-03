import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Minimal from "../@Minimal/page";

const Steps = () => {
  const stepsData = [
    { title: "Step 1:", content: " Enter your loan amount." },
    {
      title: "Step 2:",
      content: "Enter the interest rate applicable to your lender.",
    },
    {
      title: "Step 3:",
      content: "Choose your preferred tenure for repayment.",
    },
  ];
  const benefitsData = [
    {
      title: "Fast & Accurate Results:",
      content:
        "By using a personal loan EMI calculator, you will get faster and more accurate results in just a few seconds.",
    },
    {
      title: "Compare & Select Lenders:",
      content:
        "You can compare different lenders and their interest rates and choose the one most suitable to your requirements.",
    },
    {
      title: "Choose Your Repayment Tenure: ",
      content:
        "You can choose different repayment tenures and choose the one you are most comfortable with.",
    },
    {
      title: "More Info than Just EMI:",
      content:
        "With a personal loan EMI calculator, you also get the amortisation or repayment schedule. This will help you get a clear idea about your loan repayment structure and the outstanding amount after each payment.",
    },
    {
      title: "Free of Cost:",
      content:
        " Using this calculator is totally free. So, you can perform as much trial and error as you need to come to the conclusion most feasible for you.",
    },
    {
      title: "100% Paperless Process:",
      content:
        "Our loan process from application to approval is totally digital. Your physical presence is not required at all and you can apply for it from any place at any time.",
    },
    {
      title: "Explore Flexible Options:",
      content:
        " For loan amounts ranging between Rs.1,000 to Rs.1,00,000, you can choose a tenure between 3 months to 2 years as per your preference.",
    },
  ];
  const factorsData = [
    {
      title: "Repayment Tenure:",
      content:
        "The loan repayment tenure you choose is inversely proportional to your EMI amount. This means the lower the repayment tenure, the higher the EMI amount, and vice-versa. Thus, you might find that having a longer loan tenure is more convenient. However, interest outgo is higher for longer loan tenure.",
    },
    {
      title: "Principal Amount: ",
      content:
        "The principal amount that your lender approves depends on a lot of factors, such as your credit score, repayment history, your relationship with the lender, etc. Also, the higher the principal amount, the higher the EMI. So, make your decisions carefully and within your capabilities.",
    },
    {
      title: "Rate of Interest:",
      content:
        "The EMI is directly proportional to the interest rate. Also, in the case of personal loans, the rate of interest depends mostly on the borrower. If your creditworthiness sounds promising to the lender, they will sanction your loan at the lowest rate of interest possible.",
    },
  ];
  const paraStyling = {
    fontSize: { xs: "18px" },
    fontWeight: "300",
    color: "#404040",
    lineHeight: 1.5,
    margin: "23px 0",
   
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
  return (
    <Box>
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} md={9} sx={{ paddingRight: { xs: "0", md: "14%" } }}>
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
                Steps To Use A Personal Loan EMI Calculator
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                The steps are extremely simple to follow and you can figure it
                out from any place at any time.
              </Typography>
              <List>
                {stepsData.map((item, index) => (
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
                You should note that the higher the repayment tenure, the lower
                will be the EMI amount. However, in the long run, you will end
                up paying more interest. This is why, if feasible, you should go
                for a shorter repayment tenure.
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
                Benefits Of Using A Personal Loan EMI Calculator
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Check out the following pointers to know how you can benefit
                from using a personal loan EMI calculator:
              </Typography>
              <List>
                {benefitsData.map((item, index) => (
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
                Factors Affecting Personal Loan EMI
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Take a look at these factors that play a significant role in
                determining your EMI amount:
              </Typography>
              <List>

                {factorsData.map((item, index) => (
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
                How To Use Credmudra Personal Loan EMI Calculator
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Using the <b>Credmudra Personal Loan EMI Calculator</b> is so
                straightforward and simple that even a person who is the least
                accustomed to the internet can operate it with absolute ease.
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                You just need to enter the loan amount, rate of interest
                applicable, and preferred tenure correctly in the respective
                sections.
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Consider all the factors mentioned and choose your repayment
                tenure and lender carefully before applying for the loan.
                Lastly, using a <b>personal loan EMI calculator</b> is
                absolutely recommended for making an informed decision, which
                will offer financial benefits as well as stability.
              </Typography>
            </Box>
            <Box>
              <Minimal />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Steps;
