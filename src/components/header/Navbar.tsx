import { useContext } from "react";
import { productContext } from "../../App";
import styled from "styled-components";

export default function Navbar() {
  const { categories, setNavbarOpen, width } = useContext(productContext);

  return (
    <NavbarMenu>
      <img
        onClick={() => setNavbarOpen(false)}
        src="images/icon-close.svg"
        alt="close icon"
      />

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </NavbarMenu>
  );
}

const NavbarMenu = styled.nav`
  left: 0;
  position: absolute;
  height: 100vh;
  width: 250px;
  background: rgba(255, 255, 255, 1);
  padding-top: 24.78px;
  padding-left: 25px;
  top: 0;
  z-index: 10;

  @media (min-width: 1052px) {
    position: static;
    width: unset;
    background: unset;
    padding: 0;
    height: unset;
    z-index: unset;
  }

  & > img {
    cursor: pointer;

    @media (min-width: 1052px) {
      display: none;
    }
  }

  & > ul {
    margin-top: 53.78px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 1052px) {
      margin: 0;
      flex-direction: row;
      gap: 32px;
    }

    & > li {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      color: rgba(29, 32, 38, 1);
      cursor: pointer;

      @media (min-width: 1052px) {
        font-size: 15px;
        font-weight: 400;
        color: rgba(105, 112, 125, 1);
        font-family: Kumbh Sans;
      }
    }
  }
`;
