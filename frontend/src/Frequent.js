import { React, useState, useEffect } from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import BarChart from "./components/BarChart";
import TableRow from "./components/TableRow";
import axios from "axios";

const Frequent = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});
  const tblRows = [];

  useEffect(() => {
    // axios.get("http://localhost:8000/frequent").then((result) => {
    //   setData(result.data);
    // });
    const getData = async () => {
      const response = await fetch("http://localhost:8000/frequent");
      setData(await response.json())
    }
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const mappedData = data.map((tempdata) => ({
        word: tempdata.word,
        number: tempdata.number,
      }));

      setChartData({
        labels: mappedData.map((tempdata) => tempdata.word),
        datasets: [
          {
            label: "No. of words",
            data: mappedData.map((tempdata) => tempdata.number),
            backgroundColor: "orange",
          },
        ],
      });
    }
  }, [data]);
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Most Frequent Words"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-6">
          <div className="flex flex-row items-center justify-center h-full w-full">
            {Object.keys(chartData).length > 0 && (
              <BarChart chartData={chartData} />
            )}
          </div>
          <div className="flex flex-col space-y-4 h-full w-full items-center justify-center ml-6">
            <div className="hidden">
              {data
                .slice(0,8)
                .map((tempdata, i) =>
                  tblRows.push(
                    <TableRow
                      key={i}
                      id={(i + 1).toString()}
                      text={tempdata.word}
                    />
                  )
                )}
            </div>
            {tblRows}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequent;
