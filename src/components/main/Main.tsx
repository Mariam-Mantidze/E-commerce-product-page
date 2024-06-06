import styled from "styled-components";

export default function Main() {
  const imageIndexes = [1, 2, 3, 4];
  return (
    <MainComponent>
      <div className="img-container">
        {imageIndexes.map((imageIndex, index) => (
          <img
            key={index}
            className="main-img"
            src={`images/image-product-${imageIndex}.jpg`}
            alt="product image"
          />
        ))}

        <div className="arrow-circle circle-right">
          <img
            className="arrow right"
            src="images/icon-previous.svg"
            alt="arrow right"
          />
        </div>

        <div className="arrow-circle circle-left">
          <img
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
      width: 375px;
      position: relative;
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
