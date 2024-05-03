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

const FAQEligibility = () => {
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
    marginTop: "6px",
    color: "#243771",
    marginRight: "10px",
    fontWeight: "400",
  };
  return (
    <Box sx={{marginBottom:{md:'40px'}}}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "26px", md: "32px" },
            fontWeight: "900",
            lineHeight:'normal',
            color: "#243771",
            margin: "0px 0px 30px",
          }}
        >
          FAQs On Personal Loan
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
        
          borderRadius: "10px",
        
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
                How do we select the best lender for you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...AccPara }}>
                To find a fitting lender all you have to do is fill up the
                personal loan application form on our website stating your
                requirements. Accordingly, we match you with lenders whose
                offerings are congruent with your needs. Once done, you will
                have to simply fill up some last-minute information and get
                instant disbursal of the loan amount.
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
                Can you get a personal loan without income proof?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...AccPara }}>
                Yes, there are several lenders that approve your personal loan
                application even if you do not have income proof. For this, you
                can highlight additional income sources, maintain a high CIBIL
                score and even request someone to be a co-applicant or
                guarantor. Additionally, you should also maintain a good
                relationship with the lender to increase credit approval
                chances.
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
                How can you use personal loan money?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...AccPara }}>
                There is no end-use restriction on the money that you receive
                from a personal loan. You can use these funds to plan your
                wedding, pay for expensive treatment and costly medicines, go
                for a foreign vacation with your family, pay the education fees
                for your kids, and so on. So, are you ready to apply for a
                personal loan?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
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
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <FiberManualRecord sx={{ ...CheckCircle }} />

              <Typography sx={{ ...AccHeading }}>
                How can I check my eligibility for a personal loan?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...AccPara }}>
                You can simply use a personal loan eligibility calculator to
                determine the credit amount that you are eligible for. To use
                this calculator, you can simply navigate to this calculator and
                input the necessary details. Once done, you can instantly view
                the loan amount that you can apply for. These calculators are
                easy to use and provide instant and accurate results.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
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
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <FiberManualRecord sx={{ ...CheckCircle }} />

              <Typography sx={{ ...AccHeading }}>
                What are the essential documents required for a personal loan?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...AccPara }}>
                Some of the important documents that you will need while
                applying for a personal loan if you are a salaried individual
                are KYC documents, an employee ID card, the last three months’
                bank account statement and the last three months’ salary slips.
                In case you are a self-employed individual, you will have to
                submit proof of business in addition to other documents.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQEligibility;
