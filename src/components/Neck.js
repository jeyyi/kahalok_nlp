import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Neck = ({tempTitle}) => {
  const [title,setTitle] = useState(tempTitle);
  const navigate = useNavigate();
  return (
    <div className="px-32">
      <div className="flex flex-items-stretch bg-light-grey justify-between py-4">
        <p className="text-2xl text-blue-900 font-bold">
          Visual Analytic Toolkit
        </p>
        <button className="bg-blue-900 hover:bg-white hover:text-blue-900 text-white font-bold py-2 px-4 rounded inline-flex items-center h-10"
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
          <p className="text-white font-bold text-xl">{title}</p>
        </div>
        <div className="flex justify-end px-6 py-2 space-x-4 w-full">
        <button className={`justify-center ${title === "Bikol Analysis" ? "bg-yellow-500" : "bg-white"} rounded-lg py-1.5 px-8 w-auto`}
        onClick={()=> setTitle('Bikol Analysis')}>Bicolano</button>
        <button className={`justify-center ${title === "English Analysis" ? "bg-yellow-500" : "bg-white"} rounded-lg py-1.5 px-8 w-auto`}
        onClick={()=> setTitle('English Analysis')}>English</button>
        <button className={`justify-center ${title === "Filipino Analysis" ? "bg-yellow-500" : "bg-white"} rounded-lg py-1.5 px-8 w-auto`}
        onClick={()=> setTitle('Filipino Analysis')}>Filipino</button>
        <button className={`justify-center ${title === "Ilokano Analysis" ? "bg-yellow-500" : "bg-white"} rounded-lg py-1.5 px-8 w-auto`}
        onClick={()=> setTitle('Ilokano Analysis')}>Ilokano</button>
        </div>
      </div>
    </div>
  );
}

export default Neck;