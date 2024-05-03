import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import heading from "@/public/headings.json";
import ClientComponent from "../components/ClientComponent";

export const metadata = {
  title: heading.TermsAndCondition.title,
  description: heading.TermsAndCondition.description,
  keywords: heading.TermsAndCondition.keywords,
  alternates: { canonical: heading.TermsAndCondition.canonical },
};
const TermsAndConditions = () => {
  const termsAndConditionsData = [
    {
      heading: "Terms and Conditions",
      items: [
        {
          content:
            "By Using the services provided by Credmudra (referred to collectively as the “Services”), you acknowledge and agree that your use of the Services signifies acceptance of these terms and conditions (“Terms”).",
        },
        {
          content:
            "You understand and acknowledge that the ownership of “Credmudra” and the domain name www.credmudra.com belongs to Zappian Fintech Private Limited. Zappian Fintech Private Limited operates an online technology platform that facilitates individuals’ registration for obtaining loans from financial institutions in India. The registered address is B No.08 Nirupam, PH-II Nirupam state, Ahmedpur kalan Hujur, Bhopal, Madhya Pradesh 462026.",
        },
        {
          content:
            "You acknowledge and agree that Credmudra holds all legal rights, titles, and interests in and to the Services, including any intellectual property rights associated with the Services, whether registered or not, and regardless of their geographical location.",
        },
        {
          content:
            "You understand that you are not authorised to use any of Credmudra’s trade names, trademarks, service marks, logos, domain names, or any other distinctive brand features. You are also prohibited from removing, obscuring, or altering any proprietary rights notices, including trademark and copyright notices, affixed to or contained within the Services. Copying or transmitting any part of the Services is strictly prohibited.",
        },
        {
          content:
            "Furthermore, you acknowledge that the Services may contain confidential information, and you agree not to disclose such information without prior written consent from Credmudra. You also agree not to copy, create derivative works from, modify, reverse engineer, reverse assemble, or attempt to discover any source code related to the Services. Selling, assigning, sublicensing, granting a security interest in, or transferring any rights in the Services is also prohibited.",
        },
        {
          content:
            "You agree not to use the website for any unlawful, illegal, or prohibited purposes as defined in these Terms or by applicable local laws. Credmudra reserves the right, at its sole discretion and without advance notice or liability, to suspend, terminate, or restrict your access to the website or any of its components.",
        },
      ],
    },
  ];

  const data = [
    {
      heading: "ELIGIBILITY",
      items: [
        {
          content:
            "By accepting these Terms, you declare that you are at least 18 years old, of sound mind, and a resident of India as defined under the Foreign Exchange Management Act, 1999.",
        },
      ],
    },
    {
      heading: "SERVICES",
      items: [
        {
          content:
            "By registering with us, you confirm your intention to avail a loan or credit from one or more lending partners through the Services provided by Credmudra.",
        },
        {
          content: (
            <span
              dangerouslySetInnerHTML={{
                __html: `You understand and acknowledge that the information requested from you is necessary for various purposes outlined in our Privacy Policy (<a href='https://www.credmudra.com/privacy-policy/'>https://www.credmudra.com/privacy-policy/</a>), including compliance with laws, regulations, and guidelines established by the Government of India, such as Know Your Customer (KYC) norms, Anti-Money Laundering (AML) standards, Combating of Financing of Terrorism (CFT), and the obligations of banks under the Prevention of Money Laundering Act, 2002. If you fail to provide the requested information to Credmudra, Credmudra or its partners will be unable to provide or continue their services to you.`,
              }}
            />
          ),
        },
        {
          content:
            "You confirm that all information provided to Credmudra, whether through online forms or otherwise, is true, accurate, and not misleading. You agree to provide any additional documents required by Credmudra or its partners from time to time.",
        },
        {
          content:
            "You acknowledge that Credmudra does not directly lend money to you but acts as a facilitator to arrange loans from one or more lending partners.",
        },
        {
          content:
            "The Credmudra Credit Limit provided to you is not a credit facility in itself but represents our assessment of your eligibility based on various factors, including the policies of our lending partners, market influences, and our past experiences. You acknowledge that when you apply for a loan, Credmudra or its lending partners may verify your records, among other things, with their own records and any information available through credit information companies (CICs) and fraud prevention agencies (FPAs). This verification is conducted to assess your creditworthiness, verify your identity, and prevent and detect crime and money laundering.",
        },
        {
          content:
            "By availing loans through Credmudra, you agree not to: (i) utilize the loan proceeds for any purpose other than what is declared to Credmudra or its lending partners, (ii) accept or attempt to receive the credit facility in the form of cash or any other means, (iii) use the Services in violation of applicable law, or (iv) circumvent or attempt to circumvent the provisions of any applicable terms or engage in fraudulent, malicious, or otherwise detrimental activities that may harm Credmudra’s reputation or interests related to the Services.",
        },
        {
          content:
            "You acknowledge that details of all loans obtained through the Credmudra platform will be reported to credit information bureaus as required by applicable law. Your lender also has the right and obligation to report your details to CICs if you have delayed repaying your loan installment.",
        },
        {
          content:
            "You acknowledge that interest rates may vary among different lenders, borrowers, and loans. To understand how your lender determines the interest rate, please refer to the website of ourlending partners.",
        },
      ],
    },
    {
      heading: "CUSTOMER COMMUNICATIONS",
      items: [
        {
          content:
            "By accepting these Terms, you explicitly consent to be contacted by Credmudra, its representatives, affiliates, or anyone calling on behalf of Credmudra at any contact number, physical address, or electronic address provided by you during the registration process. You also agree to receive communications from us via various channels, including but not limited to emails, SMS messages, WhatsApp, calls using pre-recorded messages or artificial voice, and notifications sent through our mobile application. You acknowledge that you understand the English language and prefer to receive communications in English.",
        },
        {
          content:
            "To ensure the efficient delivery of our Services, we request your explicit consent to access your registered emails solely for the purpose of reviewing relevant emails related to the Services, including bank statements and records related to your loan application. If necessary for the provision of Services, we may utilize automated means to access password-protected documents by using the information provided by you to generate passwords securely. It is important to note that the consent we seek from you will be utilized exclusively for the loan application facilitated through us, and this information will not be shared with any third party, except for an RBI (Reserve Bank of India) registered financial institution, which may require the aforementioned information for processing the loan application and complying with applicable laws, as mentioned in paragraph 2 of the “Services” section.",
        },
      ],
    },
    {
      heading: "PRIVACY",
      items: [
        {
          content:
            "By accepting these terms and conditions, you acknowledge, comprehend, and provide consent to the terms stated in Credmudra’s Privacy Policy, which you have read and fully understood. You recognize, agree, and grant permission to Credmudra, its officers, employees, service providers, and agents to use, store, process, disclose, transfer (within or outside India), and/or exchange your information (including personal data) in compliance with our Privacy Policy.",
        },
        {
          content:
            "You acknowledge that our lending partners retain the right to reject your application for any service without providing any reasons or notifying you.",
        },
        {
          content:
            "You understand that we or our lending partners may retrieve, procure, or download your KYC data/details from the Central KYC registry to verify and establish your information and identity, and you hereby authorize us/them to do so.",
        },
      ],
    },
    {
      heading: "LIMITATION OF LIABILITY",
      items: [
        {
          content:
            "All content and services provided on our website are presented on an “as is” and “as available” basis. Credmudra explicitly disclaims all warranties of any kind, whether expressed or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and security and accuracy. Additionally, we disclaim any obligations pertaining to the following: (a) ensuring that the content is up-to-date, complete, comprehensive, accurate, or applicable to your specific circumstances; (b) guaranteeing that the website will meet your requirements or be continuously available in an uninterrupted, timely, secure, or error-free manner; (c) ensuring the accuracy or reliability of the results obtained from the website or any services offered through it; or (d) warranting the quality of any products, services, information, or other material obtained from you through the website that will meet your expectations.",
        },
        {
          content:
            "Credmudra, including its officers, directors, employees, representatives, affiliates, and providers, shall not be held responsible or liable for (a) any injuries, deaths, losses, claims, acts of God, accidents, delays, or any direct, special, exemplary, punitive, indirect, incidental, or consequential damages of any kind (including, but not limited to, lost profits or savings), whether based on contract, tort, strict liability, or otherwise, arising from or in any way connected with (i) any failure or delay, including the inability to utilize any component of the website, (ii) the use of the website or its content, or (iii) the performance or non-performance by Credmudra or any provider; or (b) any damages to or viruses that may infect your computer equipment or other property as a result of accessing the website or downloading any content from it.",
        },
        {
          content:
            "While we strive for accuracy in assessing your eligible credit limit, you must acknowledge that the final decisions regarding the loan or credit being offered to you are made by our lending partner. You agree not to hold Credmudra liable if any lending partner chooses not to provide credit to you.",
        },
      ],
    },
  ];

  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
    marginTop: "5px",
  };

  const ListItemTextContent = {
    color: "#404040",
    fontSize: "18px",
    fontWeight: "lighter",
    margin: "0 0 20px",
    opacity: 0.8,
    textAlign: "left",
  };

  const headingStyling = {
    fontWeight: "700",
    fontSize: "26px",
    color: "#243771",
  };

  const termsHeadingStyling = {
    fontWeight: "900",
    fontSize: "30px",
    color: "#243771",
  };

  return (
    <>
    <ClientComponent />
    <Grid
      sx={{
        paddingTop: { xs: "55px", sm: "100px" },
        marginTop: { xs: "50px", sm: "0px" },
      }}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          padding: { xs: "0 25px 60px", sm: "0 80px 60px", md: "0 130px 60px" },
        }}
      >
        <Grid item xs={12}>
          <Box>
            {termsAndConditionsData.map((termsItem, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    ...termsHeadingStyling,
                  }}
                >
                  {termsItem.heading}
                </Typography>
                <List>
                  {termsItem.items.map((item, i) => (
                    <ListItem
                      key={i}
                      sx={{ padding: 0, lineHeight: 1.5, display: "flex" }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextContent }}
                        >
                          {item.content}
                        </Typography>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          <Box>
            {data.map((section, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    ...headingStyling,
                  }}
                >
                  {section.heading}
                </Typography>
                <List>
                  {section.items.map((item, i) => (
                    <ListItem
                      key={i}
                      sx={{ padding: 0, lineHeight: 1.5, display: "flex" }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextContent }}
                        >
                          {item.content}
                        </Typography>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          <Box>
            <Typography sx={{ ...headingStyling }}>ASSIGNMENT</Typography>
            <Typography sx={{ ...ListItemTextContent }}>
              You are prohibited from assigning or transferring your rights or
              obligations under these Terms. However, Credmudra reserves the
              right to assign its rights and duties under these Terms without
              considering it as a modification to the Terms and without
              providing any notice to you.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ ...headingStyling }}>
              ARBITRATION AND GOVERNING LAW
            </Typography>
            <Typography sx={{ ...ListItemTextContent }}>
              These Terms will be governed by the laws of India, without regard
              to its conflict of laws principles. In the event of any legal
              action, the courts in Bhopal, India will have jurisdiction over
              such matters. In any legal proceedings initiated by or against
              Credmudra, Credmudra will be entitled to recover all legal
              expenses incurred in connection with the legal action, including
              but not limited to both taxable and non-taxable costs, as well as
              attorney fees.
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Grid>
    </>
  );
};

export default TermsAndConditions;
