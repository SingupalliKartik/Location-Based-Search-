import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import img from "../assets/threedots.png";

const FindPlayer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://fakestoreapi.com/products";
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <section className="text-gray-200 body-font">
          <div className="flex w-full justify-center items-center pt-10">
            <div className="flex w-full justify-center lg:gap-x-20 items-center">
              <input
                className="outline-none lg:w-[800px] focus:ring focus:ring-gray-800 rounded bg-[#131313] border-b border-b-gray-700 px-8 py-2"
                placeholder="Search ..."
                type="text"
              />
              <div>
                <select
                  name="CoreSkill"
                  class="block w-full px-4 py-2  text-gray-700 border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 "
                >
                  <option className="bg-[#111111] " value="beginner">
                    Search By
                  </option>
                  <option className="bg-[#111111]" value="intermediate">
                    Name
                  </option>
                  <option className="bg-[#111111]" value="advanced">
                    Location
                  </option>
                  <option className="bg-[#111111]" value="master">
                    Age
                  </option>
                  <option className="bg-[#111111]" value="champion">
                    Core Skill
                  </option>
                </select>
              </div>
              <button>
                {" "}
                <img
                  className="h-8  border border-opacity-40 border-gray-700 w-8 mix-blend-lighten"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpUvJgqd5Y2uFxMB3gjQpMvQHh2nrkux1CwVKv8V9rA&s"
                  alt=""
                />
              </button>
            </div>
          </div>

          <div className="container px-5 py-14 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((product, index) => (
                <div key={index} className="p-4 md:w-1/4">
                  <div className="h-full border-2 border-gray-700 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-36 md:h-36 w-full object-cover object-center"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="p-4">
                      <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                        Core Skill : {product.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-300 mb-2">
                        Player Name : Vedansh
                      </h1>
                      <p className="leading-relaxed mb-1">
                        Location : From Map
                      </p>
                      <p className="leading-relaxed mb-3">Age : 22</p>
                      <div className="flex justify-between items-center">
                        <button className="py-1 px-4 bg-green-600 rounded-lg">
                          Connect+
                        </button>
                        <img
                          className="h-6 cursor-pointer mix-blend-difference"
                          src={img}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};



export default FindPlayer;
