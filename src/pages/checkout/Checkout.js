import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ChangeTitle from "../../components/changetitle/ChangeTitle";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "./checkout.css";

export default function Checkout() {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const tax = Math.round(totalAmount * 0.05, 2);
  const shipping = 30;
  const discount = Math.round(totalAmount * 0.02, 2);
  const [errormsg, setErrormsg] = useState(
    "All fields are required, Please enter valid details"
  );
  const [form1Data, setForm1Data] = useState({
    name: "",
    phone: "",
    city: "",
    pincode: "",
    location: "",
  });
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");

  const handleForm1Change = (event) => {
    const { name, value } = event.target;
    setForm1Data({ ...form1Data, [name]: value });
  };

  const handleForm2Change = (event) => {
    setSelectedDeliveryOption(event.target.value);
  };

  const checkIfSubmitEnabled = () => {
    if (
      !/^\d{10}$/.test(form1Data.phone.trim()) ||
      !/^\d{6}$/.test(form1Data.pincode.trim()) ||
      !form1Data.name.trim() ||
      !form1Data.city.trim() ||
      !form1Data.location.trim() ||
      !selectedDeliveryOption.trim()
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    checkIfSubmitEnabled();
    event.preventDefault();
    if (checkIfSubmitEnabled()) {
      setOrderConfirmed(true);
      dispatch(cartActions.deleteAllItem());
      // Submit logic here, you can access form1Data and form2Data
    } else {
      alert(errormsg);
    }
  };

  const generateOrderId = () => {
    const uid = Math.floor(Math.random() * 900000) + 100000;
    return uid;
  };
  return (
    <ChangeTitle title={orderConfirmed ? "order-confirmed" : "checkout"}>
      {orderConfirmed ? (
        <div className="order_confirmed_container">
          <h2>Your order has been recieved</h2>
          <div>
            <FaCheckCircle className="check_mark" />
          </div>
          <div>
            Thank you for ordering from <b className="shop_name">Desi food</b>
          </div>
          <div>Your order id is: {generateOrderId()}</div>
          <div>Your order will be ready within 30 mins</div>
          <div>For any query please call at this number: 1234567890</div>
          <button className="addToCart__btn">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Continue Shopping
            </Link>
          </button>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="address">
            <h2>Shipping address</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={form1Data.name}
                  onChange={handleForm1Change}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your phone number"
                  name="phone"
                  value={form1Data.phone}
                  onChange={handleForm1Change}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your city"
                  name="city"
                  value={form1Data.city}
                  onChange={handleForm1Change}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your postal code"
                  name="pincode"
                  value={form1Data.pincode}
                  onChange={handleForm1Change}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter nearby place"
                  name="location"
                  value={form1Data.location}
                  onChange={handleForm1Change}
                />
              </div>
            </form>
            <button
              type="submit"
              className={`add-to-cart`}
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </div>
          <div className="col-1">
            <div className="delivery-type">
              <p>Delivery type</p>
              <form>
                <input
                  type="radio"
                  id="home"
                  name="delivery_type"
                  value="home_delivery"
                  required
                  checked={selectedDeliveryOption === "home_delivery"}
                  onChange={handleForm2Change}
                />
                <label htmlFor="home">Home Delivery</label>
                <br />
                <input
                  type="radio"
                  id="take-away"
                  name="delivery_type"
                  value="take_away"
                  checked={selectedDeliveryOption === "take_away"}
                  onChange={handleForm2Change}
                />
                <label htmlFor="take-away">Take Away</label>
                <br />
              </form>
            </div>
            <div className="amount">
              <div>
                <p>Subtotoal</p>
                <span>Rs {totalAmount}</span>
              </div>
              <div>
                <p>Tax & charges</p>
                <span>(+)Rs {tax}</span>
              </div>
              {selectedDeliveryOption === "home_delivery" && (
                <div>
                  <p>Shipping charges</p>
                  <span>(+)Rs {shipping}</span>
                </div>
              )}

              <div>
                <p>Discount</p>
                <span>(-)Rs {discount}</span>
              </div>
              <div className="total">
                <p>Total</p>
                <span>
                  Rs{" "}
                  {totalAmount +
                    (selectedDeliveryOption === "home_delivery"
                      ? shipping
                      : 0) +
                    tax -
                    discount}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </ChangeTitle>
  );
}
