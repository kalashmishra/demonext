import React from "react";
import PlForMedicalEmergenciesPage2 from "./@PLForMedicalEmergencyPg2/page";
import LendersThatOffer from "./@LendersThatOffer/page";
import FeaturesBenefitsOfMedicalLoan from "./@FeaturesBenefitsOfMedicalLoan/page";
import MedicalLoanEligibility from "./@MedicalLoanEligibility/page";
import FactorsAffecting from "./@FactorsAffecting/page";
import DocumentsRequiredForMedical from "./@DocumentsRequiredForMedical/page";
import StepByStepProcess from "../components/@StepByStepProcess/page";
import WhyDoesTaking from "./@WhyDoesTaking/page";
import heading from "@/public/headings.json";
import TransformYourFinancial from "../components/@TransformYourFinancial/page";
import FAQS from "../components/@FAQS/page";
import ClientComponent from "../components/ClientComponent";
import CommonHomePage from "../components/CommonHomePage/page";
import pl_me_top from "@/public/assets/images/pl_me_top.webp";

export const metadata = {
  title: heading.medicalEmergency.title,
  description: heading.medicalEmergency.description,
  keywords: heading.medicalEmergency.keywords,
  alternates: { canonical: heading.medicalEmergency.canonical },
};
const PersonalLoanForMedicalEmergency = () => {
  const faqsData = [
    {
      question:
        " Do borrowers need to pay a down payment to avail of a  personal medical loan?",
      answer:
        "No, there is no need to make any deposit or down payment to obtain a personal medical loan.",
    },
    {
      question:
        "Can I still obtain a personal medical loan with an average  credit score?",
      answer:
        "Obtaining a personal medical loan with an average credit  score will vary depending on the lender’s terms and  conditions. It is generally advisable to maintain a credit  score above 750 to obtain a reasonable interest rate.",
    },
    {
      question:
        "   Does the lending institution have any say in determining  the type of treatment prescribed?",
      answer:
        " No, the lending organisation has no say or role in    deciding what type of treatment you should be provided with",
    },
    {
      question:
        " How is the interest rate and loan repayment tenure  determined for a personal medical loan?",
      answer:
        " The interest rate and loan repayment tenure are determined  based on the borrower’s loan requirements, eligibility criteria, and the lender’s terms and conditions.",
    },
    {
      question:
        " Is there a waiting period for personal medical loans, as   there is with health insurance?",
      answer:
        "   No, unlike health insurance policies, there is no waiting  period when availing of a personal medical loan.",
    },
    {
      question:
        "  Are there any restrictions on the type of treatments that  can be funded by medical loans?",
      answer:
        "  No, there are no restrictions on the type of treatments  where you can use a medical loan. Thus, medical loans can be used to finance any kind of medical expense.",
    },
  ];
  return (
    <>
    <ClientComponent/>
      
      <CommonHomePage
        heading={"Personal Loan For Medical Emergency"}
        subheading1={
          "Medical emergencies can be a source of immense anxiety particularly if you are caught off-guard."
        }
        subheading2={
          " In such situations, CredMudra’s personal medical loan can help you and your loved ones stay protected regardless of your financial circumstance."
        }
        image={pl_me_top}
      />
      <PlForMedicalEmergenciesPage2 />
      <LendersThatOffer />
      <FeaturesBenefitsOfMedicalLoan />
      <MedicalLoanEligibility />
      <FactorsAffecting />
      <DocumentsRequiredForMedical />
      <StepByStepProcess text={"A Medical Loan At Credmudra"} subHeading={"Here is the stepwise process you need to follow to apply for a personal loan online through Credmudra:"}/>
      <WhyDoesTaking />
      <FAQS
        faqs={faqsData}
        text={" FAQs On Personal Loan For Medical Emergencies"}
      />
      <TransformYourFinancial
        text={
          "Transform Your Financial Future: Sign Up For These And Discover Credmudra's Proven Strategies"
        }
      />
    </>
  );
};

export default PersonalLoanForMedicalEmergency;
