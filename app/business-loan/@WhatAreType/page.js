import { Box, Grid, Hidden, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import what_are_bl_2 from "@/public/assets/images/what_are_bl_2.webp";
import Image from "next/image";

const WhatAreType = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
  };
  return (
    <Box>
      <Grid container bgcolor="#FCEFD8">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: { xs: "20px 32px 20px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { md: "80%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "28px", lg: "38px" },
                fontWeight: "600",
                color: "#243771",
                margin: { xs: "0px 0px 12px", lg: "0px 0px 28px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.1",
              }}
            >
              What Are The Types Of Business Loans?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", lg: "20px" },
                fontWeight: "400",

                color: "#404040",
                margin: { xs: "0px 0px 24px", lg: "0px 0px 30px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.5",
              }}
            >
              Based on your requirement, you can opt for any of the following
              types of business loans:
            </Typography>
            <List>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "600",
                  }}
                >
                  Term loan
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "600",
                  }}
                >
                  Working capital loan
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "600",
                  }}
                >
                  Bill or invoice discounting
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "600",
                  }}
                >
                  Letter of credit
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "600",
                  }}
                >
                  Point-of-Sale loan
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "600",
                  }}
                >
                  Overdraft
                </Typography>
              </ListItem>
            </List>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <Link href="/business-loan/get-registered">
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
            padding: { xs: "16px 32px 32px", sm: "0" },
            display: "flex",
            alignItems: { xs: "center" },
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Hidden smDown>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: { sm: "20% 4% 10%", md: "10% 4% 10% 0%", lg: "0% 0%" },
                width: "100%",
              }}
            >
              <Image
                src={what_are_bl_2}
                alt="Types Of Business Loans"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatAreType;
