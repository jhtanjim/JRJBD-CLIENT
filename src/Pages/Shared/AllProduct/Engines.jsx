import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Engines = () => {
    const { id } = useParams();
    const [engine, setEngine] = useState(null);

    useEffect(() => {
        fetch("/engine.json")
            .then((res) => res.json())
            .then((data) => {
                const foundEngine = data.find(engine => engine.id === parseInt(id));
                setEngine(foundEngine);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!engine) return <div className="flex justify-center items-center h-screen"><div className="loader"></div></div>; // Loading state

    return (
        <div className="py-40 max-w-screen-xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-center text-blue-600">{engine.name}</h1>
            <img src={engine.picture} alt={engine.name} className="w-full h-[500px] object-cover mb-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />

            <div className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Specifications</h2>
                <p className="text-lg mb-2">{engine.Specification}</p>
                <p className="text-lg mt-2"><strong>Category:</strong> <span className="font-medium text-blue-600">{engine.category}</span></p>
            </div>

            <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Image Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {engine.images.map((img, index) => (
                    img && (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                            <img src={img} alt={`Engine image ${index + 1}`} className="w-full h-[300px] object-cover" />
                        </div>
                    )
                ))}
            </div>
           <Link  to={"/allproduct"}> <button className='btn btn-primary my-4'>back to Product</button></Link>
        </div>
    );
};

export default Engines;
