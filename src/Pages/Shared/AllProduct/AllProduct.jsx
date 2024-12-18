import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProduct = () => {
    const [engines, setEngines] = useState([]);
    const [boats, setBoats] = useState([]);
    const [marineEquipments, setMarineEquipments] = useState([]);
    const [generators, setGenerators] = useState([]);

    useEffect(() => {
        fetch("engine.json")
            .then((res) => res.json())
            .then((data) => {
                setEngines(data);
            });
    }, []);

    useEffect(() => {
        fetch("boat.json")
            .then((res) => res.json())
            .then((data) => {
                setBoats(data);
            });
    }, []);
    useEffect(() => {
        fetch("marineEquipment.json")
            .then((res) => res.json())
            .then((data) => {
                setMarineEquipments(data);
            });
    }, []);
    useEffect(() => {
        fetch("generator.json")
            .then((res) => res.json())
            .then((data) => {
                setGenerators(data);
            });
    }, []);

    return (
        <div className='py-40 max-w-screen-xl lg:mx-auto mx-4'>
            {/* engines */}
            <div>
                <h1 className='text-5xl font-bold mb-8'>Engines</h1>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        engines.map(engine => (
                            <div key={engine.id} className="card bg-base-100 shadow-xl w-full">
                                <figure>
                                    <img
                                        src={engine.picture}
                                        alt={engine.name}
                                        className="w-full h-[350px] object-cover"
                                    />
                                </figure>
                                <Link to={`/engines/${engine.id}`}>
                                    <div className="card-body">
                                        <h2 className="card-title">{engine.name}</h2>
                                        <p>{engine.Specification}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Check</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* boats */}
            <div>
                <h1 className='text-5xl font-bold mb-8'>Boats</h1>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        boats.map((boat, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl w-full">
                                <figure>
                                    <img
                                        src={boat.images[0]}
                                        alt={boat.model}
                                        className="w-full h-[350px] object-cover"
                                    />
                                </figure>
                                <Link to={`/boats/${index}`}>
                                    <div className="card-body">
                                        <h2 className="card-title">{boat.model}</h2>
                                        <p>Engine: {boat.engine}</p>
                                        <p>Size: {boat.size}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Check</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* MarineEquipment */}
            <div>
                <h1 className='text-5xl font-bold mb-8'>marineEquipment</h1>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        marineEquipments.map((marineEquipment, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl w-full">
                                <figure>
                                    <img
                                        src={marineEquipment.images[0]}
                                        alt={marineEquipment.name}
                                        className="w-full h-[350px] object-cover"
                                    />
                                </figure>
                                <Link to={`/marineEquipments/${index}`}>
                                    <div className="card-body">
                                        <h2 className="card-title">{marineEquipment.name}</h2>
                                        <p>Engine: {marineEquipment.description}</p>
                                       
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Check</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Generator */}
            <div>
                <h1 className='text-5xl font-bold mb-8'>Generator</h1>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        generators.map((generator, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl w-full">
                                <figure>
                                    <img
                                        src={generator.images[0]}
                                        alt={generator.name}
                                        className="w-full h-[350px] object-cover"
                                    />
                                </figure>
                                <Link to={`/generators/${index}`}>
                                    <div className="card-body">
                                        <h2 className="card-title">{generator.name}</h2>
                                        <p>Engine: {generator.description}</p>
                                       
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Check</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProduct;
