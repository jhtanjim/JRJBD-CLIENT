import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCogs, FaChevronLeft, FaImage } from "react-icons/fa";

const Engines = () => {
  const { id } = useParams();
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    fetch("/engine.json")
      .then((res) => res.json())
      .then((data) => {
        const foundEngine = data.find((engine) => engine.id === parseInt(id));
        setEngine(foundEngine);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!engine)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <motion.div
          className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    );

  return (
    <div className="py-10 px-6 max-w-6xl mx-auto rounded-lg shadow-lg">
      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-gray-800 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaCogs className="text-blue-600 mr-3" /> {engine.name}
      </motion.h1>
      <div className="lg:flex lg:flex-row sm:flex-col gap-4">
        <motion.div
          className="relative w-full lg:w-[900px] overflow-hidden rounded-lg shadow-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={engine.picture}
            alt={engine.name}
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          className="bg-white my-auto p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700 flex items-center">
            <FaCogs className="text-blue-600 mr-2" /> Specifications
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            {engine.Specification}
          </p>
          <p className="text-base sm:text-lg mt-2">
            <strong>Category:</strong>{" "}
            <span className="font-medium text-blue-600">{engine.category}</span>
          </p>
        </motion.div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-6 text-center text-gray-700 flex items-center justify-center">
        <FaImage className="text-blue-600 mr-2" /> Gallery
      </h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {engine.images.map(
          (img, index) =>
            img && (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img}
                  alt={`Engine image ${index + 1}`}
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </motion.div>
            )
        )}
      </motion.div>

      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link to="/allproduct">
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft className="mr-2" /> Back to Products
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Engines;
