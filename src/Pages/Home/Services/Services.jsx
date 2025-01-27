import React from "react";
import {
  FaArtstation,
  FaChartLine,
  FaDharmachakra,
  FaDrum,
  FaFileInvoice,
  FaGuitar,
  FaLaptopCode,
  FaMicrophone,
  FaMobileAlt,
  FaMusic,
  FaNetworkWired,
  FaPhoenixSquadron,
} from "react-icons/fa";
import { GiPowerGenerator, GiShipWheel } from "react-icons/gi";
import { IoMdBoat } from "react-icons/io";
import { SiCoronaengine } from "react-icons/si";
const Services = () => {
  return (
    <div className="max-w-screen-xl lg:mx-auto mx-4">
      <div className="ms-4">
        <p className="font-bold text-[#F86518]">OUR SERVICES</p>
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
              <IoMdBoat />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Boat
          </h2>
          <p className="text-xs  text-center mt-2 pb-10  opacity-70">
            We have three types of lifeboats- open lifeboats, fully enclosed
            lifeboats and slope lifeboats. These lifeboats we collect from the
            ship recycling yard at Chittagong, Bangladesh
          </p>
        </div>
        <div
          className="service card w-full lg:w-full bg-[#05345E] border  hover:bg-[#05345E] hover:text-white
              hover:border  hover:border-black
              bg-transparent 
               px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
              <GiShipWheel />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Motor
          </h2>
          <p className="text-xs  text-center mt-2 pb-10  opacity-70">
            We have various kinds of inboard and outboard diesel engines - Bukh,
            Yanmar,Yamaha, Sabb Motor, Lister Peter ,Nanni,Daihatsu, Volvo penta
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
              <SiCoronaengine />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Marine Equipment
          </h2>
          <p className="text-xs  text-center mt-2 pb-10  opacity-70">
            Lots of marine equipment we have stock. These are original and used
            - Navigation light, braz light, Compass, Radar, Life jackets, fire
            Extinguish, Anchor, Searchlight etc.
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
              <FaDharmachakra />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Ship Chandling
          </h2>
          <p className="text-xs  text-center mt-2 pb-10  opacity-70">
            We provide a wide range of ship supplies, including food, fuel, and
            maintenance equipment, ensuring all your vessel's needs are met
            efficiently.
          </p>
        </div>
        <div
          className="service card w-full lg:w-full bg-[#05345E] border  hover:bg-[#05345E] hover:text-white
              hover:border  hover:border-black
              bg-transparent 
               px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
              <GiPowerGenerator />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Generator
          </h2>
          <p className="text-xs  text-center mt-2 pb-10  opacity-70">
            Our generators are reliable, durable, and sourced from top brands to
            provide uninterrupted power for your marine and industrial
            applications.
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
              <SiCoronaengine />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Marine Equipment
          </h2>
          <p className="text-xs  text-center mt-2 pb-10  opacity-70">
            We stock a variety of original marine equipment, including
            navigation lights, compasses, radars, life jackets, anchors, and
            searchlights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
