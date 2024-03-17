import React, { useState } from "react";
import Title from "../SectionTitles/Title";
import Teams from "./Card/Teams";
export default function Team(props) {
  const [Data, setData] = useState([
    {
      id: 1,
      name: "فواد ابراهیمی",
      src: "./images/team/team1.jpg",
      silence: "مالک",
    },
    {
      id: 2,
      name: "حسام احمدی",
      src: "./images/team/team2.jpg",
      silence: "توسعه دهنده",
    },
    {
      id: 3,
      name: "امیرعباس ابارقی",
      src: "./images/team/team3.jpg",
      silence: "مدیر ارشد",
    },
    {
      id: 4,
      name: "امیرمحمد جعفری",
      src: "./images/team/team4.jpg",
      silence: "مدیرعامل",
    },
  ]);
  return (
    <div className="px-5 md:px-10 xl:px-28 2xl:px-36 space-y-20">
      <div>
        <Title {...props} />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 md:flex-row flex-wrap">
        {Data.map(team => (
          <Teams {...team} />
        ))}
      </div>
    </div>
  );
}
