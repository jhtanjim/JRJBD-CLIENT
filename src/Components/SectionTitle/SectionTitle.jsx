import React from "react";

const SectionTitle = ({ heading, subHeading, description }) => {
  return (
    <div className="text-center ">
      <h3 className="text-2xl font-bold  text-orange-600">{subHeading}</h3>
      <h2 className="text-5xl">{heading} </h2>
      <p className="">{description}</p>
    </div>
  );
};

export default SectionTitle;
