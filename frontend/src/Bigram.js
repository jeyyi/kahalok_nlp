import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import { Data } from "./utils/Data";
import { Data2 } from "./utils/Data2"
import {useState} from 'react';
import PieChart from "./components/PieChart";
const Bigram = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Bigram Analysis"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-2">
          <div className="flex bg-gray-200 w-4/5 h-full">
            <PieChart chartData = {chartData}/>
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
