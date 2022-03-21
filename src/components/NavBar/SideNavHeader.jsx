import React from "react";
import FireSvg from "../svgs/FireSvg";

const SideNavHeader = () => {
  return (
    <div className="flex items-center ml-1 pb-8">
      <FireSvg />
      <a
        href="#home"
        className="text-xl font-bold pl-1 no-underline text-green-50 hover: text-green-100"
      >
        test
      </a>
    </div>
  );
};

export default SideNavHeader;
