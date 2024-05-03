"use client";
import React, { useEffect } from "react";

const ClientComponent = () => {
  useEffect(() => {
    localStorage.removeItem("loanType");
  }, []);
  return <></>;
};

export default ClientComponent;
