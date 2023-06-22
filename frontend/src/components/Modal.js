import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Modal = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="mx-auto shadow-xl justify-center items-center bg-green-700 hover:bg-white hover:text-green-700 text-white font-bold py-2 px-4 rounded-lg inline-flex h-8 w-48"
        onClick={() => setShowModal(true)}
      >
        Choose Feature
      </button>
      {showModal ? (
        <>
          <div className="flex fixed justify-center opacity-50 inset-0 z-40 min-h-screen"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-auto bg-[#36408d] outline-none focus:outline-none">
                <div className="flex items-start justify-between pt-8 pb-0 pl-8 pr-8 rounded-t ">
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold text-white">
                      Choose Feature
                    </h3>
                    <p className="text-white">Sample Description</p>
                  </div>
                  <button
                    className="bg-yellow-500 hover:bg-white hover:text-yellow-500 text-black font-bold py-2 px-4 rounded inline-flex items-center h-10"
                    onClick={() => setShowModal(false)}
                  >
                    <span>Back</span>
                  </button>
                </div>
                <div className="p-8 items-center w-full space-y-3">
                  <button className="w-full bg-white rounded-lg h-12 text-2xl font-medium hover:bg-yellow-500"
                  onClick = {()=> navigate('../bigram', { replace: false })}>
                    Bigram Analysis
                  </button>
                  {/*
                  }
                  <button className="w-full bg-white rounded-lg h-12 text-2xl font-medium hover:bg-yellow-500"
                  onClick={()=> navigate('../clustering', {replace : false})}>
                    Clustering
                  </button>
                */}
                  <button className="w-full bg-white rounded-lg h-12 text-2xl font-medium hover:bg-yellow-500"
                  onClick = {()=> navigate('../frequent', { replace: false })}>
                    Most Frequent Word
                  </button>
                  <button className="w-full bg-white rounded-lg h-12 text-2xl font-medium hover:bg-yellow-500"
                  onClick = {()=> navigate('../wordcloud', { replace: false })}>
                    WordCloud
                  </button>
                  <button className="w-full bg-white rounded-lg h-12 text-2xl font-medium hover:bg-yellow-500"
                  onClick = {()=> navigate('../sentiment', { replace: false })}>
                    Sentiment Analysis
                  </button>
                  <button className="w-full bg-white rounded-lg h-12 text-2xl font-medium hover:bg-yellow-500"
                  onClick = {()=> navigate('../thematic', { replace: false })}>
                    Thematic Analysis
                  </button>
                </div>
                <div className="flex items-center justify-end p-2 border-solid border-blueGray-200 rounded-b w-3/4"></div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
