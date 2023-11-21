import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("Category.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="my-12">
        <SectionTitle
          subHeading="Our Projects"
          heading="Our Projects"
          description=" the majority have suffered alteration in some form, by injected humour, or randomised
                    <br /> words which don't look even slightly believable."
        ></SectionTitle>
      </div>

      <div className="text-center space-x-3 ">
        <Tabs>
          <TabList>
            <Tab>
              <button className="btn btn-primary">Diesel engine</button>
            </Tab>
            <Tab>
              <button className="btn btn-primary">Truck</button>
            </Tab>
            <Tab>
              <button className="btn btn-primary">Mini Fire Truck</button>
            </Tab>
            <Tab>
              <button className="btn btn-primary">Mini Police Car</button>
            </Tab>
          </TabList>

          <TabPanel>
            <h2>Diesel engine</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toys
                .filter((toy) => toy.subcategory === "Diesel engine")
                .map((toy) => (
                  <div
                    key={toy.id}
                    className="card card-compact bg-base-100 shadow-xl"
                  >
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src={toy.picture}
                          alt={toy.name}
                          className="card-image"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{toy.specification}</h2>

                        <div className="card-actions justify-end">
                          <Link to={`/toy/${toy._id}`}>
                            <button className="btn btn-primary">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2>Truck</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toys
                .filter((toy) => toy.subcategory === "Truck")
                .map((toy) => (
                  <div
                    key={toy.id}
                    className="card card-compact bg-base-100 shadow-xl"
                  >
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src={toy.picture}
                          alt={toy.name}
                          className="card-image"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{toy.name}</h2>
                        <p>${toy.price}</p>
                        <p>Rating: {toy.rating}</p>
                        <div className="card-actions justify-end">
                          <Link to={`/toy/${toy._id}`}>
                            <button className="btn btn-primary">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2>Mini Fire Truck</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toys
                .filter((toy) => toy.subcategory === "Mini Fire Truck")
                .map((toy) => (
                  <div
                    key={toy.id}
                    className="card card-compact bg-base-100 shadow-xl"
                  >
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src={toy.picture}
                          alt={toy.name}
                          className="card-image"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{toy.name}</h2>
                        <p>${toy.price}</p>
                        <p>Rating: {toy.rating}</p>
                        <div className="card-actions justify-end">
                          <Link to={`/toy/${toy._id}`}>
                            <button className="btn btn-primary">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2>Mini Police Car</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toys
                .filter((toy) => toy.subcategory === "Mini Police Car")
                .map((toy) => (
                  <div
                    key={toy.id}
                    className="card card-compact bg-base-100 shadow-xl"
                  >
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src={toy.picture}
                          alt={toy.name}
                          className="card-image"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{toy.name}</h2>
                        <p>${toy.price}</p>
                        <p>Rating: {toy.rating}</p>
                        <div className="card-actions justify-end">
                          <Link to={`/toy/${toy._id}`}>
                            <button className="btn btn-primary">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
