"use client";
import React, { useEffect } from "react";

const ClientComponent = () => {
  useEffect(() => {
    localStorage.setItem("loanType", "businessLoan");
  }, []);
  return <></>;
};

export default ClientComponent;
