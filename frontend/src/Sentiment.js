import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import { Data } from "./utils/Data";
import { useState } from "react";
import PieChart from "./components/PieChart";
const Sentiment = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Statemens ",
        data: Data.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Sentiment Analysis"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-8 space-x-8">
          <div className="flex flex-row h-full items-center p-2 w-1/3">
            <div className="h-full w-full">
              <PieChart chartData={chartData} />
            </div>
          </div>
          <div className="flex flex-col pb-10 w-2/3">
            {/* Start of positive Statement */}
            <div className="flex flex-col h-1/3 bg-white space-y-10">
              <div className="flex justify-center items-center bg-green-800 w-1/4 h-auto">
                <p className="text-white font-medium text-xl">
                  Positive Statement
                </p>
              </div>
              <div className="flex justify-center items-center bg-gray-200 w-full h-auto p-5">
                <p className="text-black font-light text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pulvinar sapien a lectus placerat maximus. Nullam vulputate
                  velit ultricies, iaculis erat eu,
                </p>
              </div>
            </div>
            {/* End of positive Statement, Start of Neutral */}
            <div className="flex flex-col h-1/3 bg-white space-y-10">
              <div className="flex justify-center items-center bg-blue-500 w-1/4 h-auto">
                <p className="text-white font-medium text-xl">
                  Neutral Statement
                </p>
              </div>
              <div className="flex justify-center items-center bg-gray-200 w-full h-auto p-5">
                <p className="text-black font-light text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pulvinar sapien a lectus placerat maximus. Nullam vulputate
                  velit ultricies, iaculis erat eu,
                </p>
              </div>
            </div>
             {/* End of positive Neutral, Start of Negative */}
             <div className="flex flex-col h-1/3 bg-white space-y-10">
              <div className="flex justify-center items-center bg-red-500 w-1/4 h-auto">
                <p className="text-white font-medium text-xl">
                  Negative Statement
                </p>
              </div>
              <div className="flex justify-center items-center bg-gray-200 w-full h-auto p-5">
                <p className="text-black font-light text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pulvinar sapien a lectus placerat maximus. Nullam vulputate
                  velit ultricies, iaculis erat eu,
                </p>
              </div>
            </div>
            {/* End of Negative */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
