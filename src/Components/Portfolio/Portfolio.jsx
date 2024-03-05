import React, { useState } from "react";
import Title from "../SectionTitles/Title";
import Card from "./Cards/Card";
import Fittest from "./Fittest/Fittest";
export default function Portfolio(props) {
  const [category, SetCategory] = useState("all");
  const [InfoCards] = useState([
    {
      img: "./Images/Portfolio/portfolio-1.jpg",
      titleBox: "اینترنت 3",
      subtitle: "اینترنت",
      category: "Internet",
    },
    {
      img: "./Images/Portfolio/portfolio-2.jpg",
      titleBox: "محصول 1",
      subtitle: "محصول",
      category: "Product",
    },
    {
      img: "./Images/Portfolio/portfolio-3.jpg",
      titleBox: "محصول 3",
      subtitle: "محصول",
      category: "Product",
    },
    {
      img: "./Images/Portfolio/portfolio-4.jpg",
      titleBox: "اینترنت 2",
      subtitle: "اینترنت",
      category: "Internet",
    },
    {
      img: "./Images/Portfolio/portfolio-5.jpg",
      titleBox: "برنامه 3",
      subtitle: "برنامه",
      category: "Program",
    },
    {
      img: "./Images/Portfolio/portfolio-6.jpg",
      titleBox: "برنامه 1",
      subtitle: "برنامه",
      category: "Program",
    },
  ]);
  const categoryFun = category => {
    [...category.target.parentNode.childNodes].forEach(li =>
      li.classList.remove("active_category")
    );
    category.target.classList.add("active_category");
    SetCategory((category = category.target.getAttribute("value")));
    console.log(category);
  };
  return (
    <div>
      <div className="space-y-12">
        <div className="px-5 md:px-10 xl:px-28 2xl:px-36 space-y-20">
          <div className="space-y-7">
            <div>
              <Title {...props} />
            </div>
            <div className="">
              <ul className="flex gap-x-2">
                <li
                  className="active_category p-2 text-xl rounded-md hover:bg-Primary transition-all cursor-pointer"
                  value="all"
                  onClick={categoryFun.bind(this)}
                >
                  همه
                </li>
                <li
                  className="p-2 text-xl rounded-md hover:bg-Primary transition-all cursor-pointer"
                  value="Program"
                  onClick={categoryFun.bind(this)}
                >
                  برنامه
                </li>
                <li
                  className="p-2 text-xl rounded-md hover:bg-Primary transition-all cursor-pointer"
                  value="Product"
                  onClick={categoryFun.bind(this)}
                >
                  محصول
                </li>
                <li
                  className="p-2 text-xl rounded-md hover:bg-Primary transition-all cursor-pointer"
                  value="Internet"
                  onClick={categoryFun.bind(this)}
                >
                  اینترنت
                </li>
              </ul>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category === "all" &&
                InfoCards.filter(card => card.category !== "all").map(card => (
                  <Card {...card} />
                ))}
              {category === "Program" &&
                InfoCards.filter(card => card.category === "Program").map(
                  card => <Card {...card} />
                )}
              {category === "Product" &&
                InfoCards.filter(card => card.category === "Product").map(
                  card => <Card {...card} />
                )}
              {category === "Internet" &&
                InfoCards.filter(card => card.category === "Internet").map(
                  card => <Card {...card} />
                )}
            </div>
          </div>
          <div>
            <Fittest />
          </div>
        </div>
      </div>
    </div>
  );
}
