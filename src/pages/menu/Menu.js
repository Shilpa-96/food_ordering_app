import React from "react";
import { RxCross1 } from "react-icons/rx";
import "./menu.css";
import { useDispatch } from "react-redux";
import { menuUiActions } from "../../store/shopping-cart/menuUiSlice";
import { Link } from "react-router-dom";

export default function Menu() {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(menuUiActions.toggle());
  };
  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-close-icon" onClick={toggleMenu}>
          <RxCross1 />
        </div>
        <div className="menu-items">
          <span>
            <Link to="/cart">Cart</Link>
          </span>
          <span>menu item1</span>
          <span>menu item1</span>
          <span>menu item1</span>
        </div>
      </div>
    </div>
  );
}
