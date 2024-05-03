import React from "react";
import WhatBusinessLoan from "./@WhatBusinessLoan/page";
import ChooseCredmudraForBl from "./@ChooseCredmudraForBl/page";
import FeaturesBenefitsBl from "./@FeaturesBenefitsBl/page";
import InterestRate from "./@InterestRate/page";
import EligibilityCriteria from "./@EligibilityCriteria/page";
import DocumentRequired from "./@DocumentRequired/page";
import WhatAreType from "./@WhatAreType/page";
import FactorsConsider from "./@FactorsConsider/page";

import StepByStepProcess from "../components/@StepByStepProcess/page";
import heading from "@/public/headings.json";
import FAQS from "../components/@FAQS/page";
import ClientComponent from "./ClientComponent";

import CommonHomePage from "../components/CommonHomePage/page";
import business_loan_top from "@/public/assets/images/business_loan_top.webp";

export const metadata = {
  title: heading.businessPage.title,
  description: heading.businessPage.description,
  keywords: heading.businessPage.keywords,
  alternates: { canonical: heading.businessPage.canonical },
};

const BusinessLoan = () => {
  const faqsData = [
    {
      question:
        " What is a good credit score to apply for a business loan  in India?",
      answer:
        " Financial institutions and NBFCs usually consider a Credit score of 750 or above as a good credit score for a business loan.",
    },
    {
      question:
        "What is the maximum repayment tenure for a business loan in India?",
      answer:
        "The maximum tenure for an unsecured business loan can be up to five years. However, repayment tenure for a credit facility varies from one lender to another. Hence, you should get in touch with the lenders in order to know their repayment terms and other details.",
    },
    {
      question: " Can I get a business loan to start a farming business? ",
      answer:
        " Yes, you can get a business loan to start a farming or agriculture business. Once you make an application, submit the necessary documents and get verified, you will get the money to fund your business expenses. ",
    },
  ];
  return (
    <>
    <ClientComponent/>
      <CommonHomePage
        heading={"We Provide Funds For All Your Business Needs"}
        subheading1={
          "Empowering Businesses to Thrive and Grow with our Innovative and Tailored Financing Solutions"
        }
        image={business_loan_top}
      />
      <WhatBusinessLoan />
      <ChooseCredmudraForBl />
      <FeaturesBenefitsBl />
      <InterestRate />
      <EligibilityCriteria />
      <DocumentRequired />
      <StepByStepProcess text={"Business"} subHeading={"Here is the stepwise process you need to follow to apply for a personal loan online through Credmudra:"}/>
      <WhatAreType />
      <FactorsConsider />
      <FAQS faqs={faqsData} text={"FAQs On Business Loans"} />
    </>
  );
};

export default BusinessLoan;
