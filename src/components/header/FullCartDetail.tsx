import styled from "styled-components";
import { useContext } from "react";
import { productContext } from "../../App";

export default function FullCartDetail() {
  const { count, setCount } = useContext(productContext);

  const totalPrice = count * 125;

  return (
    <CartItemInfo>
      <div className="item">
        {" "}
        <div className="flex-parent">
          <img
            className="thumbnail"
            src="images/image-product-1-thumbnail.jpg"
            alt="product thumbnail"
          />
          <div className="flex-group">
            <span>Fall Limited Edition Sneakers</span> <br />
            <span>$125 x {count} </span>{" "}
            <span id="total">{`$${totalPrice}`}</span>
          </div>
        </div>
        <img
          //   onClick={() => setCount(0)}
          style={{ cursor: "pointer" }}
          src="images/icon-delete.svg"
          alt="delete icon"
        />
      </div>

      <button>Checkout</button>
    </CartItemInfo>
  );
}

const CartItemInfo = styled.div`
  padding: 24px 24px 32px;
  & > .item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .thumbnail {
      width: 50px;
      border-radius: 5px;
    }

    & span {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      color: rgba(105, 112, 125, 1);
    }

    & .flex-parent {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    & #total {
      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
      color: rgba(29, 32, 38, 1);
    }
  }
  & > button {
    width: 100%;
    background: rgba(255, 126, 27, 1);
    padding: 22px;
    border: none;
    border-radius: 10px;
    margin-top: 24px;

    font-size: 16px;
    font-weight: 700;
    line-height: 19.84px;
    color: rgba(255, 255, 255, 1);
  }
`;
