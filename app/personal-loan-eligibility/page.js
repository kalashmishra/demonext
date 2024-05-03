import React from "react";
import { Container } from "@mui/material";
import ApplyForPersonalLoanOnline from "./@ApplyForPersonalLoanOnline/page";
import CheckYourEligibility from "./@CheckYourEligibility/page";
import heading from "@/public/headings.json"
import ClientComponent from "../components/ClientComponent";

export const metadata = {
  title: heading.Eligibility.title,
  description: heading.Eligibility.description,
  keywords: heading.Eligibility.keywords,
  alternates: { canonical: heading.Eligibility.canonical },
  
};
const PersonalLoanEligibility = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.removeItem("loanType");
  //   routeRedirection(navigate);
  //   dispatch(setLoanType(""));

  //   sessionStorage.removeItem("employmentType");
  // }, []);

  return (
    <>
      
      <Container maxWidth={"lg"} >
      <ClientComponent/>
        <ApplyForPersonalLoanOnline />
        <CheckYourEligibility/>
      </Container>
    </>
  );
};

export default PersonalLoanEligibility;
