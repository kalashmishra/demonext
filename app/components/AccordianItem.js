import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import * as React from "react";

export const AccordionItem = ({
  expanded,
  onChange,
  heading,
  content,
  headingColor,
  contentColor,
  checkCircle,
}) => {
  const AccHeadingColor = {
    color: headingColor,
    fontWeight: "700",
    fontSize:"22px"
  };
  const AccParaColor = {
    color: contentColor,
    fontSize: "17px",
    fontWeight: "500",
  };

  const CheckCircle = {
    marginTop: "6px",
    color: checkCircle,
    marginRight: "10px",
  };
  const ExpandMore = {
    color: checkCircle,
  };

  return (
    <Accordion
      elevation={0}
      expanded={expanded}
      onChange={onChange}
      sx={{ backgroundColor: "transparent", marginTop: "20px" }}
    >
      <AccordionSummary
        sx={{ padding: 0 }}
        expandIcon={<ExpandMoreIcon sx={{ ...ExpandMore }} />}
      >
        <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
        <Typography sx={{ ...AccHeadingColor }}>{heading}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ ...AccParaColor }}>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
