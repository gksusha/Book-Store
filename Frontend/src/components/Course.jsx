import React from "react";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/api/book");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log("Error getting book: ", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            ipsum aliquam doloribus, quisquam unde quas ipsa mollitia illo
            consequuntur reiciendis officia nesciunt quam tenetur perferendis
            magnam temporibus facere nemo natus.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md  hover:bg-pink-700 transition duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {books.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
