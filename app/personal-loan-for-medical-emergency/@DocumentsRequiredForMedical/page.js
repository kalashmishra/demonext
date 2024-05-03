import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import plme_d_1 from "@/public/assets/images/medical/plme_d_1.png";
import plme_d_2 from "@/public/assets/images/medical/plme_d_2.png";
import plme_d_3 from "@/public/assets/images/medical/plme_d_3.png";
import plme_d_4 from "@/public/assets/images/medical/plme_d_4.png";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";
import Image from "next/image";

const DocumentsRequiredForMedical = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",

    position: "absolute",
    top: "10px",
    left: "0",
  };
  const ListItemStyling = {
    color: "#fff",

    fontSize: { xs: "16px" },

    textAlign: { xs: "center", sm: "left" },
    display: "flex",
    justifyContent: { xs: "center", sm: "flex-start" },
  };
  const ListInfo = [
    {
      imgSrc: plme_d_1,
      label: "Identity proof",
      title: "1) Proof of Identity",
      items: [
        "Passport",
        "Voter ID",
        "Aadhaar Card",
        "PAN Card",
        "Passport-sized photograph",
      ],
    },
    {
      imgSrc: plme_d_2,
      label: "Address proof",
      title: "2) Proof of Address",
      items: [
        "Voter ID",
        "Driver’s licence",
        "PAN card",
        "Passport",
        "Aadhaar card",
        "Ration card",
        "Electricity/Telephone /Utility bills",
      ],
    },
    {
      imgSrc: plme_d_3,
      label: "Proof of Income",
      title: "3) Proof of Income",
      items: [
        "Past 3 months’ salary slips",
        "Income Tax Return documents",
        "Form 16",
        "Recent bank statements",
      ],
    },
    {
      imgSrc: plme_d_4,
      label: "Proof of Employment",
      title: "4) Proof of Employment",
      items: [
        "Employer issued identity card",
        "Appointment letter from employer",
        "Employment certificate",
      ],
    },
  ];
  return (
    <Box bgcolor="#243771">
      <Container maxWidth={"xl"} sx={{ padding: "30px 0px 50px" }}>
        <Grid
          container
          alignItems="center"
          sx={{
            padding: { xs: "20px", md: "48px 48px 0" },
          }}
        >
          <Grid
            item
            md={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "50px",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "55%", md: "70%" },
              }}
            >
              <Typography
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: { xs: "25px", sm: "32px" },

                  color: "#f7d64a",
                  fontWeight: "900",
                  lineHeight: "1.1",
                  margin: { xs: "0px 0px 8px" },
                }}
              >
                Documents Required For A Medical Loan
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: { xs: "16px" },

                  color: "#fff",
                  marginTop: { xs: "30px" },
                  lineHeight: "1.5",
                  margin: { xs: "0px 0px 24px" },
                }}
              >
                The documents required to avail of a medical personal loan are
                provided below:
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                display: "flex",
                alignItems: { xs: "center" },
                justifyContent: { xs: "center" },
                margin: "0px 0px 20px",
              }}
            >
              <Link href="/get-registered/user-number">
                <GetMatchedButton />
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Grid container sx={{ padding: { xs: "0px", md: "48px 48px 0" } }}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              {ListInfo.map((doc, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "100%", sm: "48%" },
                    display: "flex",
                    alignItems: { xs: "center", sm: "flex-start" },
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Image
                      src={doc.imgSrc}
                      alt={doc.label}
                      style={{
                        margin: "0px 0px 20px",
                        width: "85px",
                        height: "85px",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "800",
                      fontSize: { xs: "18px" },

                      textAlign: { xs: "center", sm: "left" },
                      margin: "0px 0px 8px",
                    }}
                  >
                    {doc.title}
                  </Typography>
                  <Box>
                    <List
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {doc.items.map((item, idx) => (
                        <ListItem sx={{ ...ListItemStyling }}>
                          {" "}
                          <FiberManualRecord
                            sx={{
                              ...CircleIcon,
                              display: { xs: "none", sm: "block" },
                            }}
                          />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DocumentsRequiredForMedical;
