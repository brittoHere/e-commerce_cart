import React, { useEffect, useState } from "react";
import {
  Header,
  // DrawerComponent,
  BrandName,
  BreadCrumb,
  CarouselComponent,
  // CarouselRight,
  ProductDescription,
  // Footer,
} from "../components";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [colorList, setColorList] = useState([]);
  const [wearSize, setWearSize] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backprocess.balaclavafashion.com/api/v1/getProductsDetails?product_id=67"
      )
      .then((res) => {
        setProductName(res.data.product_details.product_name);
        setProductDescription(res.data.product_details.product_description);
        setColorList(res.data.product_details.color);
        setWearSize(res.data.product_details.size);
      });
  }, []);

  return (
    <div className="home__container">
      <Header />
      {/* <DrawerComponent /> */}
      <BrandName productName={productName} />
      <BreadCrumb productName={productName} />
      <CarouselComponent
        productDescription={productDescription}
        productName={productName}
        colorList={colorList}
        wearSize={wearSize}
      />
      <ProductDescription productDescription={productDescription} />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
