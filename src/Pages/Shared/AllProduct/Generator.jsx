import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCogs, FaChevronLeft, FaImage } from "react-icons/fa";

const Generator = () => {
  const { id } = useParams();
  const [generator, setGenerator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the generator data
    fetch("/generator.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const selectedGenerator = data.find((item) => item.id === parseInt(id));
        if (selectedGenerator) {
          setGenerator(selectedGenerator);
        } else {
          setError("No generator found with this ID");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch generator data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
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
      <div className="flex justify-center items-center h-screen bg-gray-200 text-red-500 text-xl">
        <p>{error}</p>
      </div>
    );
  }

  // Generator data rendering
  return (
    <div className="py-10 px-6 max-w-screen-lg mx-auto">
      {/* Title with icon */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaCogs className="text-blue-600 mr-3" />
        {generator.name}
      </motion.h1>

      {/* Generator content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {generator.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={generator.name}
              className="w-full rounded-lg shadow-md mb-4 transition-transform duration-300 hover:scale-105"
            />
          ))}
        </motion.div>

        {/* Description and button */}
        <motion.div
          className="lg:w-1/2 lg:pl-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-700 mb-6">{generator.description}</p>
          <Link to="/allproduct">
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="mr-2" />
              Back to Products
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Gallery section */}
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold mt-10 mb-6 text-center text-gray-700 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <FaImage className="text-blue-600 mr-2" />
        Gallery
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {generator.images.map(
          (img, index) =>
            img && (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img}
                  alt={`Generator image ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            )
        )}
      </motion.div>
    </div>
  );
};

export default Generator;
