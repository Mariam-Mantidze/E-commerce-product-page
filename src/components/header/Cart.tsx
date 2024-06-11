import styled from "styled-components";
import FullCartDetail from "./FullCartDetail";
import { useContext } from "react";
import { productContext } from "../../App";

export default function Cart() {
  const { count, cart, setCart } = useContext(productContext);

  return (
    <CartElement>
      <h4>Cart</h4>
      <div className="divider"></div>

      {Object.values(cart).length > 0 ? (
        <FullCartDetail />
      ) : (
        <p>Your cart is empty</p>
      )}
    </CartElement>
  );
}

const CartElement = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 1);

  height: 28vh;
  border-radius: 10px;
  z-index: 3;
  top: 77px;
  right: 8px;
  left: 8px;
  display: flex;
  flex-direction: column;

  & > .divider {
    width: 100%;
    background: rgba(228, 233, 242, 1);
    height: 1px;
  }

  & > h4 {
    padding: 24px;
    color: rgba(29, 32, 38, 1);
    font-size: 16px;
    font-weight: 700;
    line-height: 19.84px;
  }

  & > p {
    align-self: center;
    margin: auto;
    color: rgba(105, 112, 125, 1);
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
  }
`;
