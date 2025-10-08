import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Liko - Services page",
};

const ServicesPage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicesPage;
