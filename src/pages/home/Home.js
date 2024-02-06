import React, { useEffect, useState } from "react";
import "./home.css";
import { VscBellDot } from "react-icons/vsc";
import ChangeTitle from "../../components/changetitle/ChangeTitle";
import copoun from "./food-coupons.jpg";
import { GiHamburger, GiSlicedBread, GiFruitBowl } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";

import "./category.css";
import ProductCard from "../productcard/ProductCard";
import Reviews from "./Reviews";
import network from "../../assets/images/network.png";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../store/datastore/dataSlics";
import SearchSortFood from "../search_sort_food/SearchSortFood";

import Footer from "../../components/footer/Footer";

export default function Home() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.data.category);
  const products = useSelector((state) => state.data.data);
  const data1 = [
    {
      name: "ALL",
      url: <FaPizzaSlice />,
    },
    {
      name: "PIZZA",
      url: <FaPizzaSlice />,
    },
    {
      name: "BREAD",
      url: <GiSlicedBread />,
    },
    {
      name: "FRUIT",
      url: <GiFruitBowl />,
    },
    {
      name: "DRINKS",
      url: <BiSolidDrink />,
    },
  ];
  const data2 = [
    {
      name: "PASTA",
      url: <BiSolidDrink />,
    },
    {
      name: "BURGER",
      url: <GiHamburger />,
    },
    {
      name: "DESSERT",
      url: <BiSolidDrink />,
    },
  ];
  const [more, setMore] = useState(true);
  const updateData = (cat) => {
    dispatch(dataActions.categorialData(cat));
  };

  return (
    <ChangeTitle title="Home">
      <div className="home-container">
        <span className="bell_icon">
          <VscBellDot
            style={{
              borderRadius: "50%",
              border: "2px solid red",
              padding: "3px",
            }}
          />
        </span>
        <div className="offer-corousel">
          <img src={copoun} alt="corousel" className="copoun" />
        </div>
        <div className="search-food-container">
          <SearchSortFood />
        </div>
        <div className="top-menu">
          {/* -------CATEGORY------------ */}
          <div className="view-more">
            <button onClick={() => setMore(!more)}>
              View {more ? "more" : "less"}...
            </button>
          </div>
          <div className="category-container">
            {data1.map((item) => {
              return (
                <button
                  key={item.name}
                  className={`item ${
                    category === item.name ? "category-btn-active" : ""
                  }`}
                  onClick={() => {
                    updateData(item.name);
                  }}
                >
                  {item.url}
                  {item.name}
                </button>
              );
            })}
            {!more &&
              data2.map((item) => {
                return (
                  <button
                    key={item.name}
                    className={`item ${
                      category === item.name ? "category-btn-active" : ""
                    }`}
                    onClick={() => {
                      updateData(item.name);
                    }}
                  >
                    {item.url}
                    {item.name}
                  </button>
                );
              })}
          </div>
        </div>
        <div className="all_products">
          {products.length < 1 ? (
            <div className="no-products">No such products are available</div>
          ) : (
            products.map((item) => (
              <div className="product_card_container" key={item.id}>
                <ProductCard item={item} />
              </div>
            ))
          )}
        </div>

        {/* ---------- CUSTOMER REVIEWS-------------- */}
        <section>
          <div className="reviews">
            <div className="reviews-desc">
              <h4 className="reviews-desc-title">
                Review by our valuable Customers
              </h4>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                quos a illum voluptatem delectus id itaque totam incidunt
                consequuntur sed, dolor porro aut excepturi,
              </p>
              <Reviews />
            </div>
            <div className="network-img">
              <img src={network} alt="network" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </ChangeTitle>
  );
}
