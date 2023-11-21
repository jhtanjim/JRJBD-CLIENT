import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-iota-ten.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-4 max-w-7xl mx-auto">
      <SectionTitle
        subHeading="Our Services"
        heading="Our Services Area"
        description=" the majority have suffered alteration in some form, by injected humour, or randomised
<br /> words which don't look even slightly believable."
      ></SectionTitle>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
