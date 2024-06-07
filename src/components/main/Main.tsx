import styled from "styled-components";
import { useState } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export default function Main() {
  const slides = [1, 2, 3, 4];
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 1 ? prevIndex - 1 : slides.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > slides.length - 1 ? 1 : prevIndex + 1
    );
  };

  return (
    <MainComponent>
      <div className="img-container">
        <Slider>
          {slides.map((imageIndex, index) => (
            <img
              key={index}
              className={`main-img ${
                imageIndex === currentIndex ? "active" : ""
              }`}
              src={`images/image-product-${imageIndex}.jpg`}
              alt="product image"
            />
          ))}
        </Slider>

        <div className="arrow-circle circle-right custom-prev-arrow">
          <img
            onClick={handlePrevClick}
            className="arrow right"
            src="images/icon-previous.svg"
            alt="arrow right"
          />
        </div>

        <div className="arrow-circle circle-left custom-next-arrow">
          <img
            onClick={handleNextClick}
            className="arrow left"
            src="images/icon-next.svg"
            alt="arrow left"
          />
        </div>
      </div>
    </MainComponent>
  );
}

const MainComponent = styled.main`
  & > .img-container {
    transition: transform 0.5s ease;

    & > .main-img {
      display: none;
      position: relative;
      width: 100%;
      /* transition: transform 0.2s ease-in-out;
      transform: translateX(0); */
    }

    .slider a.previousButton,
    .slider a.nextButton {
      top: 51%;
      /* left: 10%; */
      opacity: 0;
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
    }

    & .circle-left {
      right: 16px;
      top: 250px;
    }

    & .circle-right {
      left: 16px;
      top: 250px;
    }
  }
`;

const SneakerInfo = styled.div``;
