import React from "react";
import SideNavigation from "../components/sideNavOne";

const Layout = () => {
  return (
    <div className="grid grid-cols-12 gap-x-[54px] h-screen overflow-hidden bg-[#e6e6e6]">
      <SideNavigation />
      <div className="col-span-12 lg:col-span-9 h-10 bg-red-500"></div>
    </div>
  );
};

export default Layout;
