import React from "react";

const NavItem = ({ activePage, link, svgIcon, title, setActivePage }) => {
  return (
    <a
      onClick={() => setActivePage(title)}
      href={link}
      className={`flex items-center no-underline text-green-50 hover:text-green-100 p-3 rounded-md ${
        activePage === title ? "bg-[#648141]" : ""
      }`}
    >
      {svgIcon}
      <div className="font-bold pl-3">{title}</div>
    </a>
  );
};

export default NavItem;
