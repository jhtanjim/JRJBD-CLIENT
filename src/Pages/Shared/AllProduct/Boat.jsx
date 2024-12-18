import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Boat = () => {
    const { id } = useParams();  // Get the boat id from the URL
    const [boat, setBoat] = useState(null);  // To hold the specific boat data
    const [selectedImage, setSelectedImage] = useState('');  // To hold the currently selected main image

    useEffect(() => {
        // Fetch boat data from boat.json
        fetch('/boat.json')
            .then((res) => res.json())
            .then((data) => {
                const boatData = data[id];  // Get specific boat by id
                if (boatData) {
                    setBoat(boatData);
                    setSelectedImage(boatData.images[0]);  // Set initial main image to the first image
                }
            });
    }, [id]);

    if (!boat) {
        return <div>Loading...</div>;
    }

    return (
        <div className="py-20 pt-40 max-w-screen-lg lg:mx-auto mx-4">
            {/* Boat Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Boat Images */}
                <div>
                    <img
                        src={selectedImage}  // Display the selected image
                        alt={boat.model}
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-4"
                    />
                    <div className="flex space-x-4">
                        {boat.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Boat ${index}`}
                                onClick={() => setSelectedImage(img)}  // Set clicked image as the main image
                                className={`w-24 h-24 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition transform duration-300 ${
                                    selectedImage === img ? 'border-2 border-blue-500' : ''
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Boat Information */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">{boat.model}</h1>
                    <p className="text-lg mb-4 text-gray-700"><strong>Size:</strong> {boat.size}</p>
                    <p className="text-lg mb-4 text-gray-700"><strong>Engine:</strong> {boat.engine}</p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">Key Features</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Steering Wheel: {boat.features.steering_wheel}</li>
                        <li>Fuel Tank: {boat.features.fuel_tank}</li>
                        <li>Propeller: {boat.features.propeller}</li>
                        <li>Sundeck: {boat.features.sundeck}</li>
                        <li>Storage: {boat.features.storage_boxes.join(', ')}</li>
                    </ul>

                    {/* Pricing Information */}
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
                        <p className="text-lg text-gray-700"><strong>6.5M: </strong>USD $ {boat.price["6.5M"]}</p>
                        <p className="text-lg text-gray-700"><strong>7.5M: </strong>USD $ {boat.price["7.5M"]}</p>
                        <p className="text-lg text-gray-700"><strong>8.0M: </strong>USD $ {boat.price["8.0M"]}</p>
                    </div>
                </div>
            </div>

            {/* Additional Details */}
            <div className="mt-16">
                <h2 className="text-3xl font-semibold mb-6">More Details</h2>
                <p className="text-lg text-gray-700 mb-4">
                    <strong>Finish:</strong> {boat.finish}
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    <strong>Lead Time:</strong> {boat.lead_time}
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    <strong>Payment Terms:</strong> {boat.payment_terms}
                </p>
                <p className="text-lg text-gray-700">
                    <strong>Shipment:</strong> {boat.shipment}
                </p>
            </div>
        </div>
    );
};

export default Boat;
