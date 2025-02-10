"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAnchor, FaShip, FaWater, FaCompass } from "react-icons/fa";

const Boat = () => {
  const { id } = useParams();
  const [boat, setBoat] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch("/boat.json")
      .then((res) => res.json())
      .then((data) => {
        const boatData = data[id];
        if (boatData) {
          setBoat(boatData);
          setSelectedImage(boatData.images[0]);
        }
      });
  }, [id]);

  if (!boat) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-gray-900 mb-10 text-center"
        >
          {boat.model}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Boat Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl mb-6 aspect-w-16 aspect-h-9">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt={boat.model}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {boat.images.map((img, index) => (
                <img
                  key={index}
                  src={img || "/placeholder.svg"}
                  alt={`Boat ${index + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-full h-24 object-cover rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                    selectedImage === img
                      ? "ring-4 ring-blue-500 scale-105"
                      : "hover:scale-105"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Boat Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <FaShip className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                Specifications
              </h2>
            </div>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                <span className="font-semibold">Size:</span> {boat.size}
              </p>
              <p>
                <span className="font-semibold">Engine:</span> {boat.engine}
              </p>
            </div>

            <div className="mt-10">
              <div className="flex items-center mb-6">
                <FaAnchor className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Key Features
                </h2>
              </div>
              <ul className="space-y-3">
                {Object.entries(boat.features).map(([key, value]) => (
                  <li key={key} className="flex items-center text-gray-600">
                    <FaCompass className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="capitalize">
                      {key.replace("_", " ")}:
                    </span>{" "}
                    <span className="ml-2 font-medium">
                      {Array.isArray(value) ? value.join(", ") : value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <div className="flex items-center mb-6">
                <FaWater className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Pricing</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(boat.price).map(([size, price]) => (
                  <div
                    key={size}
                    className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md hover:bg-blue-100"
                  >
                    <p className="text-xl font-bold text-blue-800">{size}</p>
                    <p className="text-2xl font-extrabold text-blue-600">
                      ${Number(price).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl shadow-2xl p-8"
        >
          <div className="flex items-center mb-6">
            <FaShip className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">More Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-600">
            <p>
              <span className="font-semibold">Finish:</span> {boat.finish}
            </p>
            <p>
              <span className="font-semibold">Lead Time:</span> {boat.lead_time}
            </p>
            <p>
              <span className="font-semibold">Payment Terms:</span>{" "}
              {boat.payment_terms}
            </p>
            <p>
              <span className="font-semibold">Shipment:</span> {boat.shipment}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Boat;
