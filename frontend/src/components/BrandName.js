import React from "react";
import "./BrandName.css";

const BrandName = ({ productName }) => {
  return (
    <div className="shop__heading">
      <img
        src="https://balaclavafashion.com/img/shop-head.png"
        className="banner__bg"
        alt="banner"
      />
      <h1>{productName.toUpperCase()}</h1>
    </div>
  );
};

export default BrandName;
