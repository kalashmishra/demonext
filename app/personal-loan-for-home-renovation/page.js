import React from "react";
import BenefitsPersonalLoan from "./@BenefitsPersonalLoan/page";
import EligibilityCriteria from "./@EligibilityCriteria/page";
import DocumentRequired from "./@DocumentRequired/page";
import FinancialInstitution from "./@FinancialInstitution/page";
import WhyChooseCredmudra from "./@WhyChooseCredmudra/page";
import StepByStepProcess from "@/app/components/@StepByStepProcess/page";
import heading from "@/public/headings.json";
import pl_hr_top from "@/public/assets/images/pl_hr_top.jpg";
import FAQS from "../components/@FAQS/page";
import ClientComponent from "../components/ClientComponent";
import CommonHomePage from "../components/CommonHomePage/page";

export const metadata = {
  title: heading.homeRenovation.title,
  description: heading.homeRenovation.description,
  keywords: heading.homeRenovation.keywords,
  alternates: { canonical: heading.homeRenovation.canonical },
};

const PersonalLoanForHomeRenovation = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.removeItem("loanType");
  //   routeRedirection(navigate);
  //   dispatch(setLoanType(""));
  //   sessionStorage.removeItem("employmentType");
  // }, []);
  const faqsData = [
    {
      question: "Can I use a personal loan for my house renovation?",
      answer:
        "  Yes, you can use the borrowed sum of money for any    purpose, including your home renovation-related expenses. The bank or NBFC will not imply any restriction or obligation on the usage of the borrowed money.",
    },
    {
      question: "Is a personal loan for home improvement tax deductible?",
      answer:
        "   Yes, under Section 24(B) of the Income Tax Act of 1961,   you can claim a tax deduction of up to ₹ 30,000 per annum on the interest you pay for a personal loan for home  renovation.",
    },
    {
      question: "  Are part payments allowed in a personal loan?",
      answer:
        "   Some of the leading financial institutions offer part    payment facilities. However, in order to know your  lender-specific guidelines, consider reading the loan agreement or getting in touch with the lender directly.",
    },
  ];
  return (
    <>
      <ClientComponent />
      <CommonHomePage
        heading={"Experience The Joy Of Home Transformation."}
        subheading1={
          "Revamp, Refresh, and Revitalize Your Home with Our Home Improvement Loan."
        }
        image={pl_hr_top}
      />
      <BenefitsPersonalLoan />
      <EligibilityCriteria />
      <DocumentRequired />
      <StepByStepProcess text={"Personal Lone For Home Renovation"} subHeading={"You can follow these simple steps if you are looking forward to applying for a personal loan from Credmudra:"}/>
      <WhyChooseCredmudra />
      <FinancialInstitution />
      <FAQS
        faqs={faqsData}
        text={"  Faqs On Personal Loans For Home Renovation"}
      />
    </>
  );
};

export default PersonalLoanForHomeRenovation;
