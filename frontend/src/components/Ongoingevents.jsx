import React from "react";
import Eventscards from "./Eventscards"; // Assuming Card is in a file named Card.js
// import { blueGrey } from "@mui/material/colors";
// import { color } from "framer-motion";
import Sidebar from "./sidebar";
// import Sidebar from './sidebar';

const peopleData = [
  {
    img: "https://media.istockphoto.com/id/1329011619/video/soccer-kid-on-white-background-the-concept-of-childhood-street-games-back-to-school-3d.jpg?s=640x640&k=20&c=BLW7eFV9B1EjXpnxg_AxPRaMHm1MfioUzIvVSkWzsUc=",
    name: "Alice",
    coreSkill: "FootBall",
    location: "Bhopal",
  },
  {
    img: "https://media.istockphoto.com/id/1350244551/vector/kids-runners-running-fast-to-finish-line-on-marathon-race.jpg?s=612x612&w=0&k=20&c=V5Lt6DApQ0NsenyF6NvznOp5bgLQZPwH6oR_x0pLeyA=",
    name: "Bob",
    coreSkill: "Running ",
    location: "Indore",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/020/381/129/non_2x/single-continuous-line-drawing-of-young-sportive-man-training-to-pass-the-bar-in-high-jump-game-in-the-field-healthy-athletic-sport-concept-tournament-event-one-line-draw-design-illustration-vector.jpg",
    name: "Charlie",
    coreSkill: "High Jump",
    location: "Ujjain",
  },
];

const Ongoingevents = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="cards-container w-full flex flex-wrap justify-between ">
        {peopleData.map((person) => (
          <Eventscards key={person.name} {...person} />
        ))}
      </div>
    </div>
  );
};

export default Ongoingevents;
