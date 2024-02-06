import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./fooddetails.css";
import ChangeTitle from "../../components/changetitle/ChangeTitle";
import ProductCard from "../productcard/ProductCard";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import fooddetails_banner from "../../assets/images/fooddetails_banner.jpg";
import Footer from "../../components/footer/Footer";

export default function FoodDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.data);
  const product = products.find((item) => item.id === id);

  const relatedproduct = products.filter(
    (item) => item.category === product.category
  );
  const [imgsrc, setImgsrc] = useState(product.image01);

  const addToCart = () => {
    const { id, title, image01, price } = product;
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
    <ChangeTitle title={product.title}>
      <img
        src={fooddetails_banner}
        alt="banner"
        className="fooddetails_banner"
      />
      <h3 className="banner-heading-title">{product.title}</h3>
      <div className="food-details-container">
        <div className="col-1">
          <div className="images">
            <div className="all-images">
              <img
                src={product.image01}
                alt={product.title}
                onClick={() => setImgsrc(product.image01)}
              />
              <img
                src={product.image02}
                alt={product.title}
                onClick={() => setImgsrc(product.image02)}
              />
              <img
                src={product.image03}
                alt={product.title}
                onClick={() => setImgsrc(product.image03)}
              />
            </div>
            <div className="main-image">
              <img src={imgsrc} alt={product.title} />
            </div>
          </div>
          <div className="product-about">
            <h4>{product.title}</h4>
            <p>
              Price: <span className="price">Rs {product.price}</span>
            </p>
            <p>
              Category: <span className="category">{product.category}</span>
            </p>
            <button className="add-to-cart" onClick={addToCart}>
              Add to cart
            </button>
            <div className="description">
              <p className="desc-title">Description</p>
              <p className="desc">{product.desc}</p>
            </div>
          </div>
        </div>

        <div className="related-product-conatiner">
          <p className="title">You might like</p>
          <div className="all_products">
            {relatedproduct.map((item) => (
              <div className="product_card_container" key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </ChangeTitle>
  );
}
