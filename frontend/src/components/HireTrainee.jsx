import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import trainer from '../assets/trainer.jpg'


const HireTrainee = () => {
    const [trainees, setTrainees] = useState([]);

    useEffect(() => {
        const fetchTrainees = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setTrainees(data);
            } catch (error) {
                console.error('Error fetching trainees:', error);
            }
        };

        fetchTrainees();
    }, []);

  

  return (
    <>
      <div className="lg:flex">
        <Sidebar />
        <div>
            <div className="flex w-full justify-center items-center pt-10">
            <div className="flex w-full justify-center lg:gap-x-20 items-center">
              <input
                className="outline-none lg:w-[800px] focus:ring focus:ring-gray-800 rounded bg-[#131313] border-b border-b-gray-700 px-8 py-2"
                placeholder="Find your trainer here ..."
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
                    Experience
                  </option>
                  <option className="bg-[#111111]" value="advanced">
                    City
                  </option>
                  <option className="bg-[#111111]" value="master">
                    Age
                  </option>
                  <option className="bg-[#111111]" value="champion">
                    Ratings
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
        <section class="body-font">
  <div class="container px-5 pt-4 mx-auto flex flex-col">
    <div class="lg:w-6/6 mx-auto">
      <div class="rounded-lg h-48 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={trainer}/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img className='h-20 w-20 rounded-full' src="https://i.pinimg.com/originals/0c/2a/c8/0c2ac8e6c977e2e51ed2037a7373a66b.png" alt="" />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-200 text-lg">Hire Trainer</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">All our trainers are UGC certified having experience of more than 4 years. Hire them to enhance your skills and get mentorsip.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4 text-gray-300">Our world-class trainers are highly skilled and certified professionals who excel in their fields. With a wealth of expertise and experience, they deliver top-notch training programs tailored to meet diverse needs. Committed to excellence, our trainers utilize innovative teaching methods and cutting-edge resources to ensure optimal learning outcomes. Whether in-person or online, they inspire and empower learners to reach their full potential, fostering a dynamic and supportive learning environment. Trust in our trainers for unparalleled guidance and mentorship on your journey to success.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:px-8 lg:py-8 lg:grid-cols-3 gap-4">
                {trainees.map(trainee => (
                    <div key={trainee.id} className="border  border-gray-400 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-1">Name : {trainee.name}</h2>
                        <p className="text-gray-200 mb-1">Email : {trainee.email}</p>
                        <p className="text-gray-200 mb-1">City : {trainee.address.city}</p>
                        <div className='flex justify-start gap-x-4 items-center mt-4'>
                        <button className="text-2ray-600 mb-2 bg-green-600 px-4 py-1 rounded-lg">Hire !</button>
                        <button className="text-2ray-600 mb-2 bg-blue-700 px-4 py-1 rounded-lg">Ask Charges ?</button>
                        <button className="text-2ray-600 mb-2 bg-orange-500 px-4 py-1 rounded-lg">Chat </button>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>  
        </div>
        
      </div>
    </>
  );
};



export default HireTrainee;