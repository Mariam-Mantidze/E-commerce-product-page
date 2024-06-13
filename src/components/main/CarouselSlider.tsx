import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useContext } from "react";
import { productContext } from "../../App";
import DesktopImages from "./DesktopImages";

export default function CarouselSlider() {
  const mainImgSlide = [
    "images/image-product-0.jpg",
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
  ];

  const { width } = useContext(productContext);
  return (
    <ImageContainer>
      {width < 1052 ? (
        <Slider>
          {mainImgSlide.map((img, index) => (
            <img
              key={index}
              className="main-img"
              src={img}
              alt="product image"
            />
          ))}
        </Slider>
      ) : (
        <DesktopImages />
      )}

      <div className="arrow-circle circle-right custom-prev-arrow">
        <img
          // onClick={handlePrevClick}
          className="arrow right"
          src="images/icon-previous.svg"
          alt="arrow right"
        />
      </div>

      <div className="arrow-circle circle-left custom-next-arrow">
        <img
          // onClick={handleNextClick}
          className="arrow left"
          src="images/icon-next.svg"
          alt="arrow left"
        />
      </div>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  & .main-img {
    object-fit: cover;
    object-position: center;
  }

  & .slider {
    height: 300px;

    @media (min-width: 1052px) {
      display: none;
    }
  }

  .slider a.previousButton,
  .slider a.nextButton {
    top: 51%;
    opacity: 0;
  }
  .slide.animateIn,
  .slide.animateOut {
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
  }

  .slide.animateIn.previous,
  .slide.animateIn.next {
    left: 0;
    visibility: visible;
  }

  & > .active {
    display: inline-block;
  }

  & > .arrow-circle {
    position: absolute;
    background: rgba(255, 255, 255, 1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (min-width: 1052px) {
      display: none;
    }
  }

  & .circle-left {
    right: 16px;
    top: 202px;
  }

  & .circle-right {
    left: 16px;
    top: 202px;
  }
`;
