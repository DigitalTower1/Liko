import React from "react";
import { Metadata } from "next";
import HomeElevenMain from "@/pages/homes/home-11";

export const metadata: Metadata = {
  title: "Liko - Portfolio",
};

const PortfolioPage = () => {
  return (
    <HomeElevenMain/>
  );
};

export default PortfolioPage;
