import React, { useState } from "react";
import "./CarouselRight.css";

const CarouselRight = ({
  productName,
  productPrice,
  productDescription,
  colorData,
  wearSizeData,
  setSelectColor,
  sizeAdd,
  setSize,
}) => {
  const [count, setCount] = useState(1);
  return (
    <div className="product__container">
      <h3 className="product__title">{productName}</h3>
      <div className="product__price">
        {productPrice.map((prize, key) => {
          console.log(prize);
          return (
            <div key={key}>
              {prize.size_attribite_name === sizeAdd ? (
                <span className="product__price-span">
                  AED {prize.product_price}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="short__description">
        <p className="product__description">
          {productDescription.slice(0, 100)}
          <span className="read__more">
            <a href="#desc">...ReadMore</a>
          </span>
        </p>
      </div>
      <div className="colors">
        <label className="color__label">Color :</label>
        <ul>
          {colorData.map((res, key) => {
            return (
              <li key={key}>
                <label className="input__labels">
                  <input
                    onChange={() => setSelectColor(res.selected)}
                    type={"radio"}
                    name="color"
                    value={res.color_id}
                  />
                  <span
                    className="swatch"
                    style={{ backgroundColor: `${res.color_code}` }}
                  ></span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="product__price">
        <div className="size__group">
          <label className="size__group-label">SIZE :</label>
          <select
            className="product__select"
            onChange={(e) => setSize(e.target.value)}
          >
            {wearSizeData.map((size, key) => {
              return (
                <>
                  <option key={key} value={size.size_name}>
                    {size.size_name}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <a
          href="http://backprocess.balaclavafashion.com/public/storage/size_guide/165467778275.jpg"
          target="_blank"
          className="size__guide"
        >
          Size Guide
        </a>
      </div>
      <div className="single__product-button_group">
        <div className="flex align-items-center element-button">
          <div className="button__group">
            <button
              disabled={count === 1 ? true : false}
              type="button"
              className="quantity__left__minus"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <input
              type="text"
              name="number"
              className="product__quantity-number"
              onChange={(e) => console.log(e.target.value)}
              value={count}
            />
            <button
              onClick={() => setCount(count + 1)}
              type="button"
              className="quantity__right__addition"
            >
              +
            </button>
          </div>
          <a className="addto__cart__btn">
            <i className="fa-solid fa-cart-plus"></i>
            add to cart
          </a>
        </div>
      </div>
      <div className="product__tags">
        <div className="element__tags">
          <label>SKU : </label>
          {productPrice.map((prize, key) => {
            return (
              <span key={key}>
                {prize.size_attribite_name === sizeAdd ? (
                  <span className="product__tag-span">{prize.product_sku}</span>
                ) : null}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselRight;
