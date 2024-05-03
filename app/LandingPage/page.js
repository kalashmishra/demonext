import React from "react";
import WhyMillions from "./@WhyMillions/page";
import ResponsibleCredit from "./@ResponsibleCredit/page";
import LatestBlog from "./@LatestBlog/page";
import AvoidPitfalls from "./@AvoidPitfalls/page";
import ShortTerm from "./@ShortTerm/page";
import LandingPartners from "./@LandingParteners/page";
import heading from "@/public/headings.json";
import ClientComponent from "../components/ClientComponent";


export const metadata = {
  title: heading.landingPage.title,
  description: heading.landingPage.description,
  keywords: heading.landingPage.keywords,
  alternates: { canonical: heading.landingPage.canonical },
};
const LandingPage = () => {

  return (
    <>
      <ClientComponent />
      <ShortTerm />
      <WhyMillions />
      <ResponsibleCredit />
      <LandingPartners />
      <LatestBlog />
      <AvoidPitfalls />
    </>
  );
};

export default LandingPage;
