import React from "react";
import "./BreadCrumb.css";

const BreadCrumb = ({ productName }) => {
  return (
    <div className="bread__crumb-container">
      <ul className="breadcrumb v2">
        <li>
          <a href="https://balaclavafashion.com/#/">Home</a>
        </li>
        <li>
          <a href="https://balaclavafashion.com/#/shop">Shop</a>
        </li>
        <li className="active">
          <a href="/">{productName}</a>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
