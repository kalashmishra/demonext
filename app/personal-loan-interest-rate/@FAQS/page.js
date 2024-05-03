"use client"
import { FiberManualRecord } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQS = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#243771",
    fontSize: { xs: "20px", sm: "22px" },
   
    fontWeight: "700",
  };
  const AccPara = {
    color: "#333333",
   
    fontSize: { xs: "16px" },
  };

  const CheckCircle = {
    marginTop: "5px",
    color: "#243771",
    marginRight: "10px",
    fontWeight: "400",
  };
  return (
    <Box sx={{ marginTop: {xs:'20%',sm:'10%'} }}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "26px", sm: "26px", md: "32px" },
            fontWeight: "900",
          lineHeight:'1.1',
            color: "#243771",
           
          }}
        >
          FAQs On Personal Loan
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          borderRadius: "10px",
          marginTop:'20px'
        
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              backgroundColor: "#FCEFB8",
              marginTop: "20px",
              boxShadow: "0 3px 6px rgba(0,0,0,.161)",
              borderRadius: "10px",
              border: "none !important",
            }}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <FiberManualRecord sx={{ ...CheckCircle }} />

              <Typography sx={{ ...AccHeading }}>
                1. How much is the average rate of interest on personal loans?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...AccPara }}>
                Usually, most banks and NBFCs offer personal loans at an
                interest rate ranging from 10.50% to 24.00% per annum. However,
                this might vary with the various factors that affect the
                interest rates. In order to get the actual personal loan
                interest rate, you should contact with your lender and enquire
                about the same with them.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            border={"none"}
            sx={{
              backgroundColor: "#FCEFB8",
              marginTop: "20px",
              boxShadow: "0 3px 6px rgba(0,0,0,.161)",
              borderRadius: "10px",
              "&::before": {
                backgroundColor: "rgb(0 0 0 / 0%)",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <FiberManualRecord sx={{ ...CheckCircle }} />

              <Typography sx={{ ...AccHeading }}>
                2. What happens if I fail to repay one EMI for a personal loan?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...AccPara }}>
                Even the slightest delay in repaying the monthly instalment will
                negatively affect your credit score. This will indicate poor
                repayment behaviour, reducing the chances of loan approvals in
                the long run. In order to reduce these complications, it is best
                to set a reminder and keep the money ready to pay before the EMI
                payment date.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              backgroundColor: "#FCEFB8",
              marginTop: "20px",
              boxShadow: "0 3px 6px rgba(0,0,0,.161)",
              borderRadius: "10px",
              "&::before": {
                backgroundColor: "rgb(0 0 0 / 0%)",
              },
            }}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <FiberManualRecord sx={{ ...CheckCircle }} />

              <Typography sx={{ ...AccHeading }}>
                3. Which is better, fixed or floating personal loan interest
                rate?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...AccPara }}>
                The rate of interest remains fixed throughout the repayment
                tenure in case of a fixed rate. On the other hand, the rate of
                interest keeps changing with the fluctuations in the market in
                the case of a floating interest rate. Willing borrowers should
                keep this thing in mind and choose the option that best suits
                their needs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQS;
