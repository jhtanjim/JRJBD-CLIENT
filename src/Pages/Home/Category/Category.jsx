import React from 'react';

const Category = () => {
  return (
    <div className='max-w-screen-xl lg:mx-auto mx-4 my-20'>
      <div className="ms-4 mb-8">
        <p className="font-bold text-[#F86518] uppercase">Our Products</p>
        <h1 className="lg:text-5xl text-3xl pt-1 font-bold lg:mb-10 mb-6 text-[#05345E]">
          Featured Services That We Provide
        </h1>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
        {/* Boat Card */}
        <div className="card bg-white w-full shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <figure className="h-80">
            <img
              src="https://i.ibb.co.com/L9hR22Y/IMG-4017.jpg"
              alt="TEAK-AA Boat"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-[#05345E]">TEAK-AA</h2>
            <p className="text-gray-700 mt-2">The TEAK-AA boat model, sized 7.3M to 8.0M. It comes in dark blue or grey with a lead time of 60 days, priced between $7,000 and $12,000.</p>
          </div>
        </div>

        {/* Engine Card */}
        <div className="card bg-white w-full shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <figure className="h-80">
            <img
              src="https://i.ibb.co.com/KXx77DL/4b586929-cb7e-4a72-9b4f-ac60193e745b.jpg"
              alt="Bukh Dv24 Engine"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-[#05345E]">Bukh Dv24</h2>
            <p className="text-gray-700 mt-2">Electric start with 4-stroke Cylinders, 2 Cylinder Bore/Stroke - 85/85 mm, HP- 24, RPM- 3600.</p>
          </div>
        </div>

        {/* Duplicate Engine Card for Consistency */}
        <div className="card bg-white w-full shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <figure className="h-80">
            <img
              src="https://i.ibb.co.com/8PGt17P/6e3b8395-9023-4afc-8d62-9313cbf95fd7.jpg"
              alt="Bukh Dv24 Engine"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-[#05345E]">Yanmer 3JH30A</h2>
            <p className="text-gray-700 mt-2">ENo of cylinders- 3 Cylinder Bore/Stroke- 82/86 mn Direct injection, cooling system with hydraulic gear. HP- 30, RPM- 2900.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
