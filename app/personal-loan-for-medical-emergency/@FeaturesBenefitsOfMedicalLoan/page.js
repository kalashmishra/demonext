import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import plme_f_2 from "@/public/assets/images/medical/plme_f_2.png";
import plme_f_1 from "@/public/assets/images/medical/plme_f_1.png";
import plme_f_3 from "@/public/assets/images/medical/plme_f_3.png";
import plme_f_4 from "@/public/assets/images/medical/plme_f_4.png";
import plme_f_5 from "@/public/assets/images/medical/plme_f_5.png";
import plme_f_6 from "@/public/assets/images/medical/plme_f_6.png";
import plme_f_7 from "@/public/assets/images/medical/plme_f_7.png";
import plme_f_8 from "@/public/assets/images/medical/plme_f_8.png";

const FeaturesBenefitsOfMedicalLoan = () => {
  const ListBox = {
    width: { xs: "100%", sm: "46%" },
    minHeight: { sm: "170px", md: "100px" },
    alignItems: "center",
    background: "#fcefb8",
    borderRadius: "10px",
    display: "flex",
    margin: "0 2% 42px",
    padding: "18px 15px 14px",
  };

  const ListItemTextStyling = {
    fontSize: "16px",
    color: "#404040",
    paddingLeft: "10px",
    lineHeight: { xs: "1.3" },
  };
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "0px 0px 0px" }}>
        <Box sx={{ padding: { xs: "0px 20px", md: "48px 48px 0px" } }}>
          <Box>
            <Typography
              sx={{
                textAlign: { xs: "center" },
                fontSize: { xs: "24px", sm: "36px" },

                color: "#243771",
                fontWeight: "800",
                lineHeight: { xs: "1.3", sm: "normal" },
                margin: { xs: "0px 0px 24px" },
              }}
            >
              Features And Benefits Of A Medical Loan
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center" },
                fontSize: { xs: "18px" },

                color: "#243771",
                fontWeight: "500",
                lineHeight: { xs: "1.3", sm: "1.5" },
                margin: { xs: "0px 0px 42px" },
              }}
            >
              Mentioned below are <b>9 key features</b> and benefits of personal
              medical loans:
            </Typography>
          </Box>

          <Box>
            <List
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <ListItem sx={{ ...ListBox }}>
                <Image src={plme_f_1} alt="easy online application modes"  />
                <Typography display="inline" sx={{ ...ListItemTextStyling }}>
                  Lenders offer easy online application modes for personal
                  medical loans.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <Image src={plme_f_2} alt="Instant loan approval" />
                <Typography display="inline" sx={{ ...ListItemTextStyling }}>
                  Instant loan approval process and fast loan amount
                  disbursement process.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <Image src={plme_f_3} alt="minimal documentation" />
                <Typography display="inline" sx={{ ...ListItemTextStyling }}>
                  Straightforward and minimal documentation is needed to apply
                  for a medical loan, including proof of identity and address.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <Image src={plme_f_4} alt="lowest interest rate" />
                <Typography display="inline" sx={{ ...ListItemTextStyling }}>
                  Interest is charged only on the loan amount that you use, not
                  on the entire sum.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <Image
                  src={plme_f_5}
                  alt="Withdrawal amounts are available"
                />
                <Typography display="inline" sx={{ ...ListItemTextStyling }}>
                  Withdrawal amounts are available as per your financial needs
                  and requirements, up to the maximum approved limit.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <Image
                  src={plme_f_6}
                  alt="No need to pledge any security or collateral."
                />
                <Typography display="inline" sx={{ ...ListItemTextStyling }}>
                  No need to pledge any security or collateral.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <Image src={plme_f_7} alt="flexible loan repayment" />
                <Typography display="inline" sx={{ ...ListItemTextStyling }}>
                  Lenders offer flexible loan repayment terms and EMI options.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <Image
                  src={plme_f_8}
                  alt="funds for all kinds of unforeseen medical emergencies."
                />
                <Typography display="inline" sx={{ ...ListItemTextStyling }}>
                  Being a loan for medical expenses, these funds can be used to
                  finance any and all kinds of unforeseen medical emergencies.
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesBenefitsOfMedicalLoan;
