import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import BarChart from "./components/BarChart";
import {Data2} from './utils/Data2';
import { useState } from "react";


const Frequent = () => {
  const [chartData, setChartData] = useState({
    labels: Data2.map((data) => data.year),
    datasets: [
      {
        label: "Sample Data",
        data: Data2.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Most Frequent Words"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-6">
          <div className="flex flex-row items-center justify-center h-full w-2/5">
            <BarChart chartData={chartData}/>
          </div>
          <div className="flex flex-col space-y-4 h-full w-full items-center justify-center ml-6">
            <div className="flex flex-row w-full h-auto space-x-4">
              <div className="flex items-center justify-center w-1/12 h-full bg-gray-400">
                <p className="font-bold text-xl py-4">1</p>
              </div>
              <div className="flex items-center justify-center w-full h-full bg-gray-300">
                <p className="font-light text-xl py-4">Sample Data</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-auto space-x-4">
              <div className="flex items-center justify-center w-1/12 h-full bg-gray-400">
                <p className="font-bold text-xl py-4">2</p>
              </div>
              <div className="flex items-center justify-center w-full h-full bg-gray-300">
                <p className="font-light text-xl py-4">Sample Data</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-auto space-x-4">
              <div className="flex items-center justify-center w-1/12 h-full bg-gray-400">
                <p className="font-bold text-xl py-4">3</p>
              </div>
              <div className="flex items-center justify-center w-full h-full bg-gray-300">
                <p className="font-light text-xl py-4">Sample Data</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-auto space-x-4">
              <div className="flex items-center justify-center w-1/12 h-full bg-gray-400">
                <p className="font-bold text-xl py-4">4</p>
              </div>
              <div className="flex items-center justify-center w-full h-full bg-gray-300">
                <p className="font-light text-xl py-4">Sample Data</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-auto space-x-4">
              <div className="flex items-center justify-center w-1/12 h-full bg-gray-400">
                <p className="font-bold text-xl py-4">5</p>
              </div>
              <div className="flex items-center justify-center w-full h-full bg-gray-300">
                <p className="font-light text-xl py-4">Sample Data</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-auto space-x-4">
              <div className="flex items-center justify-center w-1/12 h-full bg-gray-400">
                <p className="font-bold text-xl py-4">6</p>
              </div>
              <div className="flex items-center justify-center w-full h-full bg-gray-300">
                <p className="font-light text-xl py-4">Sample Data</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-auto space-x-4">
              <div className="flex items-center justify-center w-1/12 h-full bg-gray-400">
                <p className="font-bold text-xl py-4">7</p>
              </div>
              <div className="flex items-center justify-center w-full h-full bg-gray-300">
                <p className="font-light text-xl py-4">Sample Data</p>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Frequent;
