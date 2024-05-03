import GetMatchedButton from "@/app/components/GetMatchedButton";
import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const WhenShouldYouTake = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "20px",
    position: "absolute",
    top: "15px",
    left: "0",
  };

  const TypographySubHeadings = {
    color: "#404040",
    fontWeight: "900",
    fontSize: { xs: "16px", md: "20px" },
  };

  const TypographyPara = {
    color: "#404040",
    fontWeight: "300",
    fontSize: { xs: "16px", md: "20px" },
    marginLeft: "10px",
  };
  return (
    <>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "20px 0px 50px" }}>
          <Grid container sx={{ padding: { xs: "16px", md: "32px" } }}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={7}
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start" },
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: { sm: "100%", md: "85%", lg: "90%", xl: "100%" },
                }}
              >
                <List>
                  <ListItem sx={{ position: "relative" }}>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography
                      sx={{
                        ...TypographyPara,
                      }}
                    >
                      <Typography
                        component={"span"}
                        sx={{ ...TypographySubHeadings }}
                      >
                        Medical Emergency:
                      </Typography>{" "}
                      Medical emergency is uncertain in nature and you may
                      require a small to large credit within a short span.
                      Taking a personal loan from Credmudra will help you face
                      the challenge boldly. With us, you can get a loan credited
                      to your account quickly. It can even be on the same day.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ position: "relative" }}>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography
                      sx={{
                        ...TypographyPara,
                      }}
                    >
                      <Typography
                        component={"span"}
                        sx={{ ...TypographySubHeadings }}
                      >
                        Debt Consolidations:
                      </Typography>{" "}
                      If you have multiple loans, you need to remember the
                      scheduled date of all your loan instalments and pay them
                      separately. Now, if you go for debt consolidation, all
                      your existing obligations will be merged into one. So, you
                      can repay your outstanding debts by paying one instalment.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ position: "relative" }}>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography
                      sx={{
                        ...TypographyPara,
                      }}
                    >
                      <Typography
                        component={"span"}
                        sx={{ ...TypographySubHeadings }}
                      >
                        Educational Expenses:
                      </Typography>{" "}
                      You can take a personal loan to get immediate credit and
                      pay for the tuition fees of your child. This way, you will
                      not have to wait longer to arrange the necessary fund. You
                      can easily repay the credit with small instalments
                      starting from the next month.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ position: "relative" }}>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography
                      sx={{
                        ...TypographyPara,
                      }}
                    >
                      <Typography
                        component={"span"}
                        sx={{ ...TypographySubHeadings }}
                      >
                        Family Festivals:
                      </Typography>{" "}
                      To plan family occasions or events like weddings, you may
                      need to have a lump sum credit at your disposal. You can
                      take a personal loan if you do not have the required
                      amount during such events. As a result, you will not have
                      to compromise with your budget.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ position: "relative" }}>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography
                      sx={{
                        ...TypographyPara,
                      }}
                    >
                      <Typography
                        component={"span"}
                        sx={{ ...TypographySubHeadings }}
                      >
                        Big Purchases:
                      </Typography>{" "}
                      There are some big and luxurious expenses, like the
                      purchase of a cosy flat or vehicle, which you have wanted
                      to realise for so long. You can take a personal loan to
                      meet those life goals easily. You will get a lump sum
                      end-usage-free credit to bear any expenses you want.
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={5}
              sx={{
                display: "flex",
                alignItems: { sm: "flex-end" },
                justifyContent: { sm: "center" },
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: { sm: "90%", xl: "70%" },
                  textAlign: { xs: "center", sm: "left" },

                  marginTop: { xs: "20px", sm: "0px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "24px", sm: "32px", md: "40px" },
                    marginBottom: "23px",
                    fontWeight: "900",
                    color: "#243771",
                    lineHeight: "normal",
                  }}
                >
                  When Should You Take A Personal Loan?
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    marginBottom: "23px",
                  }}
                >
                  Here are some circumstances under which you can consider
                  taking a personal loan:
                </Typography>
                <Box
                  sx={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: { xs: "center" },
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <Link href="/get-registered/user-number">
                    <GetMatchedButton />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WhenShouldYouTake;
