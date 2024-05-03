 "use client"

import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FiberManualRecord } from "@mui/icons-material";

const FAQS = ({ faqs, text }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "20px 0px 0px" }}>
          <Grid
            container
            sx={{
              padding: { xs: "16px", md: "32px" },
            }}
            spacing={2}
            alignContent={"center"}
          >
            <Grid
              item
              xs={12}
              sm={5}
              sx={{
                display: "flex",
                alignItems: { xs: "center" },
                justifyContent: { xs: "flex-start" },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "24px", sm: "26px", md: "32px" },
                    fontWeight: "900",
                    color: "#243771",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  {faqs.map((faq, index) => (
                    <Accordion
                      key={index}
                      expanded={expanded === `panel${index + 1}`}
                      onChange={handleChange(`panel${index + 1}`)}
                      sx={{
                        backgroundColor: "#FCEFB8",
                        marginTop: "20px",
                        boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                        borderRadius: "10px",
                        border: "none !important",
                        "&::before": {
                            content: "''",
                            
                           height:"0px",
                          },
                      }}
                      elevation={0}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}d-content`}
                        id={`panel${index + 1}d-header`}
                      >
                        <FiberManualRecord
                          sx={{
                            marginTop: "6px",
                            color: "#243771",
                            marginRight: "10px",
                            fontWeight: "400",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#243771",
                            fontSize: { xs: "15px", sm: "22px" },
                            fontWeight: "700",
                          }}
                        >
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          sx={{
                            color: "#333333",
                            fontSize: { xs: "16px" },
                          }}
                        >
                          {faq.answer}
                        </Typography>
                        {faq.items && (
                         <List>
                         {Object.keys(faq.items).map((key,index) => (
                           <ListItem key={key}>
                             <FiberManualRecord
                               sx={{ fontSize: "10px", marginRight: "10px" }}
                             />
                             <ListItemText primary={faq.items[key]} />
                           </ListItem>
                         ))}
                       </List>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FAQS;
