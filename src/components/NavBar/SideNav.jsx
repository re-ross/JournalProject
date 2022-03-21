import React from "react";
import SideNavHeader from "./SideNavHeader";
import SideNavMenu from "./SideNavMenu";
import SideNavFooter from "./SideNavFooter";

const SideNav = ({ activePage, setActivePage }) => {
  return (
    <div className="flex flex-col bg-[#9ab973] text-green-50 px-6 py-4">
      <SideNavHeader />
      <SideNavMenu activePage={activePage} setActivePage={setActivePage} />
      <SideNavFooter />
    </div>
  );
};

export default SideNav;
