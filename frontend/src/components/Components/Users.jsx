import React, { useContext, useEffect, useState } from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import logo from "../Images/live-chat_512px.png";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshSidebarFun } from "../../Features/refreshSidebar";
import { myContext } from "./MainContainer";

function Users() {
  // const [refresh, setRefresh] = useState(true);
  const { refresh, setRefresh } = useContext(myContext);

  const lightTheme = useSelector((state) => state.themeKey);
  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [ini_search, fin_search] = useState("");
  const [ini_user, fin_user] = useState();

  // console.log("Data from LocalStorage : ", userData);
  const [initial, final] = useState([
    {
      id: "",
      CoreSkill: "",
      latitude: "",
      longitude: "",
      skillLevel: "",
      selectedSports: "",
      FName: "",
    },
  ]);
  const nav = useNavigate();
  const dispatch = useDispatch();

  if (!userData) {
    console.log("User not Authenticated");
    nav(-1);
  }
  const setsearch = (e) => {
    fin_search(e.target.value);
  };
  const getdata = async () => {
    try {
      const result = await axios.get(
        `http://localhost:1234/sport_data/${userData.data.id}`
      );
      const sport_data = result.data.sport_data;
      const user_sport_data = result.data.user_sport_data;
      fin_user(user_sport_data);
      sport_data.map((info) => {
        final((data) => [
          ...data,
          {
            id: info._id,
            CoreSkill: info.CoreSkill,
            latitude: info.latitude,
            longitude: info.longitude,
            skillLevel: info.skillLevel,
            selectedSports: info.selectedSports,
            FName: info.FName,
          },
        ]);
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.Token}`,
      },
    };
    axios.get("http://localhost:1234/user/fetchUsers", config).then((data) => {
      console.log("UData refreshed in Users panel ");
      setUsers(data.data);
      // setRefresh(!refresh);
    });
  }, [refresh]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: "0.3",
        }}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Available Users
          </p>
          <IconButton
            className={"icon" + (lightTheme ? "" : " dark")}
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            <RefreshIcon />
          </IconButton>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <SearchIcon />
          </IconButton>
          <input
            placeholder="Search"
            className={"search-box" + (lightTheme ? "" : " dark")}
          />
           <select
          onChange={setsearch}
          name="CoreSkill"
          class="block w-full px-4 py-2  text-gray-700 border border-white rounded-md bg-transparent dark:text-gray-300  dark:focus:border-red-600 "
        >
          <option className="bg-[#111111] " value="">
            Search By
          </option>
          <option className="bg-[#111111]" value="Name">
            Name
          </option>
          {/* <option className="bg-[#111111]" value="Location">
                    Location
                  </option> */}
          <option className="bg-[#111111]" value="age">
            Age
          </option>
          <option className="bg-[#111111]" value="bycoreskill">
            Core Skill
          </option>
        </select>
        </div>
        <div className="ug-list">
          {users.map((user, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={"list-tem" + (lightTheme ? "" : " dark")}
                key={index}
                onClick={() => {
                  console.log("Creating chat with ", user.FName);
                  const config = {
                    headers: {
                      Authorization: `Bearer ${userData.data.Token}`,
                    },
                  };
                  axios.post(
                    "http://localhost:1234/chat/",
                    {
                      userId: user._id,
                    },
                    config
                  );
                  dispatch(refreshSidebarFun());
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {user.FName}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Users;
