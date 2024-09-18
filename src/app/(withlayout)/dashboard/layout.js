import Footer from "@/components/shared/Footer/page";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
