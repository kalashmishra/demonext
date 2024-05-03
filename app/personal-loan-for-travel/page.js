import React from "react";
import BankThatOffer from "./@BankThatOffer/page";
import FeaturesAndBenefitsOfPlForTravel from "./@FeaturesAndBenefitsOfPlForTravel/page";
import FindOutWhen from "./@FindOutWhen/page";
import DocumentRequired from "./@DocumentRequired/page";
import StepByStepProcess from "../components/@StepByStepProcess/page";
import WhyShouldYouConsider from "./@WhyShouldYouConsider/page";
import ThingsToConsider from "./@ThingsToConsider/page";

import heading from "@/public/headings.json";
import FAQS from "../components/@FAQS/page";
import ClientComponent from "../components/ClientComponent";
import CommonHomePage from "../components/CommonHomePage/page";
import tl_top from "@/public/assets/images/travelLoan/tl_top.webp";

export const metadata = {
  title: heading.travalLoan.title,
  description: heading.travalLoan.description,
  keywords: heading.travalLoan.keywords,
  alternates: { canonical: heading.travalLoan.canonical },
};
const PersonalLoanForTravel = () => {
  const faqsData = [
    {
      question: "   Can I take a travel loan for international vacations?",
      answer:
        "  Yes, you can avail a travel loan for international    vacations upon meeting the eligibility criteria of your    lender. However, you also need to stay prepared for  unexpected expenses and pay for foreign currency  conversion charges.",
    },
    {
      question: "  What are the benefits of our pre-approved personal loan?",
      answer:
        "  If you are eligible for our pre-approved personal loan,     you can enjoy benefits such as lower interest rates, instant approval and disbursement.",
    },
    {
      question: "  How much personal loan for travel can I get at Credmudra?",
      answer:
        "   You can avail a personal loan for travel ranging between  Rs.1,000 and Rs.20 lakhs depending on your requirement and eligibility.",
    },
    {
      question: " How can I repay my travel loan?",
      answer:
        "   The most convenient way to pay off your loan is by paying   EMIs. But if you fear defaulting on your monthly payments,  you can set up standing instructions or turn on the auto  debit facility. Just make sure that you have sufficient balance in your linked bank account.",
    },
  ];
  return (
    <> <ClientComponent/>
    
      <CommonHomePage
        heading={"Travel Loan Tailored To Your Dreams!"}
        subheading1={
          "Say goodbye to financial worries and bon voyage to your dream destination!"
        }
        image={tl_top}
      />
      <BankThatOffer />
      <FeaturesAndBenefitsOfPlForTravel />
      <FindOutWhen />
      <DocumentRequired />
      <StepByStepProcess text={"A Travel"} subHeading={"The application process for a personal loan for travel involves simple few steps and takes a few minutes to complete. All you need is a stable internet connection and follow the given steps:"}/>
      <WhyShouldYouConsider />
      <ThingsToConsider />
      <FAQS faqs={faqsData} text={"   FAQs About Personal Loan For Travel"} />
    </>
  );
};

export default PersonalLoanForTravel;
