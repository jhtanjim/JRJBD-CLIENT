import React from "react";
import parts1 from "../../../assets/images/About/about 1.jpg";
import parts2 from "../../../assets/images/About/about 2.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mb-32">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src={parts1}
              alt="About Part 1"
              className="w-3/4 rounded-lg shadow-2xl"
              loading="lazy" // Lazy load the image
              width="100%" // Responsive width
              height="auto" // Responsive height
            />
            <img
              src={parts2}
              alt="About Part 2"
              className="w-1/2 rounded-lg border-white border-8 shadow-2xl absolute right-5 top-1/2"
              loading="lazy" // Lazy load the image
              width="100%" // Responsive width
              height="auto" // Responsive height
            />
          </div>
          <div className="lg:w-1/2 p-4 space-y-3">
            <div className="max-w-screen-xl lg:flex gap-8 lg:mx-auto mx-4 items-center my-20">
              {/* Content */}
              <div>
                {/* <h2 className="lg:text-xl font-bold text-orange-500">
                  About Us
                </h2> */}
                <h2 className="lg:text-4xl text-xl font-extrabold text-orange-500 my-2">
                  ABOUT JRJBD
                </h2>
                <p className="text-sm font-semibold opacity-50 my-4">
                  JRJ BD most experience exporter of marine equipment, used
                  lifeboat, renovation lifeboat and diesel engine also. we are
                  located at Chattogram, Bangladesh and we have almost 10 years
                  experience about international business. The founder late
                  Tajul Islam Babor established JRJ BD in 2003
                </p>

                <Link to="login">
                  <button className="bg-[#05345E] text-[#FFFFFF] hover:bg-[#F86518] py-2 px-6 rounded lg:text-xl text-xs font-semibold transition duration-300 ease-in-out transform hover:scale-105 mt-4">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
