import { React, useState, useEffect } from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import TableRow from "./components/TableRow";
import axios from "axios";

const Thematic = () => {
  const [data, setData] = useState([]);
  const [tblRows, setTblRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(true)
    axios.get("http://localhost:8000/thematic-analysis")
      .then(response=>{
        setData(response.data)
        console.log("Successful connecting data")
        console.log(data)
      })
      .catch(err=>{
        console.error(err)
      })
      .finally(()=> setTimeout(() => setIsLoading(false), 1000)); // add delay of 1 second
  },[]);
  

  useEffect(() => {
    try {
      const rows = data.map((tempdata, i) => (
        <TableRow id={i + 1} key={i} text={tempdata.topic_words} />
      ));
      setTblRows(rows);
    } catch (err) {
      console.error(err);
    }
  }, [data]);

  return (
    <div className="bg-gray-200">
      <Header />
      <Neck tempTitle={"Thematic Analysis"} />
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-6 space-x-4">
          <div className="flex flex-col w-4/5 space-y-4">
            <p className="font-bold text-2xl">Top Topics</p>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                {tblRows.length === 0 ? (
                  <p>No data found.</p>
                ) : (
                  <>
                    {tblRows}
                  </>
                )}
              </>
            )}
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
