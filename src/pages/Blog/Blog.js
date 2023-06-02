import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="mt-10 mb-5 mx-2 md:mx-40">
        <div className="card md:card-side cubor2">
          <figure className="w-full md:w-[400px] pl-5 rounded">
            <img
              className="rounded mt-5 mr-4"
              src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0"
              alt="food"
            />
          </figure>
          <div className="card-body md:ml-20">
            <h2 className="card-title">Food Ex: Exploring the World of Food</h2>
            <p>
              Welcome to Food Ex, your go-to destination for all things food!
              Join us on a mouthwatering journey as we delve into the diverse
              and delectable world of culinary delights.
            </p>
            <div className="card-actions justify-end">
              <Link to="/home/blogSingle">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-56 mx-2 md:mx-40">
        <div className="card md:card-side cubor2">
          <figure className="w-full md:w-[400px] pl-5 rounded">
            <img
              className="rounded mt-5 mr-4"
              src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0"
              alt="food"
            />
          </figure>
          <div className="card-body md:ml-20">
            <h2 className="card-title">Food Ex: Exploring the World of Food</h2>
            <p>
              Welcome to Food Ex, your go-to destination for all things food!
              Join us on a mouthwatering journey as we delve into the diverse
              and delectable world of culinary delights.
            </p>
            <div className="card-actions justify-end">
              <Link to="/home/blogSingle">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
