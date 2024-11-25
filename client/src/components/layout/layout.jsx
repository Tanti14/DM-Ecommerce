import React from "react";
import { Navbar } from "../navbar/navbar";
import { FooterSection } from "../../components/footer/footer_section";
import { Toaster } from "sonner";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-[125px]">{children}</div>
      <Toaster />
      <FooterSection />
    </div>
  );
};
