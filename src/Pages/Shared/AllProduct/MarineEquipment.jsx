import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCogs, FaChevronLeft, FaImage } from "react-icons/fa";

const MarineEquipment = () => {
  const { id } = useParams();
  const [marineEquipment, setMarineEquipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the marine equipment data
    fetch("/marineEquipment.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const selectedEquipment = data.find((item) => item.id === parseInt(id));
        if (selectedEquipment) {
          setMarineEquipment(selectedEquipment);
        } else {
          setError("No equipment found with this ID");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch equipment data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.div
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 text-red-500 text-xl">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="py-10 px-6 max-w-screen-lg mx-auto">
      {/* Title with icon */}
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold text-center mb-6 text-gray-800 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaCogs className="text-blue-600 mr-3" />
        {marineEquipment.name}
      </motion.h1>

      {/* Main Content - Image and Description */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={marineEquipment.images[0]} // Assuming the first image is the main one
            alt={marineEquipment.name}
            className="w-full rounded-lg shadow-lg mb-6 lg:mb-0"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            {marineEquipment.description}
          </p>
          <Link to={"/allProduct"}>
            {" "}
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="mr-2" />
              back to All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <motion.h2
        className="text-2xl sm:text-3xl font-medium mb-6 text-center text-gray-800 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaImage className="text-blue-600 mr-2" />
        Gallery
      </motion.h2>

      {/* Gallery Images */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {marineEquipment.images.map(
          (img, index) =>
            img && (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img}
                  alt={`Equipment image ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            )
        )}
      </motion.div>
    </div>
  );
};

export default MarineEquipment;
