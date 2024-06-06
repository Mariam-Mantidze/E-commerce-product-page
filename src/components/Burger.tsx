import { useContext } from "react";
import { productContext } from "../App";
import styled from "styled-components";

export default function Burger() {
  const { categories, setBurgerOpen } = useContext(productContext);

  return (
    <BurgerMenu>
      <img
        onClick={() => setBurgerOpen(false)}
        src="images/icon-close.svg"
        alt="close icon"
      />

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </BurgerMenu>
  );
}

const BurgerMenu = styled.div`
  left: 0;
  position: absolute;
  height: 100vh;
  width: 70%;
  background: rgba(255, 255, 255, 1);
  padding-top: 24.78px;
  padding-left: 25px;
  top: 0;
  z-index: 10;

  & > img {
    cursor: pointer;
  }

  & > ul {
    margin-top: 53.78px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > li {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      color: rgba(29, 32, 38, 1);
      cursor: pointer;
    }
  }
`;
