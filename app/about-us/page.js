import React from "react";
import AboutTeam from "./@AboutTeam/page";
import MudraMentors from "./@MudraMentors/page";
import OurCommunity from "./@OurCommunity/page";
import WaitingFor from "./@WaitingFor/page";
import heading from "@/public/headings.json"
import TransformYourFinancial from "../components/@TransformYourFinancial/page";

export const metadata = {
  title: heading.TermsAndCondition.title,
  description: heading.TermsAndCondition.description,
  keywords: heading.TermsAndCondition.keywords,
  alternates: { canonical: heading.TermsAndCondition.canonical },
  
};
const page = () => {
  return (
    <>
      <AboutTeam />
      <MudraMentors />
      <OurCommunity />
      <WaitingFor />
      <TransformYourFinancial />
    </>
  );
};

export default page;
