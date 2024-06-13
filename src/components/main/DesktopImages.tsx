import styled from "styled-components";
import { useState } from "react";

export default function DesktopImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  const thumbnailSlide = [
    "images/image-product-0-thumbnail.jpg",
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
  ];
  return (
    <ImageContainer>
      <img
        src={`images/image-product-${activeIndex}.jpg`}
        alt="product image"
      />

      <div className="thumbnail-container">
        {/* <div className="img-container"> </div> */}
        {thumbnailSlide.map((img, index) => (
          <img
            onClick={() => setActiveIndex(index)}
            key={index}
            src={img}
            alt="product image thumbnail"
          />
        ))}
      </div>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  & > img {
    width: 445px;
    border-radius: 10px;
  }

  & > .thumbnail-container {
    display: flex;
    align-items: center;
    gap: 31px;
    margin-top: 32px;

    & img {
      border-radius: 10px;
      width: 88px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
