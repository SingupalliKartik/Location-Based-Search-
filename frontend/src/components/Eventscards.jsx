import React from 'react';

const Eventscards = ({ name,img, coreSkill, location, age }) => {
  return (
    <div  className="p-4 md:w-1/3">
                  <div className="h-fit  border-2 border-gray-700 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className=" h-60 w-fit object-cover object-center"
                      src={img}
                      alt={"here i am"}
                    />
                    <div className="p-4">
                      <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                        Core Skill : {coreSkill}
                      </h2>
                      <br></br>
                      <p className="leading-relaxed mb-1">
                        Location : {location}
                      </p>
                      <br></br>
                      <div className="flex justify-between items-center">
                        <button className="py-1 px-4 bg-green-600 rounded-lg">
                          Join Event
                        </button>
                        <img
                          className="h-6 cursor-pointer mix-blend-difference"
                        //   src={img}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
  );
};

export default Eventscards;
