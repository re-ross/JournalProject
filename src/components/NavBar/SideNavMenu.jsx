import React from "react";
import NavItem from "./NavItem";
import ChartPieSvg from "../svgs/ChartPieSvg";
import UsersSvg from "../svgs/UsersSvg";
import ChatAltSvg from "../svgs/ChatAltSvg";

const SideNavMenu = ({ activePage, setActivePage }) => (
  <nav className="space-y-2">
    <NavItem
      activePage={activePage}
      link="#dashboard"
      svgIcon={<ChartPieSvg />}
      title="Dashboard"
      setActivePage={setActivePage}
    />
    <NavItem
      activePage={activePage}
      link="#users"
      svgIcon={<UsersSvg />}
      title="Users"
      setActivePage={setActivePage}
    />
    <NavItem
      activePage={activePage}
      link="#users"
      svgIcon={<ChatAltSvg />}
      title="Messages"
      setActivePage={setActivePage}
    />
  </nav>
);

export default SideNavMenu;
