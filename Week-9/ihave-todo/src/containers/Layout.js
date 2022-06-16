import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        {/* <SideBar /> */}
        {/* <Backdrop /> */}
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
