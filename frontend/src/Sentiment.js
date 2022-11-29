import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";

const Sentiment = () => {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Sentiment Analysis"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-2"></div>
      </div>
    </div>
  );
}

export default Sentiment;
