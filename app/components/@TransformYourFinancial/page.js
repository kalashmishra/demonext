import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import user_engagement from "@/public/assets/images/user-engagement.png"
import user_engagementa from "@/public/assets/images/user-engagementa.png"
import user_engagements from "@/public/assets/images/user-engagements.png"
import Image from "next/image";
const TransformYourFinancial = ({text}) => {
  return (
    <>
      <Box bgcolor="#FCEFB8">
        <Container maxWidth={"xl"} sx={{ padding: "0px 0px 50px" }}>
          <Box
            sx={{
              padding: { xs: "16px", md: "32px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "36px", md: "40px" },
                fontWeight: "900",
                margin: "25px 0px",
                textAlign: "center",
                color: "#243771",
                lineHeight: "1.3",
              }}
            >
            { text}
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{
              padding: { xs: "10px", md: "32px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: { xs: "150px", sm: "200px", xl: "150px" },
                  position: "relative",
                  backgroundColor: "#24356C",
                  borderRadius: "10px",
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: "900",
                      margin: "30px 0px 8px",
                    }}
                  >
                    Mudra Mentors+
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      margin: "0px 0px 8px",
                      width: "65%",
                    }}
                  >
                    Engage with an extended community of Financial Advisors.
                  </Typography>
                </CardContent>
                <Image
                  
                  alt="Mudra Mentors"
                  src={
                    user_engagement
                  }
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "10px",
                    width: "66px",
                    height:'66px'
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: { xs: "150px", sm: "200px", xl: "150px" },
                  position: "relative",
                  backgroundColor: "#24356C",
                  borderRadius: "10px",
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: "900",
                      margin: "30px 0px 8px",
                    }}
                  >
                    Resources
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      margin: "0px 0px 8px",
                      width: "65%",
                    }}
                  >
                    Know the moves that lead to Financial Freedom.
                  </Typography>
                </CardContent>
                <Image
                  
                  alt="Mudra Mentors"
                  src={
                    user_engagementa
                  }
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "10px",
                    width: "66px",
                    height:'66px'
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: { xs: "150px", sm: "200px", xl: "150px" },
                  position: "relative",
                  backgroundColor: "#24356C",
                  borderRadius: "10px",
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: "900",
                      margin: "30px 0px 8px",
                    }}
                  >
                    Seek Solutions?
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      margin: "0px 0px 8px",
                      width: "65%",
                    }}
                  >
                    Let’s connect at Support@Credmudra.com
                  </Typography>
                </CardContent>
                <Image
                  
                  alt="Mudra Mentors"
                  src={
                    user_engagements
                  }
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "10px",
                    width: "66px",
                    height:'66px'
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TransformYourFinancial;
