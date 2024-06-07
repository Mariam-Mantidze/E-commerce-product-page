import styled from "styled-components";
import { useState } from "react";

export default function Main() {
  const imageIndexes = [1, 2, 3, 4];
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 1 ? prevIndex - 1 : imageIndexes.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > imageIndexes.length - 1 ? 1 : prevIndex + 1
    );
  };

  return (
    <MainComponent>
      <div className="img-container">
        {imageIndexes.map((imageIndex, index) => (
          <img
            key={index}
            className={`main-img ${
              imageIndex === currentIndex ? "active" : ""
            }`}
            src={`images/image-product-${imageIndex}.jpg`}
            alt="product image"
          />
        ))}

        <div className="arrow-circle circle-right">
          <img
            onClick={handlePrevClick}
            className="arrow right"
            src="images/icon-previous.svg"
            alt="arrow right"
          />
        </div>

        <div className="arrow-circle circle-left">
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
    & > .main-img {
      display: none;
      position: relative;
      width: 100%;
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
      top: 25%;
    }

    & .circle-right {
      left: 16px;
      top: 25%;
    }
  }
`;

const SneakerInfo = styled.div``;
