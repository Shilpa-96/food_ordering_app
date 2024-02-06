import React from "react";
import { RxCross1 } from "react-icons/rx";
import CartsItem from "./CartsItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "./carts.css";

export default function Carts() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalAmount);
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="carts-container">
      <div className="carts">
        <div className="carts-close-icon" onClick={toggleCart}>
          <RxCross1 />
        </div>
        <div className="carts-items-list">
          {cartProducts.length === 0 ? (
            <h4>No items in cart</h4>
          ) : (
            cartProducts.map((item, index) => (
              <CartsItem item={item} key={index} />
            ))
          )}
        </div>
        <div className="carts-container-bottom">
          <p>
            Total : <span>{totalPrice}rs</span>
          </p>
          <Link to="/checkout">
            <button
              disabled={totalPrice < 1}
              onClick={() => dispatch(cartUiActions.toggle())}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
