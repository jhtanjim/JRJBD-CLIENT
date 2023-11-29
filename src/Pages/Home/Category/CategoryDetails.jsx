import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';

const CategoryDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/CategoryDetails.json")
      .then((res) => res.json())
      .then((data) => {
        const category = data.find((category) => category.id == id);
        if (category) {
          setDetails(category);
        } else {
          console.error(`Course with id ${id} not found`);
        }
      })
      .catch((error) => console.error(error));
  }, [id]);


  return (
    <div>
      <p>{ details.length}</p>
      {details && (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{details.category}</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;