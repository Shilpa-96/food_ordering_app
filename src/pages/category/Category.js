import React, { useState } from "react";
import { GiHamburger, GiSlicedBread, GiFruitBowl } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";

import "./category.css";

function Category() {
  const data1 = [
    {
      name: "pizza",
      url: <FaPizzaSlice />,
    },
    {
      name: "bread",
      url: <GiSlicedBread />,
    },
    {
      name: "fruit",
      url: <GiFruitBowl />,
    },
    {
      name: "drinks",
      url: <BiSolidDrink />,
    },
  ];
  const data2 = [
    {
      name: "pasta",
      url: <BiSolidDrink />,
    },
    {
      name: "burger",
      url: <GiHamburger />,
    },
    {
      name: "dessert",
      url: <BiSolidDrink />,
    },
    {
      name: "pizza",
      url: <FaPizzaSlice />,
    },
  ];
  const [more, setMore] = useState(true);
  return (
    <>
      <div className="view-more">
        <button onClick={() => setMore(!more)}>
          View {more ? "more" : "less"}...
        </button>
      </div>
      <div className="category-container">
        {data1.map((item) => {
          return (
            <div className="item">
              {item.url}
              {item.name}
            </div>
          );
        })}
        {!more &&
          data2.map((item) => {
            return (
              <div className="item spcl-item">
                {item.url}
                {item.name}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Category;
