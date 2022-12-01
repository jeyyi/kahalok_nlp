import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import TableRow from "./components/TableRow";

const Thematic = () => {
  const tblRows = [];
  for (let i = 1 ; i < 7 ; i++){
    tblRows.push(<TableRow id = {i.toString()} text = {"Sample Topic"}/>)
  }
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Thematic Analysis"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-6 space-x-4">
          <div className="flex flex-col w-4/5 space-y-4">
            <p className="font-bold text-2xl">Top 6 Topics</p>
            {tblRows}
          </div>
          <div className="flex flex-col h-full w-1/5 bg-gray-200">
            <div className="items-center h-1/6">
              <div className="flex items-center justify-center h-3/4 bg-blue-900">
                <p className="text-2xl font-bold text-white">Filter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thematic;
