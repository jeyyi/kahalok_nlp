import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import PBigram from "./Assets/bigram.png";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const Bigram = () => {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Bigram Analysis"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-2">
          <div className="flex w-4/5 h-full bg-white">
            <Zoom>
            <img src={PBigram} alt="Bigram" width={650}/></Zoom>
            {/* insert bigram image here */}
          </div>
          <div className="flex flex-col w-1/5 px-4">
            <button className="bg-blue-900 text-white w-full h-14 text-2xl font-bold">
              Retrain
            </button>
            <button className="bg-green-600 text-white w-full h-14 text-2xl font-bold">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bigram;
