import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

export default function CartsItem({ item }) {
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const increamentItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <div className="cart-items">
      <img src={image01} alt={title} />
      <div className="cart-item-info">
        <div>
          <p className="cart-item-title">{title}</p>
          <p className="cart-item-price">
            {quantity}x <span>{price} rs</span>
          </p>
        </div>
        <div className="increase-decrease-btn">
          <span className="increase-btn" onClick={increamentItem}>
            <AiOutlinePlus />
          </span>
          <span>{quantity}</span>
          <span className="decrease-btn" onClick={decreaseItem}>
            <AiOutlineMinus />
          </span>
        </div>
        <span className="delete-btn" onClick={deleteItem}>
          <RxCross1 />
        </span>
      </div>
    </div>
  );
}
