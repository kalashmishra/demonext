import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import plme_f_2 from "@/public/assets/images/medical/plme_f_2.png";
import plme_f_1 from "@/public/assets/images/medical/plme_f_1.png";
import plme_f_3 from "@/public/assets/images/medical/plme_f_3.png";
import plme_f_4 from "@/public/assets/images/medical/plme_f_4.png";
import plme_f_5 from "@/public/assets/images/medical/plme_f_5.png";
import plme_f_6 from "@/public/assets/images/medical/plme_f_6.png";
import plme_f_7 from "@/public/assets/images/medical/plme_f_7.png";
import plme_f_8 from "@/public/assets/images/medical/plme_f_8.png";
import Image from "next/image";

const FeaturesAndBenefitsOfPlForTravel = () => {
  const ListBox = {
    width: { xs: "92%", sm: "100%" },
    minHeight: { sm: "350px", md: "200px", lg: "170px", xl: "150px" },
    alignItems: "center",
    background: "#fcefb8",
    borderRadius: "5px",
    boxShadow: " 0 3px 6px rgba(0,0,0,.161)",
    display: "flex",
    margin: { xs: "0 10px 0px 20px", sm: "0" },

    gap: "10px",
    justifyContent: "center",
  };

  const primaryTextStyles = {
    fontSize: "18px",

    color: "#5ab56b",
    fontWeight: "800",
    paddingLeft: "10px",
    lineHeight: { xs: "1.3" },
    margin: "0 0 8px",
  };

  const secondaryTextStyles = {
    fontSize: "16px",

    color: "#404040",
    paddingLeft: "10px",
    lineHeight: { xs: "1.3" },
  };

  const ListItemDetails = [
    {
      image: plme_f_2,
      label: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
    {
      image: plme_f_7,
      label: "Instant loan approval",
      title: "Flexible Borrowing Terms",
      description:
        "With available flexible borrowing terms and conditions, withdraw the amount as and when required and pay interest only on the amount used.",
    },
    {
      image: plme_f_5,
      label: "Instant loan approval",
      title: "Fast Disbursal",
      description:
        "Once your documents are verified and you satisfy all our eligibility criteria, your loan takes the shortest time possible which can range between a few hours and a few days.",
    },
    {
      image: plme_f_1,
      label: "Instant loan approval",
      title: "100% Paperless Process",
      description:
        "Our whole process is digital. You can complete the process from application to approval from the comfort of your place.",
    },
    {
      image: plme_f_8,
      label: "Instant loan approval",
      title: "Ample Disbursal Amount",
      description:
        "Our loan amount varies within the range of Rs.500 and Rs.10 lakhs. Depending upon your requirement and repayment capability, you can avail a loan of as much amount as you require.",
    },
    {
      image: plme_f_3,
      label: "Instant loan approval",
      title: "Minimal Documentation",
      description:
        "All we need is a few KYC documents and your income proof. We keep our documentation process minimal so that the queue of our customers waiting remains as short as possible.",
    },
    {
      image: plme_f_4,
      label: "Instant loan approval",
      title: "Pre-Approved Offers",
      description:
        "If you are pre-approved for availing the personal loan facility, you get quick access to the personal loan for travel.",
    },
    {
      image: plme_f_6,
      label: "Instant loan approval",
      title: "No Collateral Needed",
      description:
        "The best part is that you don’t need to put anything mortgage or as collateral. This cuts down half of the hassle of documentation process. However, for short-term loans, some of our lenders might require collateral.",
    },
  ];
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "40px 0px 50px" }}>
        <Box>
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { xs: "24px", sm: "36px" },

              color: "#243771",
              fontWeight: "800",
              lineHeight: { xs: "1.3", sm: "1.5" },
              margin: { xs: "0px 0px 46px" },
            }}
          >
            Features And Benefits Of Travel Loan
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {ListItemDetails.map((doc, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              sx={{ padding: "0px 10px 0px", width: { xl: "100%" } }}
            >
              <List sx={{ ...ListBox }}>
                <ListItem>
                  <ListItemIcon sx={{ paddingRight: "10px" }}>
                    <Image src={doc.image} alt={doc.label} />
                  </ListItemIcon>
                  <ListItemText
                    primary={doc.title}
                    secondary={doc.description}
                    primaryTypographyProps={{ style: primaryTextStyles }}
                    secondaryTypographyProps={{ style: secondaryTextStyles }}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesAndBenefitsOfPlForTravel;
