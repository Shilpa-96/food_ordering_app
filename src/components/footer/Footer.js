import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./footer.css";
import { useSelector, useDispatch } from "react-redux";
import { menuUiActions } from "../../store/shopping-cart/menuUiSlice";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../authentication/firebase";

function Footer() {
  let authentication = sessionStorage.getItem("Auth Token");

  const showMenu = useSelector((state) => state.menuUi.menuIsVisible);

  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigateto = (path) => {
    navigate(`${path}`);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      sessionStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const toggleMenu = () => {
    if (showCart === true) {
      dispatch(cartUiActions.toggle());
    }
    dispatch(menuUiActions.toggle());
  };
  const toggleCart = () => {
    if (showMenu === true) {
      dispatch(menuUiActions.toggle());
    }
    dispatch(cartUiActions.toggle());
  };
  return (
    <div>
      <div className="footer-container-1">
        <span></span>
        <span className="cart" onClick={toggleCart}>
          <BsCart4 className="cart-icon" />
          <span className="item-quantity">{totalQuantity}</span>
        </span>
        <span></span>
      </div>
      <div className="footer-container">
        <span className="home">
          <HiHome onClick={() => navigateto("/")} />
        </span>
        <span className="menu-icon" onClick={toggleMenu}>
          <AiOutlineMenu />
        </span>
        <span className="login-icon">
          {/* <FaUserCircle /> */}
          {authentication === "authorized" ? (
            <button onClick={logOut} className="login_logout">
              LogOut
            </button>
          ) : (
            <button
              onClick={() => navigateto("/login")}
              className="login_logout"
            >
              LogIn
            </button>
          )}
        </span>
      </div>
    </div>
  );
}

export default Footer;
