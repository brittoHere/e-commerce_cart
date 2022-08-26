import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselRight } from "../components";
import "./CarouselComponent.css";

const CarouselComponent = ({
  colorList,
  productName,
  productDescription,
  wearSize,
}) => {
  let carouselImages = [];
  let productPrice = [];
  let colorData = [];
  let wearSizeData = [];

  const [selectColor, setSelectColor] = useState(1);

  const [sizeAdd, setSize] = useState("S");

  colorList.forEach((res, key) => {
    colorData.push(res);
    if (selectColor === 0) {
      if (res.selected === 0) {
        res.display_images.forEach((images) => {
          carouselImages.push(images);
        });
        res.prize_array.forEach((prize) => {
          productPrice.push(prize);
        });
      }
    }
    if (selectColor === 1) {
      if (res.selected === 1) {
        res.display_images.forEach((images) => {
          carouselImages.push(images);
        });
        res.prize_array.forEach((prize) => {
          productPrice.push(prize);
        });
      }
    }
  });

  wearSize.forEach((res, key) => {
    console.log(key);
    wearSizeData.push(res);
  });

  return (
    <div className="carousel__container">
      <div className="carousel__container-row">
        <div className="col-xs-12 col-sm-6 col-md-6">
          <Carousel
            onChange={(e) => console.log(e)}
            showArrows={true}
            autoPlay={false}
          >
            {carouselImages.map((res, key) => {
              console.log(res);
              return (
                <div key={key}>
                  <img src={res} alt="wears" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 customproductDetailcss">
          <CarouselRight
            productDescription={productDescription}
            productName={productName}
            productPrice={productPrice}
            colorData={colorData}
            wearSizeData={wearSizeData}
            selectColor={selectColor}
            setSelectColor={(item) => setSelectColor(item)}
            sizeAdd={sizeAdd}
            setSize={(item) => setSize(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
