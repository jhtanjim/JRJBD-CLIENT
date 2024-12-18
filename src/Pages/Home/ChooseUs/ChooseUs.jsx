import React from 'react';
import {
  FaArtstation,
  FaChartLine,
  FaDrum,
  FaFileInvoice,
  FaGuitar,
  FaLaptopCode,
  FaMicrophone,
  FaMobileAlt,
  FaMoneyBillAlt,
  FaMusic,
  FaNetworkWired,
  FaPhoenixSquadron,
} from "react-icons/fa";
import { GiShipWheel } from 'react-icons/gi';
import { IoMdBoat } from 'react-icons/io';
import { MdOutlineSentimentSatisfied } from 'react-icons/md';
import { SiCoronaengine } from 'react-icons/si';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
const ChooseUs = () => {
  return (
    <div className='max-w-screen-xl lg:mx-auto mx-4 my-20'>
        <div className="ms-4">
        <p className="font-bold text-[#F86518]">Why You CHoose Us</p>
        <h1 className="lg:text-5xl text-xl pt-1 font-bold lg:mb-10 text-[#05345E]">
          Featured service that we Provide
        </h1>
      </div>
      {/* card */}
      <div className="grid lg:grid-cols-3   gap-8">
        <div
          className="service card w-full lg:w-full bg-fuchsia-50 border  hover:bg-[#05345E] hover:text-white
              hover:border  hover:border-black
              bg-transparent 
               px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
            <MdOutlineSentimentSatisfied />

            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Satisfaction
          </h2>
          <p className="text-xs  text-center mt-2 pb-10  opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. .{" "}
          </p>
        </div>
        <div
          className="service card w-full lg:w-full bg-fuchsia-50 border  hover:bg-[#05345E] hover:text-white
              hover:border  hover:border-black
              bg-transparent 
               px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
            <FaMoneyBillAlt />


            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
          Moneyback Gurantee
          </h2>
          <p className="text-xs  text-center mt-2 pb-10  opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. .{" "}
          </p>
        </div>
        <div
          className="service card w-full lg:w-full bg-fuchsia-50 border  hover:bg-[#05345E] hover:text-white
              hover:border  hover:border-black
              bg-transparent 
               px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
            <VscWorkspaceTrusted />


            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
           Trusted
          </h2>
          <p className="text-xs  text-center mt-2 pb-10  opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. .{" "}
          </p>
        </div>
      
      
     
      </div>
    </div>
  );
};

export default ChooseUs;