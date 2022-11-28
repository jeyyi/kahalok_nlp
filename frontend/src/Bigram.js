import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
document.body.style.overflow = "hidden";
const Bigram = () => {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-2">
          <div className="flex bg-gray-200 w-4/5 h-full">
            {/* insert bigram image here */}
          </div>
          <div className="flex flex-col w-1/5 px-4">
            <button className="bg-blue-900 text-white w-full h-14 text-2xl font-bold">Retrain</button>
            <button className="bg-orange-600 text-white w-full h-14 text-2xl font-bold">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bigram;
