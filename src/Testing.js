import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/thematic-analysis");
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/thematic-analysis?txt=${encodeURIComponent(
      text
    )}`;
    await axios.post(url);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
    setText("");
    fetchData();
  };

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/thematic-analysis");
    setData(result.data);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold mb-4">Thematic Analysis</h1>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="my-8">
          <textarea
            className="w-full h-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter text here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Add Text
          </button>
        </form>
      </div>
      {showAlert && (
        <motion.div
          className="fixed inset-x-0 top-0 mx-auto p-2 bg-green-500 text-white text-center rounded-full w-1/6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <span>Text added</span>
        </motion.div>
      )}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Cluster Num</th>
            <th className="px-4 py-2">Topic Word</th>
            <th className="px-4 py-2">Occurrence</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.topic_word}>
              <td className="border px-4 py-2">{item.cluster_num}</td>
              <td className="border px-4 py-2">{item.topic_word}</td>
              <td className="border px-4 py-2">{item.occurrence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
