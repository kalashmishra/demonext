"use client"
import {

  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import pl_tw_1 from "@/public/assets/images/pl_tw_1.webp"
import Image from "next/image";
import { AccordionItem } from "@/app/components/AccordianItem";
const KeyFeatures = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

 

  return (
    <Box>
      <Grid container bgcolor="#FCEFD8">
        <Grid
          item
          xs={12}
          sm={7}
          sx={{
            padding: { xs: "20px", md: "48px" },
            display: "flex",
            alignItems: { xs: "center" },
            justifyContent: { xs: "center" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { sm: "80%", xl: "60%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "28px", lg: "38px" },
                fontWeight: "900",
                
                color: "#243771",
                margin: { xs: "0px 0px 12px", lg: "0px 0px 28px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.1",
              }}
            >
              4 Key Features Of Two-Wheeler Personal Loans To Consider
            </Typography>
            <AccordionItem
                    checkCircle="black"
                 headingColor="#243771" 
                 contentColor="#222"
                     expanded={expanded === "panel1"}
                     onChange={handleChange("panel1")}
                    heading="  Attractive Interests"
                    content="  Interest rates can be as low as possible per annum provided
                    you select the right vendor. On top of that, you do not need
                    to wait for long to get the approval. Also, minimal paperwork
                    has to be done."
                  />
                    <AccordionItem
                    checkCircle="black"
                 headingColor="#243771" 
                 contentColor="#222"
                     expanded={expanded === "panel2"}
                     onChange={handleChange("panel2")}
                    heading=" 100% Financing is Available"
                    content="  This facility is made available for those who may be finding
                    it difficult to pay a certain amount of the on-road price
                    upfront. It not only helps you purchase your dream scooty or
                    bike but also assists in keeping your savings intact. These
                    services are given to anyone as long as they are meeting the
                    personal loan eligibility credentials."
                  />
                    <AccordionItem
                    checkCircle="black"
                 headingColor="#243771" 
                 contentColor="#222"
                     expanded={expanded === "panel3"}
                     onChange={handleChange("panel3")}
                    heading=" Completely Digital Process"
                    content="    Now you do not have to wait in long queues like earlier
                    applicants. Starting from loan verification to disbursal
                    everything happens instantly, on the go. This increased role
                    of digitisation has made the whole financing model more
                    accessible for all."
                  />
                    <AccordionItem
                    checkCircle="black"
                 headingColor="#243771" 
                 contentColor="#222"
                     expanded={expanded === "panel4"}
                     onChange={handleChange("panel4")}
                    heading=" Low Processing Fee"
                    content="  Processing fees for these loans can be as low as 0.5% for
                    customers eligible for pre-approved offers. All they have to
                    do is perform a few clicks to provide their consent of
                    availing the loan offer."
                  />
        
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <Link
               
                href="/get-registered/user-number"
              >
                <GetMatchedButton />
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            padding: { xs: "16px 32px 32px", sm: "0" },
            display: "flex",
            alignItems: { xs: "center", xl: "flex-start" },
            justifyContent: { xs: "center", xl: "flex-start" },
          }}
        >
          <Box>
            <Image
              src={pl_tw_1}
              alt="Features Of Two-Wheeler Personal Loans"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default KeyFeatures;
