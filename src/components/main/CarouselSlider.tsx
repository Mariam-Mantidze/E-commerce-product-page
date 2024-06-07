import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export default function CarouselSlider() {
  const slides = [1, 2, 3, 4];
  return (
    <ImageContainer>
      <Slider>
        {slides.map((imageIndex, index) => (
          <img
            key={index}
            className="main-img"
            src={`images/image-product-${imageIndex}.jpg`}
            alt="product image"
          />
        ))}
      </Slider>

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


    & > .main-img {
      display: none;
      position: relative;
      width: 100%;
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
