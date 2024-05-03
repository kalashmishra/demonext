import React from "react";
import ApplyOnline from "./@ApplyOnline/page";
import { Container } from "@mui/material";
import GetPersonalLoan from "./@GetPersonalLoan/page";
import heading from "@/public/headings.json"
import ClientComponent from "../components/ClientComponent";

export const metadata = {
  title: heading.InterestRate.title,
  description: heading.InterestRate.description,
  keywords: heading.InterestRate.keywords,
  alternates: { canonical: heading.InterestRate.canonical },
  
};
const PersonalLoanInterestRate = () => {
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
        <ApplyOnline/>
        <GetPersonalLoan />
      </Container>
    </>
  );
};

export default PersonalLoanInterestRate;
