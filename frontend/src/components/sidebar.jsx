import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import axios from "axios";
import Ongoingevents from "./Ongoingevents";

const Sidebar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubMenuVisible, setSubMenuVisible] = useState(true);
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [ini_url, fin_url] = useState();

  const [iniName, finName] = useState("");

  const getdata = async () => {
    try {
      const result = await axios.get(`http://localhost:1234/sport_data/${id}`);
      const { Name, user_sport_data } = result.data;
      const storage = getStorage();
      console.log(user_sport_data.image);
      const imgref = ref(
        storage,
        `virtual_hackathone/${user_sport_data.image}`
      );
      console.log(imgref);
      try {
        const url = await getDownloadURL(imgref);
        fin_url(url);
      } catch (error) {
        console.log(error);
      }
      finName(Name);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const switchMode = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="">
      {/* <span className=" text-white text-4xl top-5 left-4 cursor-pointer" onClick={toggleSidebar}>
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span> */}
      <div
        className={`sidebar z-10 min-h-[95vh] top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-[#131313] ${
          isSidebarVisible ? "" : "hidden"
        }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-center">
            <img
              className="lg:w-[70px] lg:h-[70px] rounded-full"
              src={ini_url}
              alt=""
            />

            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={toggleSidebar}
            ></i>
          </div>
          <p className="text-sm mt-2">Welcome "{iniName}"</p>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <Link to="/">
          <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Home
            </span>
          </div>
        </Link>
        <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 21H12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 21V3"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 4L19 8L10 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Bookmark
          </span>
        </div>
        <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 21H12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 21V3"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 4L19 8L10 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Hire Trainee
          </span>
        </div>
        <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 21H12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 21V3"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 4L19 8L10 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Find Players
          </span>
        </div>
        <Link to="/Ongoingevents">
          <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 21H12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 21V3"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 4L19 8L10 12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Ongoing Events
            </span>
          </div>
        </Link>
        <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 21H12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 21V3"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 4L19 8L10 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Past Events
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div
          className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white"
          onClick={toggleSubMenu}
        >
          <svg
            class="fill-stroke"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Chatbox
            </span>
            <span className="text-sm rotate-180" id="arrow">
              <i
                className={`bi bi-chevron-down ${
                  isSubMenuVisible ? "rotate-180" : ""
                }`}
              ></i>
            </span>
          </div>
        </div>
        <div
          className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white"
          onClick={toggleSubMenu}
        >
          <svg
            class="fill-stroke"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Help & Support
            </span>
            <span className="text-sm rotate-180" id="arrow">
              <i
                className={`bi bi-chevron-down ${
                  isSubMenuVisible ? "rotate-180" : ""
                }`}
              ></i>
            </span>
          </div>
        </div>
        <div
          className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white"
          onClick={toggleSubMenu}
        >
          <svg
            class="fill-stroke"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Settings
            </span>
            <span className="text-sm rotate-180" id="arrow">
              <i
                className={`bi bi-chevron-down ${
                  isSubMenuVisible ? "rotate-180" : ""
                }`}
              ></i>
            </span>
          </div>
        </div>
        <div
          className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-800 text-white"
          onClick={toggleSubMenu}
        >
          <svg
            class="fill-stroke"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-between w-full items-center">
            <span
              className="text-[15px] ml-4 text-gray-200 font-bold"
              onClick={switchMode}
            >
              Switch Mode
            </span>
            <span className="text-sm rotate-180" id="arrow">
              <i
                className={`bi bi-chevron-down ${
                  isSubMenuVisible ? "rotate-180" : ""
                }`}
              ></i>
            </span>
          </div>
        </div>

        <div
          className={`text-left text-sm mt-1 w-4/5 mx-auto text-gray-200 font-bold ${
            isSubMenuVisible ? "" : "hidden"
          }`}
          id="submenu"
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
