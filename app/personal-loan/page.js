import React from "react";
import PlDescriptionPage from "./@PlDescriptionPage/page";
import GetPersonalLoan from "./@GetPersonalLoan/page";
import InterestRate from "./@InterestRate/page";
import ChoosePersonalLoan from "./@ChoosePersonalLoan/page";
import WhyIsPlBetter from "./@WhyIsPlBetter/page";
import SimpleCriteria from "./@SimpleCriteria/page";
import DocumentsYouNeed from "./@DocumentsYouNeed/page";
import PersonalLoanFees from "./@PersonalLoanFees/page";

import WhenShouldYouAvoid from "./@WhenShouldYouAvoid/page";
import WhenShouldYouTake from "./@WhenShouldYouTake/page";
import TipsToAvoidPl from "./@TipsToAvoidPl/page";
import HowWillLenders from "./@HowWillLenders/page";
import TipsToGrab from "./@TipsToGrab/page";

import TransformYourFinancial from "../components/@TransformYourFinancial/page";
import StepByStepProcess from "@/app/components/@StepByStepProcess/page";
import heading from "@/public/headings.json";
import FAQS from "../components/@FAQS/page";
import ClientComponent from "../components/ClientComponent";
import CommonHomePage from "../components/CommonHomePage/page";

import personal_loan_banner from "@/public/assets/images/personal-loan-banner.webp";

export const metadata = {
  title: heading.personalLoan.title,
  description: heading.personalLoan.description,
  keywords: heading.personalLoan.keywords,
  alternates: { canonical: heading.personalLoan.canonical },
};
const PersonalLoan = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     localStorage.removeItem("loanType");
  //     routeRedirection(navigate);
  //     dispatch(setLoanType(""));
  //     sessionStorage.removeItem("employmentType");
  //   }, []);

  const faqsData = [
    {
      question:
        "How can I calculate the instalment amount of my personal loan?",
      answer:
        "You can calculate the instalment amount of your personal loan by using an online personal loan calculator. In this tool, you will simply have to put in your loan amount, tenure, and the applicable interest rate.",
    },
    {
      question:
        "What should I do if some lender rejects my request for a personal loan?",
      answer:
        "If any lending institution rejects your loan application, you need to first make a query about the reason. Sometimes, they can reject the request for credit due to missing certain documents or filling in the application form incorrectly. In such a scenario, you can reapply. However, if a poor credit score is a reason for rejection, you should consider taking measures to improve this score.",
    },
    {
      question: "  Can I get tax benefits on a personal loan?",
      answer:
        " No, a personal loan does not come with the benefit of a tax deduction.",
    },
    {
      question:
        "Do we have the option to foreclose my personal loan after 2-3 months of repayment?",
      answer:
        "Provisions for foreclosing a loan are different across lenders. Generally, lenders let you foreclose a personal loan after 6-12 months. Go through the terms and conditions of your chosen lender to know about this provision.",
    },
  ];
  return (
    <>
    <ClientComponent/>
      <CommonHomePage
        heading={"Personal Loans- Handpicked Offers And Highest Disbursal Rate"}
        subheading1={
          "So why wait ? Make your move and take that first step towards your aspirations."
        }
        image={personal_loan_banner}
      />
      <PlDescriptionPage />
      <GetPersonalLoan />
      <InterestRate />
      <ChoosePersonalLoan />
      <WhyIsPlBetter />
      <SimpleCriteria />
      <DocumentsYouNeed />
      <PersonalLoanFees />
      <StepByStepProcess text={"Personal"} subHeading={"Here is the stepwise process you need to follow to apply for a personal loan online through Credmudra:"}/>
      <WhenShouldYouAvoid />
      <WhenShouldYouTake />
      <TipsToAvoidPl />
      <HowWillLenders />
      <TipsToGrab />
      <FAQS faqs={faqsData} text={"FAQs on Personal Loan"} />
      <TransformYourFinancial
        text={
          "Transform Your Financial Future: Sign Up For These And Discover Credmudra's Proven Strategies"
        }
      />
    </>
  );
};

export default PersonalLoan;
