import { useState, React } from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import ScatterChart from "./components/ScatterChart";
import { Data } from "./utils/Data";

const Clustering = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Results ",
        data: Data.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Clustering"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-2">
          <div className="w-3/5">
            <ScatterChart chartData={chartData} />
          </div>
          <div className="flex flex-col p-10 w-2/5 h-full space-y-10">
            <p className="text-gray-700 text-6xl font-bold">Results</p>
            <p className="font-light text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis purus nec hendrerit congue. Proin sit amet dui id nisl
              rhoncus tempus nec sed nisl. Donec in lectus molestie, fringilla
              nunc ut, elementum mauris. Etiam ut feugiat purus. Aenean sit amet
              sem a neque vulputate tincidunt nec a quam. In nec metus et metus
              rutrum varius sed ut elit. Vivamus condimentum tellus velit, eget
              porttitor dolor varius et. Nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clustering;
