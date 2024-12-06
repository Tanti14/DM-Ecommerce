import React from "react";
import { Navbar } from "../navbar/navbar";
import { FooterSection } from "../../components/footer/footer_section";
import { Toaster } from "sonner";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Toaster />
      <FooterSection />
    </div>
  );
};
