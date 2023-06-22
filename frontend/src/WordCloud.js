import React from "react";
import Header from "./components/Header";
import Neck from "./components/Neck";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingBar from "./components/LodingBar";

const WordCloud = () => {
  const [imgURL, setImgURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        // const response = await axios.get("http://localhost:8000/wordcloud", {
        //   responseType: "blob",
        // });
        // const blob = new Blob([response.data], {
        //   type: response.headers["content-type"],
        // });
        // const url = URL.createObjectURL(blob);

        const response = await fetch("http://localhost:8000/wordcloud");
        const url = URL.createObjectURL(await response.blob());

        setImgURL(url);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000); //add a delay of 1 second
      }
    }
    fetchData();
  }, []);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imgURL;
    link.download = "wordcloud.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log("imageUrl:", imgURL);

  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Neck tempTitle={"Wordcloud"}></Neck>
      <div className="px-32 h-screen">
        <div className="flex flex-row h-2/3 bg-white rounded-b-xl p-2">
          <div className="flex row w-4/5 h-full bg-white">
            <div className="flex h-full w-1/2">
              {isLoading ? (
                 <div className="flex flex-col justify-start items-center w-full p-10">
                 <p>Loading...</p>
                 <LoadingBar/>
               </div>
              ) : (
                <Zoom>
                  <img src={imgURL} alt="Bigram" width={650} />
                </Zoom>
              )}
            </div>
            <div className="flex flex-col h-full w-1/2 space-y-8 mt-8">
              <p className="font-bold text-5xl text-gray-800">WordCloud</p>
              <p className="text-gray-600 text-base justify-evenly">
                A word cloud is a visual representation of text data, where the
                most frequently used words in a given body of text are displayed
                in a graphic form, with the size of the word indicating its
                frequency or importance. The words are typically arranged in
                random order and often displayed in different colors or fonts to
                create an aesthetically pleasing design. Word clouds are used to
                quickly summarize the most important topics, themes or keywords
                in a body of text, making them useful for analyzing large
                datasets, identifying trends and patterns, and visualizing
                complex information in a simple, easy-to-understand format.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/5 px-12">
            <button
              className="bg-blue-900 text-white w-full h-14 text-2xl font-bold"
              onClick={() => window.location.reload(true)}
            >
              Retrain
            </button>
            <button
              className="bg-green-600 text-white w-full h-14 text-2xl font-bold"
              onClick={() => downloadImage()}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCloud;
