import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { cartActions } from "../../store/shopping-cart/cartSlice";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    const { id, title, image01, price } = item;
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  return (
    <>
      <div className="product_img">
        <img src={item.image01} alt={item.title} />
      </div>
      <div className="product_name_price">
        <div className="product_name">
          <h4>
            <Link
              to={`/foods/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {item.title}
            </Link>
          </h4>
        </div>
        <span className="product_price">Rs{item.price}</span>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        Add to cart
      </button>
    </>
  );
}
