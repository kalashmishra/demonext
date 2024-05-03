import { Box, Container, Grid, Hidden, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import girlpath from "@/public/assets/images/girl-path.webp";
import Image from "next/image";
import GetMatchedButton from "@/app/components/GetMatchedButton";
const ResponsibleCredit = () => {
  return (
    <Box sx={{ marginTop: { xs: "15%", md: "0" } }}>
      <Container maxWidth="xl" sx={{ paddingLeft: { md: "7%" } }}>
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
            md={6}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                lg: "flex-start",
                xl: "flex-end",
              },
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#243771",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "24px", xl: "50px" },          
                  fontWeight: "900",
                  margin: "0 0 25px",
                  lineHeight: "1.1",
                }}
              >
                Responsible Credit Redefined:
              </Typography>
              <Typography
                sx={{
                  color: "#243771",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: "18px",
                  fontWeight: "200",
                  margin: "0 0 25px",
                  maxWidth: "500px",
                  
                }}
              >
                At Credmudra, responsible credit means more than just borrowing.
                We're your advocates, understanding your needs and matching you
                with the right financial products. Our commitment spans from
                financial literacy to timely issue resolution, ensuring you
                always have Link trusted partner by your side.
              </Typography>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Link href="/get-registered/user-number">
                  <GetMatchedButton />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <Hidden smDown>
              <Box
                sx={{
                  paddingTop: { xs: "15%", sm: "5%", md: "0" },
                }}
              >
                <Image
                  style={{ width: "100%" }}
                  src={girlpath}
                  alt="match you with the right financial products."
                />
              </Box>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResponsibleCredit;
