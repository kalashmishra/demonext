import { FiberManualRecord } from "@mui/icons-material";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const TopWays = () => {
  const tipsData = [
    {
      title: "Reducing the credit utilisation ratio",
    },
    {
      title: "Paying the monthly instalments on time",
    },
    {
      title: "Avoiding multiple hard enquiries at the same time",
    },
    {
      title:
        "Maintaining a good mixture of secured and unsecured credit instruments",
    },
    {
      title: "Reporting the errors in the credit report, and more.",
    },
  ];
  const paraStyling = {
    fontSize: { xs: "18px" },
    fontWeight: "300",
    color: "#404040",
    lineHeight: 1.5,
    margin: "23px 0",
   
  };
  const tipsStyling = {
    fontSize: { xs: "18px" },
    fontWeight: "900",
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
 
    fontWeight: "200",
    margin: "0 0 20px",
  };
  return (
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
        Top 4 Easy Ways To Grab Personal Loans At Lower Interest Rates
      </Typography>
      <Typography sx={{ ...paraStyling }}>
        Here are four effective tips that you can practise in order to get
        personal <span style={{color:'#404040',fontWeight:'700'}}>loans at low-interest rates</span>:
      </Typography>
      <Typography sx={{ ...tipsStyling }}>
        Tip 1: Get Your Credit Score Soaring
      </Typography>
      <Typography sx={{ ...paraStyling }}>
        In order to determine your creditworthiness, a lender will always check
        your credit score. Hence, if you have a poor credit score, try
        everything possible to boost the score and ensure the lowest personal
        loan interest rates.
      </Typography>
      <Typography sx={{ ...paraStyling }}>
        Here are some of the easiest ways to boost your credit score:
      </Typography>
      <List>
        {tipsData.map((item, index) => (
          <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
            <ListItemText
              primary={
                <React.Fragment>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography component="span" sx={{ ...ListItemTextTitle }}>
                    {item.title}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
      <Typography sx={{ ...tipsStyling }}>
        Tip 2: Weigh up Different Loan Offers
      </Typography>
      <Typography sx={{ ...paraStyling }}>
        In order to get hold of the lowest interest rates, it is essential to do
        thorough market research. Check all the offers extended by different
        lending partners and settle down for the one that offers the most
        flexible terms.
      </Typography>
      <Typography sx={{ ...paraStyling }}>
        In this regard, you can use a personal loan EMI calculator to compare
        different lenders. This online tool works on three variables (principal,
        rate of interest and tenure) and displays the EMI for the values you
        feed in.
      </Typography>
      <Typography sx={{ ...tipsStyling }}>
        Tip 3: Resolve Your Indebtedness
      </Typography>
      <Typography sx={{ ...paraStyling }}>
        Your repayment capacity is among the first things that the bank or NBFC
        will check while sanctioning your loan application. In case you have a
        high debt-to-income ratio, you will be charged a higher rate of
        interest. This is because the risks of defaulting increase for such
        applications.
      </Typography>
      <Typography sx={{ ...paraStyling }}>
        However, if you plan and repay a certain amount of your current debt,
        you can negotiate with the lender for offering a lower interest rate.
        You can start off with this by preparing a list of all the debts you are
        serving currently and noting down their respective rates of interest.
        Then, begin repaying the debt with the highest interest rates.
        Consequently, your overall outstanding debt will also reduce.
      </Typography>
      <Typography sx={{ ...tipsStyling }}>
        Tip 4: Don’t Hesitate to Choose a Different Lender
      </Typography>
      <Typography sx={{ ...paraStyling }}>
        In case repaying the current outstanding debt is not a viable option,
        you can opt for the balance transfer facility. This facility allows you
        to transfer the remaining personal loan amount to a new lender offering
        a lower interest rate or more flexible terms.
      </Typography>
      <Typography sx={{ ...paraStyling }}>
        With all this information in hand, you can now apply for this unsecured
        credit option and get the lowest <span style={{color:'#404040',fontWeight:'700'}}>personal loan interest rates</span>. However,
        you must also make sure to repay the monthly instalments on time. This
        is because missing out on even a single EMI can negatively reduce your
        CIBIL score and lower the chances of getting loan approvals in the long
        run.
      </Typography>
    </Box>
  );
};

export default TopWays;
