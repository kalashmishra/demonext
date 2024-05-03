import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { FiberManualRecord } from "@mui/icons-material";

const PlDescriptionPage = () => {
  const BulletPoints = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "8px",
  };
  const ListStyling = {
    padding: "0px",
    fontSize: { xs: "16px", sm: "12px" },
    margin: { xs: "0px 0px 5px" },
    fontFamily: "Inter,sans-serif",
    color: "#404040",
  };
  const ParaStyling = {
    padding: "0px",
    fontSize: { xs: "12px" },
    fontFamily: "Inter,sans-serif",
    color: "#404040",
    margin: "0 0 18px",
  };

  return (
    <Box>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} sx={{ padding: { xs: "5px", md: "48px" } }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "700",
                  margin: "0 0 20px",
                  color: "#243771",
                }}
              >
                Features and Benefits of Personal Loans:
              </Typography>
              <List>
                <ListItem sx={{ ...ListStyling }}>
                  <FiberManualRecord sx={{ ...BulletPoints }} />
                  <Typography sx={{ ...ListStyling }}>
                    Personal loans come with no restrictions on how the funds
                    are used.
                  </Typography>
                </ListItem>
                <ListItem sx={{ ...ListStyling }}>
                  <FiberManualRecord sx={{ ...BulletPoints }} />
                  <Typography sx={{ ...ListStyling }}>
                    The loan amount can go up to Rs. 40 lakh, or even higher
                    based on the discretion of the lenders.
                  </Typography>
                </ListItem>
                <ListItem sx={{ ...ListStyling }}>
                  <FiberManualRecord sx={{ ...BulletPoints }} />
                  <Typography sx={{ ...ListStyling }} >
                    Repayment tenure ranges from a minimum of 3 months to a
                    maximum of 5 years, banks/NBFCs offering longer durations.
                  </Typography>
                </ListItem>
                <ListItem sx={{ ...ListStyling }}>
                  <FiberManualRecord sx={{ ...BulletPoints }} />
                  <Typography sx={{ ...ListStyling }} >
                    Minimal documentation is required to apply for a personal
                    loan.
                  </Typography>
                </ListItem>
                <ListItem sx={{ ...ListStyling }}>
                  <FiberManualRecord sx={{ ...BulletPoints }} />
                  <Typography sx={{ ...ListStyling }} >
                    Quick disbursals ensure fast access to the funds.
                  </Typography>
                </ListItem>
                <ListItem sx={{ ...ListStyling }}>
                  <FiberManualRecord sx={{ ...BulletPoints }} />
                  <Typography sx={{ ...ListStyling }} >
                    Individuals with excellent credit profiles may qualify for
                    pre-approved or pre-qualified personal loans, which come
                    with instant disbursal.
                  </Typography>
                </ListItem>
              </List>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "700",
                  margin: "0 0 10px",
                  color: "#243771",
                }}
              >
                Eligibility Criteria for Personal Loans:
              </Typography>
              <List>
                <ListItem sx={{ ...ListStyling }}>
                  <FiberManualRecord sx={{ ...BulletPoints }} />
                  <Typography sx={{ ...ListStyling }}>
                    Age: 18 - 60 years
                  </Typography>
                </ListItem>
                <ListItem sx={{ ...ListStyling }}>
                  <FiberManualRecord sx={{ ...BulletPoints }} />
                  <Typography sx={{ ...ListStyling }} >
                    Income: Minimum Rs 9,000/month for salaried applicants
                  </Typography>
                </ListItem>
                <ListItem sx={{ ...ListStyling }}>
                  <FiberManualRecord sx={{ ...BulletPoints }} />
                  <Typography sx={{ ...ListStyling }} >
                    Credit Score: Preferably 750 and above as having higher
                    credit scores increase the chances of your loan approval at
                    lower interest rates
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
                flexDirection: "column",
                marginLeft: { sm: "10%", xl: "10%" },
              }}
            >
              <Typography sx={{ ...ParaStyling }}>
                Credmudra isn't a lender itself but connects borrowers with
                different lending partners. These partners offer personal loans
                with varying APRs, typically ranging from 11.29% to 35%. The
                actual rates may depend on the borrower's financial situation
                and loan requirements.
              </Typography>
              <Typography sx={{ ...ParaStyling }}>
                Loan terms usually range from a few weeks to a maximum of 60
                months (5 years), but they can vary between lenders. It's
                important for borrowers to carefully review the loan agreement
                provided by the lender before accepting any offers. This
                agreement includes the final APR, fees, and specific terms and
                conditions, ensuring borrowers understand their financial
                obligations.
              </Typography>
              <Typography sx={{ ...ParaStyling }}>
                Assume you have availed a personal loan of ₹5,00,000 lakhs @
                11.50% p.a. with a repayment tenure of 5 years. The processing
                fee charged for this loan is 1.5% of the loan amount, i.e.
                ₹7,500. Therefore, the APR for your personal loan will be
                12.16%. The EMI will be ₹10,996.
              </Typography>
              <Typography sx={{ ...ParaStyling }}>
                Principal Amount: ₹5,00,000
              </Typography>
              <Typography sx={{ ...ParaStyling }}>
                Interest Charges (@11.5%): ₹1,59,778
              </Typography>
              <Typography sx={{ ...ParaStyling }}>
                Loan Processing Fees (@1.5%): ₹7,500
              </Typography>
              <Typography sx={{ ...ParaStyling }}>
                EMI per month: ₹ 10,996
              </Typography>
              <Typography sx={{ ...ParaStyling }}>
                Total Amount paid after 5 Years: ₹ 6,67,278
              </Typography>
              <Typography sx={{ ...ParaStyling }}>
                *Interest rate and processing fees varies as per your product
                depending on the lender's policy.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlDescriptionPage;
