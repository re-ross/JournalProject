import React from "react";
import CogSvg from "../svgs/CogSvg";

const SideNavFooter = () => {
  return (
    <div>
      <a
        href="#settings"
        className="absolute bottom-0 h-16 w-16 flex items-center h-10 mt-auto px-3 no-underline text-green-50 opacity-70 hover:opacity-100"
      >
        <CogSvg />
        <div className="pl-2">Settings</div>
      </a>
    </div>
  );
};

export default SideNavFooter;
