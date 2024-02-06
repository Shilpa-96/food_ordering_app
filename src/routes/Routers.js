import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import FoodDetails from "../pages/fooddetails/FoodDetails";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import LogIn from "../pages/login/LogIn";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import PrivateRoutes from "./PrivateRoutes";

const Routers = () => {
  return (
    <Routes>
      {/* <Route element={<PrivateRoutes />}>
        <Route path="/checkout" element={<Checkout />} />
      </Route> */}
      <Route
        path="/checkout"
        element={
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
};

export default Routers;
