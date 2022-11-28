import React from "react";
import Modal from "./Modal";
import WBtn from "./WBtn";
import { useNavigate } from 'react-router-dom';
const Neck = () => {
  const navigate = useNavigate();
  return (
    <div className="px-32">
      <div className="flex flex-items-stretch bg-light-grey justify-between py-4">
        <p className="text-2xl text-blue-900 font-bold">
          Visual Analytic Toolkit
        </p>
        <button class="bg-blue-900 hover:bg-white hover:text-blue-900 text-white font-bold py-2 px-4 rounded inline-flex items-center h-10"
        onClick = {()=>navigate('../')}>
          <span>Back</span>
        </button>
      </div>
      <div className="flex flex-items-stretch bg-light-grey justify-between py-4">
        <div className="flex justify-start space-x-6">
          <p className="text-xl font-bold">English Analytics</p>
          <Modal />
        </div>
      </div>
      <div className="flex w-full bg-blue-900 rounded-t-2xl h-full items-center">
        <div className="flex justify-start px-6 py-4 w-1/4">
          <p className="text-white font-bold text-xl">Bigram Analysis</p>
        </div>
        <div className="flex justify-end px-6 py-2 space-x-4 w-full">
        <button className="justify-center bg-white rounded-lg py-1.5 px-8 w-auto">Bicolano</button>
        <button className="justify-center bg-white rounded-lg py-1.5 px-8 w-auto">English</button>
        <button className="justify-center bg-white rounded-lg py-1.5 px-8 w-auto">Filipino</button>
        <button className="justify-center bg-white rounded-lg py-1.5 px-8 w-auto">Ilokano</button>
        </div>
      </div>
    </div>
  );
}

export default Neck;
