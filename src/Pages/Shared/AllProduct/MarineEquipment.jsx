import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                // Find the selected equipment by id
                const selectedEquipment = data.find((item) => item.id === parseInt(id));
                if (selectedEquipment) {
                    setMarineEquipment(selectedEquipment);
                } else {
                    setError('No equipment found with this ID');
                }
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError('Failed to fetch equipment data');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    // Loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Error state
    if (error) {
        return <div>{error}</div>;
    }

    // Equipment data rendering
    return (
        <div className="py-20 max-w-screen-lg mx-auto">
            <h1 className="text-5xl font-bold mb-4">{marineEquipment.name}</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                    {marineEquipment.images.map((img, index) => (
                        <img key={index} src={img} alt={marineEquipment.name} className="w-full mb-4" />
                    ))}
                </div>
                <div className="lg:w-1/2 lg:pl-8">
                    <p className="text-lg mb-4">{marineEquipment.description}</p>
                    <button className="btn btn-primary">Inquire</button>
                </div>
            </div>
        </div>
    );
};

export default MarineEquipment;
