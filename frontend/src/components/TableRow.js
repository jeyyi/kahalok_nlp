import React from "react";

function TableRow({id, text}) {
  return (
    <div className="flex flex-row w-full h-auto space-x-4">
      <div className="flex items-center justify-center w-1/12 h-full bg-gray-400">
        <p className="font-bold text-xl py-4">{id}</p>
      </div>
      <div className="flex items-center justify-start w-full h-full bg-gray-300 pl-5">
        <p className="font-light text-xl py-4">{text}</p>
      </div>
    </div>
  );
}

export default TableRow;
