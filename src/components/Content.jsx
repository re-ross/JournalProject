import React from "react";

const Content = ({ activePage }) => (
  <div className="flex flex-col">
    <div className="text-xl font-bold text-gray-600 border-b-2 border-[#9ab973] pt-6 pb-2 px-6">
      {activePage}
    </div>
    <div className="flex-1 my-6 mx-6 border-8 border-gray-200 rounded-xl border-solid"></div>
  </div>
);

export default Content;
