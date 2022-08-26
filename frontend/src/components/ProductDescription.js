import React from "react";
import "./ProductDescription.css";

const ProductDescription = ({ productDescription }) => {
  return (
    <div className="product__tab" id="description">
      <ul className="tabs__ul">
        <li className="active">
          <a href="#desc">Description</a>
        </li>
      </ul>
      <div className="tab__content">
        <div id="desc" className="tab__pane">
          <div className="content__desc">
            <p>{productDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
