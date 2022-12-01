import {useState, React} from "react";
import 'chart.js/auto';
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import { Data } from "../utils/Data";
 const Card = ({title,subtitle, isPie=false, isBar= false}) => {
  const [chartDataBar, setChartDataBar] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Label",
        data: Data.map((data) => data.userGain),
        backgroundColor: "orange",
      },
    ],
  });
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Statements ",
        data: Data.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div class="max-w-full rounded-2xl overflow-hidden shadow-lg h-72 min-h-full bg-white">
      <div class="flex flex-col px-8 pt-10">
        <div className="flex flex-row w-full">
          <div class="flex-1 font-semibold text-2xl w-1/3 h-full text-gray-500">{title}</div>
          <div className="w-2/3"></div>
        </div>
      </div>
      <div class="px-6 pt-2 max-h-full max-w-full">
      <p class="flex text-gray-800 text-8xl">{subtitle}</p>
      {isPie === true ? <PieChart chartData={chartData} /> : ""}
      {isBar === true? <BarChart chartData={chartDataBar}/> : ""}
      </div>
    </div>
  );
};

export default Card;
