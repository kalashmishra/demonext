import React from "react";
import heading from "@/public/headings.json";
import DebtConsolidationLoan from "./@DebtConsolidationLoan/page";
import FeaturesBenefitsOfDebt from "./@FeaturesBenefitsOfDebt/page";
import EligibilityCriteria from "./@EligibilityCriteria/page";
import DocumentsRequiredToApply from "./@DocumentsRequiredToApply/page";
import WillConsolidatingDebt from "./@WillConsolidatingDebt/page";
import TopThreeThings from "./@TopThreeThings/page";
import KnowTheRight from "./@KnowTheRight/page";
import DebtConsolidationVsBalance from "./@DebtConsolidationVsBalance/page";

import StepByStepProcess from "../components/@StepByStepProcess/page";
import FAQS from "../components/@FAQS/page";
import CommonHomePage from "../components/CommonHomePage/page";
import pldc_top_img from "@/public/assets/images/pldc_top_img.webp";

export const metadata = {
  title: heading.debtConsolidation.title,
  description: heading.debtConsolidation.description,
  keywords: heading.debtConsolidation.keywords,
  alternates: { canonical: heading.debtConsolidation.canonical },
};
const DebtConsolidation = () => {
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
      question: "  1. Is balance transfer better than debt consolidation? ",
      answer:
        "  Both of these debt management facilities have their own pros and cons. You must take into account all these factors while choosing the suitable option. Your primary motive must be to select a facility that will reduce your debt load while helping you save a considerable sum of money.",
    },
    {
      question: " 2. What should I avoid while consolidating debts?",
      answer:
        " While consolidating your existing debts, you should try to avoid the following types of credits:",
      items: {
        item1: "Loans with a high interest rate",
        item2: "Loans with high additional charges",
        item3: "Home equity loans",
        item4: "401(k) loans",
      },
    },
    {
      question:
        "3. Can I select tenure for repaying a personal loan for debt consolidation?",
      answer:
        "Yes. With Credmudra, you can select your loan repayment tenure, i.e., from three months to two years. The flexibility of repayment is a primary reason that makes us one of the best short-term loan aggregators in the market.",
    },
  ];
  return (
    <>
      <CommonHomePage
        heading={"Personal Loan For Debt Consolidation"}
        subheading1={
          "Debts can severely affect your financial strength and prevent you from saving money for future goals. To bypass such complications, you can consider consolidating your debt using a personal loan."
        }
        subheading2={
          "In this regard, you can consider applying for a debt consolidation loan on Credmudra and reduce your financial burden considerably."
        }
        image={pldc_top_img}
      />
      <DebtConsolidationLoan />
      <FeaturesBenefitsOfDebt />
      <EligibilityCriteria />
      <DocumentsRequiredToApply />
      <StepByStepProcess text={"Debt consolidation"} subHeading={"Here is the stepwise process you need to follow to apply for a Debt Consolidation loan online through Credmudra:"} />
      <WillConsolidatingDebt />
      <TopThreeThings />
      <KnowTheRight />
      <DebtConsolidationVsBalance />
      <FAQS
        faqs={faqsData}
        text={" FAQs About Personal Loan For Debt Consolidation"}
      />
    </>
  );
};

export default DebtConsolidation;
