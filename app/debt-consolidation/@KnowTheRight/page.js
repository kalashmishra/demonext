import GetMatchedButton from "@/app/components/GetMatchedButton";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const KnowTheRight = () => {
  const BackgroundImage = {
    backgroundColor: "#243771",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  return (
    <Box sx={{ ...BackgroundImage }}>
      <Container maxWidth={"xl"} sx={{ padding: "40px 0px 50px" }}>
        <Box
          sx={{
            padding: { xs: "20px", md: "48px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { xs: "24px", sm: "36px" },
              color: "#f7d64a",
              fontWeight: "900",
              lineHeight: "1.3",
              margin: {
                xs: "0px 0px 24px",
                md: "0px 118px 30px",
                lg: "0px 300px 30px",
              },
            }}
          >
            Know The Right Way To Use A Debt Consolidation
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { xs: "17px", md: "21px" },
              color: "#FFFFFF",

              lineHeight: "1.5",
              margin: "0px 0px 24px",
            }}
          >
            Once you apply for a debt consolidation loan, you must ensure the
            existing debt does not come back after you have paid them off. The
            best way to avoid this circumstance is by not opting for any credit
            while you are repaying the existing debts. This is because fresh
            debts during this period will increase your financial burden, making
            it hard for you to tackle the debt load.
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { xs: "17px", md: "21px" },
              color: "#ffffff",

              lineHeight: "1.5",
              margin: "0px 0px 24px",
            }}
          >
            For instance, if you have accumulated debt from your credit card, it
            is best to stop using the credit card completely. You can use a
            debit card to manage your finances. Even after repaying the existing
            debts, make it a thumb rule to only use a credit card for emergency
            situations.
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { xs: "17px", md: "21px" },
              color: "#ffffff",

              lineHeight: "1.5",
              margin: "0px 0px 24px",
            }}
          >
            Further, once you have paid off all the existing debts, inculcate
            some healthy money habits that will save you from debt burden in the
            future. Budgeting is an effective way to better financial
            management. By making a proper budget, you can evaluate every
            expense and organize your payments and bills throughout the month.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "center" },
            }}
          >
            <Link
             
              href="/get-registered/user-number"
            >
              <GetMatchedButton />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default KnowTheRight;
