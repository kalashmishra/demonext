import GetMatchedButton from "@/app/components/GetMatchedButton";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import pldc_good from "@/public/assets/images/pldc_good.jpg"
import Image from "next/image";
const WillConsolidatingDebt = () => {
  return (
    <Box>
      <Grid container bgcolor="#FCEFD8">
        <Grid
          item
          xs={12}
          sm={6}
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
              width: { sm: "80%", xl: "80%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "25px", lg: "32px", xl: "38px" },
                fontWeight: "900",

                color: "#243771",
                margin: { xs: "0px 0px 12px", lg: "0px 0px 28px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.1",
              }}
            >
              Will Consolidating Debts With A Personal Loan Affect Your CIBIL
              Score?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", lg: "20px" },

                color: "#404040",
                margin: { xs: "0px 0px 24px", lg: "0px 0px 30px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.5",
              }}
            >
              If you consolidate your ongoing debt into a new loan, the
              low-interest credit can hurt your CIBIL score in the short term.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", lg: "20px" },

                color: "#404040",
                margin: { xs: "0px 0px 24px", lg: "0px 0px 30px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.6",
              }}
            >
              Nevertheless, if you continue making regular payments toward your
              debt consolidation loan, you can improve your CIBIL score fast and
              build a decent score that will help you get quick loan approvals
              in the long run. Timely EMI payments will help you maintain an
              excellent credit history.
            </Typography>
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
          sm={6}
          sx={{
            padding: { xs: "16px", sm: "0" },
            display: "flex",
            alignItems: { xs: "center", xl: "flex-end" },
            justifyContent: { xs: "center", xl: "flex-end" },
          }}
        >
          <Hidden smDown>
            <Box>
              <Image
                src={pldc_good}
                alt="Consolidating Debts Affect Your CIBIL Score"
                style={{ width: "100%",height:'auto' }}
              />
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WillConsolidatingDebt;
