import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
// import Image from "next/image";
// import Path199 from "../../../../public/assets/images/Path199.png";

const AboutTeam = () => {
  const subHeadingStyling = {
    fontSize: "18px",
    color: "#10162c",
    margin: "0 0 20px",
  };
  return (
    <Box
      sx={{
        paddingBottom: "3%",
        marginTop: { xs: "55px", sm: "0px", md: "50px" },
      }}
    >
      <Container
        maxWidth={"xl"}
        sx={{ padding: { xs: "0 16px", sm: "0 40px", md: "0 7%" } }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "column", md: "row" },
          }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                marginTop: { xs: "40px", sm: "80px" },
              }}
            >
              {/* <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "7%", sm: "15%", md: "20%" },
                    right: { xs: "3%", sm: "10%", md: "15%" },
                    transform: "rotate(25deg)",
                    width: "100px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    alt="icon"
                    src={Path199}
                    style={{
                      width: "100px",
                    }}
                  />
                </Box> */}
              <Typography
                sx={{
                  fontWeight: "900",
                  fontSize: { xs: "30px", md: "40px" },
                  color: { xs: "#10162C", sm: "#243771" },
                  margin: "20px 0",
                }}
              >
                About The Team !
              </Typography>
              <Typography
                sx={{
                  ...subHeadingStyling,
                }}
              >
                We were once dreamers who took actions to fulfil our
                aspirations.
              </Typography>
              <Typography
                sx={{
                  ...subHeadingStyling,
                }}
              >
                We created CredMudra with the conviction that action is the key
                to achieving financial freedom and success. The same way we
                created Team Credmudra and named it Mudra Mentors.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutTeam;
