"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShip, FaCogs, FaWater, FaBolt } from "react-icons/fa";

const AllProduct = () => {
  const [products, setProducts] = useState({
    engines: [],
    boats: [],
    marineEquipments: [],
    generators: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const categories = ["engine", "boat", "marineEquipment", "generator"];
      const results = await Promise.all(
        categories.map((category) =>
          fetch(`${category}.json`).then((res) => res.json())
        )
      );
      setProducts({
        engines: results[0],
        boats: results[1],
        marineEquipments: results[2],
        generators: results[3],
      });
    };
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const ProductSection = ({ title, items, icon, linkPrefix }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mb-20"
    >
      <motion.h1
        className="text-5xl font-bold mb-8 flex items-center"
        variants={itemVariants}
      >
        {icon}
        <span className="ml-4">{title}</span>
      </motion.h1>
      <motion.div
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id || index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="card bg-base-100 shadow-xl w-full overflow-hidden"
          >
            <figure className="relative h-[350px] overflow-hidden">
              <img
                src={item.picture || item.images[0]}
                alt={item.name || item.model}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </figure>
            <Link
              to={`${linkPrefix}/${item.id || index}`}
              className="card-body relative z-10"
            >
              <h2 className="card-title text-2xl font-bold text-black">
                {item.name || item.model}
              </h2>
              <p className="text-black">
                {item.Specification || item.engine || item.description}
              </p>
              {/* <div className="card-actions justify-end mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-primary"
                >
                  Learn More
                </motion.button>
              </div> */}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="py-40 max-w-screen-xl lg:mx-auto mx-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">
          Our Products
        </h1>
        <p className="text-xl text-gray-600">
          Discover our range of high-quality marine products
        </p>
      </motion.div>

      <ProductSection
        title="Engines"
        items={products.engines}
        icon={<FaCogs className="text-5xl text-blue-600" />}
        linkPrefix="/engines"
      />
      <ProductSection
        title="Boats"
        items={products.boats}
        icon={<FaShip className="text-5xl text-green-600" />}
        linkPrefix="/boats"
      />
      <ProductSection
        title="Marine Equipment"
        items={products.marineEquipments}
        icon={<FaWater className="text-5xl text-cyan-600" />}
        linkPrefix="/marineEquipments"
      />
      <ProductSection
        title="Generators"
        items={products.generators}
        icon={<FaBolt className="text-5xl text-yellow-600" />}
        linkPrefix="/generators"
      />
    </div>
  );
};

export default AllProduct;
