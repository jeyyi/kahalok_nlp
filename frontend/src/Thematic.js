import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";

const Thematic = () => {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Thematic Analysis"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-2 space-x-4">
          <div className="flex flex-row w-4/5 bg-white rounded-2xl">     
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
