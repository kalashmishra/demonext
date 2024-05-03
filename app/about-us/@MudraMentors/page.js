import React from "react";
import Image from "next/image";
import Arif from "@/public/assets/images/arif.png";
import Lavit from "@/public/assets/images/lavit.webp";
import Parul from "@/public/assets/images/parul.webp";
import { Box, Container, Grid, Typography } from "@mui/material";

const MudraMentors = () => {
  const meetStyling = {
    fontSize: "18px",
    fontWeight: "500",
    color: "#404040",
    textAlign: { xs: "center", sm: "left" },
  };

  const nameStyling = {
    fontSize: { xs: "30px", sm: "40px" },
    fontWeight: "900",
    color: "#243771",
    textAlign: { xs: "center", sm: "left" },
    marginTop: "-10px",
  };

  const postStyling = {
    fontWeight: "700",
    fontSize: "20px",
    color: "#243771",
    marginBottom: "20px",
    textAlign: { xs: "center", sm: "left" },
    marginTop: "-10px",
  };

  const paraStyling = {
    fontSize: "18px",
    color: "#404040",
    fontWeight: "500",
    textAlign: { xs: "center", sm: "left" },
  };

  return (
    <Box marginBottom={"50px"}>
      <Container
        maxWidth={"xl"}
        sx={{ padding: { xs: "0 16px", sm: "0 40px", md: "0 7%" } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontWeight: "900",
              fontSize: { xs: "30px", sm: "40px" },
              color: "#243771",
              margin: "15px 0",
            }}
          >
            Mudra Mentors
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px" },
              color: "#404040",
              margin: "0 0 20px",
            }}
          >
            a bunch of solution seekers
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              sm: "row",
            },
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={{ xs: "0", sm: "6" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <Typography
                sx={{
                  ...meetStyling,
                }}
              >
                Meet
              </Typography>
              <Typography
                sx={{
                  ...nameStyling,
                }}
              >
                Arif Khan
              </Typography>
              <Typography
                sx={{
                  ...postStyling,
                }}
              >
                Co-Founder
              </Typography>
              <Typography
                sx={{
                  ...paraStyling,
                }}
              >
                Arif, the co-founder of Credmudra, has been the driving force
                behind the company and its growth. With over a decade of
                experience in revolutionizing lending technology in the USA
                market, Arif brings a wealth of expertise to the fintech
                landscape. He is a staunch advocate for collaboration,
                crisscrossing the globe to foster strategic partnerships and
                expansive networks. Arif's overarching mission is to generate
                value for all stakeholders, positively impacting every life
                touched by his endeavours. His leadership is a driving force
                behind Credmudra's commitment to responsible lending and
                inclusive financial empowerment.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "0", sm: "0 16px", md: "0 30px" },
              }}
            >
              <Image
                alt="
                Arif"
                src={Arif}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "50px",
          }}
          spacing={{ xs: "0", sm: "6" }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "0", sm: "0 16px", md: "0 30px" },
              }}
            >
              <Image
                alt="Lavit"
                src={Lavit}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <Typography
                sx={{
                  ...meetStyling,
                }}
              >
                Meet
              </Typography>
              <Typography
                sx={{
                  ...nameStyling,
                }}
              >
                Lavit Dighe
              </Typography>
              <Typography
                sx={{
                  ...postStyling,
                }}
              >
                Co-Founder And CEO
              </Typography>
              <Typography
                sx={{
                  ...paraStyling,
                }}
              >
                With profound experience in fintech, Lavit is well-versed in the
                intricate world of financial products. His extensive industry
                connections establish him as a key figure within the lending
                community. Lavit excels in high-stakes financial scenarios,
                blending strategic acumen with a personable touch. As the
                driving force behind Credmudra, Lavit ensures all financial
                aspirations are entrusted to capable hands.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              sm: "row",
            },
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "50px",
          }}
          spacing={{ xs: "0", sm: "6" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <Typography
                sx={{
                  ...meetStyling,
                }}
              >
                Meet
              </Typography>
              <Typography
                sx={{
                  ...nameStyling,
                }}
              >
                Parul Shrivastava
              </Typography>
              <Typography
                sx={{
                  ...postStyling,
                }}
              >
                Co-Founder And CMO
              </Typography>
              <Typography
                sx={{
                  ...paraStyling,
                }}
              >
                A seasoned marketing professional with over fifteen years of
                diverse expertise in brand and marketing. With a foundation in
                engineering from JIIT, Noida, and a PGDM from SIMSR, Mumbai, she
                brings a unique blend of technical, analytical, and strategic
                marketing acumen. With countless triumphant GMT projects, she
                has crafted unparalleled customer experiences, an undeniable
                testament to her proven brilliance for ensuring foolproof
                perfection in delivering unmatched consumer delight.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "0", sm: "0 16px", md: "0 30px" },
              }}
            >
              <Image
                alt="parul"
                src={Parul}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MudraMentors;
