import React from 'react';
import parts1 from '../../../assets/images/About/about 1.jpg'
import parts2 from '../../../assets/images/About/about 2.jpg'
const About = () => {
    return (
        <div className='mb-32'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={parts1} className="w-3/4 rounded-lg shadow-2xl " />
                        <img src={parts2} className="w-1/2 rounded-lg border-white border-8 shadow-2xl absolute right-5 top-1/2" />
                    </div>
                    <div className='lg:w-1/2 p-4 space-y-3'>
                        <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-4">JRJ BD most experience exporter of marine equipment, used lifeboat, renovation lifeboat and diesel engine also. we are located at Chattogram, Bangladesh and we have almost 10 years experience about international business. The founder late Tajul Islam Babor established JRJ BD in 2003 </p>

                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;