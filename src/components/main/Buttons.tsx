import styled from "styled-components";
import { useContext } from "react";
import { productContext } from "../../App";

export default function Buttons() {
  const { count, setCount } = useContext(productContext);

  const onPlusClick = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  const onMinusClick = () => {
    if (count > 0) {
      setCount((prevCount: number) => prevCount - 1);
    }
  };

  return (
    <ButtonContainer>
      <button id="quantity">
        <img
          onClick={onMinusClick}
          id="minus"
          src="images/icon-minus.svg"
          alt="minus icon"
        />
        {count}
        <img
          onClick={onPlusClick}
          id="plus"
          src="images/icon-plus.svg"
          alt="plus icon"
        />
      </button>
      <button id="cart">
        <svg
          id="cart-icon"
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="rgba(255, 255, 255, 1)"
            fillRule="nonzero"
          />
        </svg>{" "}
        Add to cart
      </button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;

  & > button {
    padding: 22px;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  & > #quantity {
    justify-content: space-around;
    background: rgba(246, 248, 253, 1);
    font-size: 16px;
    font-weight: 700;
    line-height: 19.84px;
    position: relative;

    & > img {
      position: absolute;
      top: 24.14px;
      cursor: pointer;
    }
    & > #plus {
      right: 23.14px;
    }

    & > #minus {
      left: 23.14px;
      top: 30px;
    }
  }

  /* & > #quantity::before {
    content: "";
    background-image: url("images/icon-minus.svg");
    display: inline-block;
    background-size: cover;
    width: 12px;
    height: 3px;
    position: absolute;
    left: 23.14px;
    cursor: pointer;
  } */

  /* & > #quantity::after {
    content: "";
    background-image: url("images/icon-plus.svg");
    display: inline-block;
    background-size: cover;
    width: 13px;
    height: 13px;
    position: absolute;
    right: 23.14px;
    cursor: pointer;
  } */

  & > #cart {
    justify-content: center;
    gap: 10px;
    background: rgba(255, 126, 27, 1);
    box-shadow: 0px 20px 50px -20px rgba(255, 126, 27, 1);
    font-size: 16px;
    font-weight: 700;
    line-height: 19.84px;
    color: rgba(255, 255, 255, 1);
  }
`;
