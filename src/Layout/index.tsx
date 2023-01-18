import React, { useState } from "react";
import { Box } from "@mui/material";
import SideBar from "components/SideBar/SideBar";
import Header from "./Header";
import Footer from "./Footer";

export interface props {
  children?: React.ReactNode;
}
const LayoutWithLogin = ({ children }: props) => {
  const [isactive, setIsActive] = useState(false);

  return (
    <Box className={`main_components ${isactive ? "active" : "not-active"}`}>
      <Header setIsActive={setIsActive} />
      <SideBar />
      {children}
      <Footer />
    </Box>
  );
};

export default LayoutWithLogin;
