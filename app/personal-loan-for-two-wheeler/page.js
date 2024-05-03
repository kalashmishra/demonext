import React from "react";
import EligibilityCriteriaTwoWheeler from "./@EligibilityCriteriaTwoWheeler/page";
import DocumentsForTwoWheeler from "./@DocumentsForTwoWheeler/page";
import KeyFeatures from "./@KeyFeatures/page";
import InterestRate from "./@InterestRate/page";

import StepByStepProcess from "../components/@StepByStepProcess/page";
import heading from "@/public/headings.json";
import FAQS from "../components/@FAQS/page";
import ClientComponent from "../components/ClientComponent";
import CommonHomePage from "../components/CommonHomePage/page";
import pl_tw_top from "@/public/assets/images/pl_tw_top.webp"

export const metadata = {
  title: heading.twoWheeler.title,
  description: heading.twoWheeler.description,
  keywords: heading.twoWheeler.keywords,
  alternates: { canonical: heading.twoWheeler.canonical },
};

const PersonalLoanForTwoWheeler = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   localStorage.removeItem("loanType");
  //   routeRedirection(navigate);
  //   dispatch(setLoanType(""));
  //   sessionStorage.removeItem("employmentType");
  // }, []);
  const faqsData = [
    {
      question:
        "  Where to find the best personal loan offer for a two-wheeler?",
      answer:
        "You may reach out to Credmudra mentors for a one-on-one     discussion on how to negotiate for the best interest rate.  We have a bunch of reputed lenders offering the lowest  interest on personal loans.",
    },
    {
      question: " Can I get a bike loan if my CIBIL score is 650?",
      answer:
        "Credit score requirements tend to vary from one lender to another. However, there remains a significant chance of grabbing a personal loan with 650 CIBIL score but in exchange of higher interest rates.",
    },
    {
      question: "    What is the minimum salary for a loan from Credmudra?",
      answer:
        "   You can opt for a loan even if you are currently employed   with a salary of Rs. 9000. The only reason a lender asks   for your monthly income is to determine your repaying  capacity after taking the loan.",
    },
    {
      question: "  How many years is a bike loan?",
      answer:
        "   Depending on the lender’s policies, a two-wheeler loan     typically exceeds no more than 5 years. Many financing   companies allow you to make partial prepayments at  occasional intervals to bring down the interest rates in  exchange for some foreclosure charges.",
    },
  ];
  return (
    <>
    
    <ClientComponent/>
      <CommonHomePage
        heading={"Cruise Through Life With Affordable Loans For Two-Wheelers"}
        subheading1={
          "Say Goodbye to Two-Wheeler Worries with Competitive Solutions and Convenient EMI options."
        }
        image={pl_tw_top}
      />
      <EligibilityCriteriaTwoWheeler />
      <DocumentsForTwoWheeler />
      <KeyFeatures />
      <StepByStepProcess text={"A Two Wheeler"} subHeading={"Follow these steps to successfully bag an two wheeler loan on Credmudra:"}/>
      <InterestRate />
      <FAQS
        faqs={faqsData}
        text={"  FAQs About Personal Loan For Two Wheeler"}
      />
    </>
  );
};

export default PersonalLoanForTwoWheeler;
