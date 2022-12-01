import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import BarChart from "./components/BarChart";
import {Data2} from './utils/Data2';
import { useState } from "react";
import TableRow from "./components/TableRow";


const Frequent = () => {
  const tblRows = []
  for (let i=0; i< 8; i++){
    tblRows.push(<TableRow id={i.toString()} text="Sample Text"/>)
  }
  const [chartData, setChartData] = useState({
    labels: Data2.map((data) => data.year),
    datasets: [
      {
        label: "Sample Data",
        data: Data2.map((data) => data.userGain),
        backgroundColor: "orange",
      },
    ],
  });
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Most Frequent Words"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-6">
          <div className="flex flex-row items-center justify-center h-full w-full">
            <BarChart chartData={chartData}/>
          </div>
          <div className="flex flex-col space-y-4 h-full w-full items-center justify-center ml-6">
            {tblRows}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Frequent;
