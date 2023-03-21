import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
const Bigram = () => {
  const [imgURL, setImgURL] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await axios.get("http://localhost:8000/bigram", {
          responseType: "blob",
        });
        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        const url = URL.createObjectURL(blob);
        setImgURL(url);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(()=> setIsLoading(false), 1000); //add a delay of 1 second
      }
    }
    fetchData();
  }, []);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imgURL;
    link.download = "myImage.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log('imageUrl:', imgURL);

  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Bigram Analysis"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-2">
          <div className="flex row w-4/5 h-full bg-white">
            <div className="flex h-full w-1/2">
            {
              isLoading? <p>Loading....</p>
              :
              <Zoom>
              <img src={imgURL} alt="Bigram" width={650} />
            </Zoom>
            }
            </div>
            <div className="flex flex-col h-full w-1/2 space-y-8 mt-8">
              <p className= "font-bold text-5xl text-gray-800">
                BIGRAM ANALYSIS
              </p>
              <p className="text-gray-600 text-base justify-evenly">Words correlate with one another, and the choice of first word can significantly change the meaning of the second word. For example, putting “not” before “happy” significantly changes the meaning! A pair of words is called a “bigram”. </p>
            </div>
          </div>
          <div className="flex flex-col w-1/5 px-12">
            <button className="bg-blue-900 text-white w-full h-14 text-2xl font-bold" onClick={()=> window.location.reload(true)}>
              Retrain
            </button>
            <button className="bg-green-600 text-white w-full h-14 text-2xl font-bold" onClick={()=> downloadImage()}>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bigram;
