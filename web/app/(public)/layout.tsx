import React from "react";
import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";

const PublicPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      <section className="flex-1">{children}</section>
      <Footer />
    </div>
  );
};

export default PublicPageLayout;
