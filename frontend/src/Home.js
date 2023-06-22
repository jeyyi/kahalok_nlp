import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import WBtn from "./components/WBtn";
import Modal from "./components/Modal";
<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      {/* Start of div before */}
      <div className="px-32">
        <div className="flex flex-items-stretch bg-light-grey justify-between py-4">
          <p className="text-2xl text-blue-900 font-bold">
            Visual Analytic Toolkit
          </p>
          <button className="bg-blue-900 hover:bg-white hover:text-blue-900 text-white font-bold py-2 px-4 rounded inline-flex items-center h-10">
            <span>Back</span>
          </button>
        </div>
        <div className="flex flex-items-stretch bg-light-grey justify-between py-4">
          <div className="flex justify-start space-x-6">
            <p className="text-xl font-bold">English Analytics</p>
            <Modal />
          </div>
          <div className="flex justify-end space-x-2">
            <WBtn
              color="bg-white "
              hoverColor="hover:bg-blue-900 "
              hoverTextColor="hover:text-white "
              textColor="text-blue-900 "
              text="Bicolano"
            />
            <WBtn
              color="bg-[#fbd200] "
              hoverColor="hover:bg-white "
              hoverTextColor="hover:text-blue-900 "
              textColor="text-white "
              text="English"
            />
            <WBtn
              color="bg-white "
              hoverColor="hover:bg-blue-900 "
              hoverTextColor="hover:text-white "
              textColor="text-blue-900 "
              text="Tagalog"
            />
            <WBtn
              color="bg-white "
              hoverColor="hover:bg-blue-900 "
              hoverTextColor="hover:text-white "
              textColor="text-blue-900 "
              text="Filipino"
            />
          </div>
        </div>
        {/* Start of cards*/}
        <div className="flex justify-between space-x-4 mt-4 w-full">
          <div className="w-1/5">
            <Card title={"Total Respondents"} subtitle={"5000"} />
          </div>
          <div className="w-1/5">
            <Card title={"Bicolano Respondents"} subtitle={"1250"} />
          </div>
          <div className="w-1/5">
            <Card title={"English Respondents"} subtitle={"1000"} />
          </div>
          <div className="w-1/5">
            <Card title={"Ilokano Respondents"} subtitle={"1190"} />
          </div>
          <div className="w-1/5">
            <Card title={"Tagalog Respondents"} subtitle={"1560"} />
          </div>
        </div>
        <div className="flex justify-between space-x-4 mt-4">
          <div className="w-3/4">
            <Card title={"Population Geolocation"} />
          </div>
          <div className="w-1/4">
            <Card title={"Gender"} isPie ={true}/>
          </div>
        </div>
        <div className="flex justify-between space-x-4 mt-4 mb-4">
          <div className="flex justify-between w-3/4 space-x-4">
            <div className="w-1/2">
              <Card title={"Statistics"} isBar = {true}/>
            </div>
            <div className="w-1/2">
              <Card title={"Age"} isBar={true}/>
            </div>
          </div>
          <div className="w-1/4">
            <Card title={"Residence"} isPie= {true} />
          </div>
        </div>
        {/* End of div flex */}
      </div>
    </div>
  );
};

export default Home;
