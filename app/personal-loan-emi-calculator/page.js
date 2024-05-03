import React from "react";


import EmiCalculator from "./@EmiCalculator/page";
import Process from "./@Process/page";
import Steps from "./@Steps/page";
import FAQS from "./@FAQS/page";
import { Container } from "@mui/material";
import heading from "@/public/headings.json"
import ClientComponent from "../components/ClientComponent";

export const metadata = {
  title: heading.EMIcalculate.title,
  description: heading.EMIcalculate.description,
  keywords: heading.EMIcalculate.keywords,
  alternates: { canonical: heading.EMIcalculate.canonical },
  
};
const PersonalLoanEmiCalculator = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.removeItem("loanType");
  //   routeRedirection(navigate);
  //   dispatch(setLoanType(""));

  //   sessionStorage.removeItem("employmentType");
  // }, []);

  return (
    <>
     
      <Container maxWidth={"lg"}>
      <ClientComponent/>
      <EmiCalculator/>
      <Process />
      <Steps />
      <FAQS />
      </Container>
     

    </>
  );
};

export default PersonalLoanEmiCalculator;
