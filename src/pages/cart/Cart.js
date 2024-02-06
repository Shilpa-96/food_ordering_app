import React from "react";
import ChangeTitle from "../../components/changetitle/ChangeTitle";
import Footer from "../../components/footer/Footer";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineEmojiSad } from "react-icons/hi";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <ChangeTitle title="Cart">
      <section className="cart-container">
        {cartItems.length === 0 ? (
          <h5 className="text-center">
            <HiOutlineEmojiSad />
            Your cart is empty
          </h5>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <Tr item={item} key={item.id} />
              ))}
            </tbody>
          </table>
        )}

        <div className="cart-desc">
          <h4>
            Subtotal: $<span className="cart__subtotal">{totalAmount}</span>
          </h4>
          <p>Taxes and shipping will calculate at checkout</p>
          <div className="cart__page-btn">
            <button className="addToCart__btn">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Continue Shopping
              </Link>
            </button>

            <button
              className={`addToCart__btn  ${totalAmount > 0 ? "" : "deactive"}`}
            >
              <Link
                to="/checkout"
                style={{ textDecoration: "none", color: "white" }}
              >
                Proceed to checkout
              </Link>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </ChangeTitle>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="cart-product-image">
        <img src={image01} alt="" />
      </td>
      <td>{title}</td>
      <td>Rs{price}</td>
      <td>{quantity}</td>
      <td className="cart__item-del">
        <MdDeleteOutline onClick={deleteItem} style={{ color: "red" }} />
      </td>
    </tr>
  );
};

export default Cart;
