"use client"
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import pldc_3acc from "@/public/assets/images/pldc_3acc.webp"

import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import { AccordionItem } from "@/app/components/AccordianItem";
import Image from "next/image";


const DebtConsolidationVsBalance = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "20px 0px 50px" }}>
        <Grid container sx={{ padding: { xs: "20px", md: "48px" } }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: { xl: "95%" } }}>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "24px", sm: "32px" },
                  color: "#243771",
                  fontWeight: "900",
                  lineHeight: { xs: "1.3", md: "1.1", lg: "1.5" },
                  margin: "0px 0px 18px",
                }}
              >
                Debt Consolidation Vs. Balance Transfer - Which Is Your Safest
                Bet?
              </Typography>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "16px" },
                  color: "#404040",
                  fontWeight: "300",
                  lineHeight: "1.3",
                  margin: "0px 0px 24px",
                }}
              >
                Although both methods are effective in debt management, you must
                consider all the features of these credit facilities before
                opting for one.
              </Typography>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "16px" },
                  color: "#404040",
                  fontWeight: "300",
                  lineHeight: "1.3",
                  margin: "0px 0px 24px",
                }}
              >
                Here are a few points you should take into account:
              </Typography>
              <AccordionItem
                   checkCircle="black"
                   headingColor="#F7D64A" 
                   contentColor="black"
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    heading="  Evaluate the monetary benefit"
                    content="    Whether you are opting for a balance transfer or a debt
                    consolidation, you must calculate the monetary benefits that
                    you can achieve. The best way to evaluate this is by
                    weighing the amount of money you will save by opting for
                    either of these options. Based on this calculation, choose
                    the facility that has a more saving scope."
                  />
                     <AccordionItem
                   checkCircle="black"
                   headingColor="#F7D64A" 
                   contentColor="black"
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    heading="  Know the costs involved"
                    content="   Even if the interest rates are low, you must take into
                    account several additional costs, such as processing charges
                    for a balance transfer or debt consolidation loan,
                    foreclosure charges, documentation charges, etc. Consider
                    these charges as they add to the total costs involved and
                    make an informed decision accordingly."
                  />
                     <AccordionItem
                   checkCircle="black"
                   headingColor="#F7D64A" 
                   contentColor="black"
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    heading="  Read all terms and conditions carefully"
                    content="  Both balance transfer credits and debt consolidation loans
                    are new loans. The terms and conditions for both will be
                    fresh yet different. You must read all the points in the
                    terms and conditions carefully to avoid unnecessary hassles
                    in the long run."
                  />
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "16px" },
                  color: "#404040",
                  fontWeight: "300",
                  lineHeight: "1.3",
                  margin: "0px 0px 24px",
                }}
              >
                With all this information in hand, we hope you can make an
                informed decision on whether to apply for a debt consolidation
                loan to reduce your financial burden.
              </Typography>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "16px" },
                  color: "#404040",
                  fontWeight: "300",
                  lineHeight: "1.3",
                  margin: "0px 0px 24px",
                }}
              >
                With Credmudra, you can get the required funds directly into
                your bank account within the shortest waiting period.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
                  justifyContent: { xs: "center", sm: "left" },
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
            sm={6}
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "center" },
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Box>
              <Image
                src={pldc_3acc}
                alt="Debt Consolidation Vs. Balance Transfer"
                style={{ width: "90%",height:'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DebtConsolidationVsBalance;
