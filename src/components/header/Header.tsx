import styled from "styled-components";
import Burger from "./Burger";
import { useContext } from "react";
import { productContext } from "../../App";

export default function Header() {
  const { burgerOpen, setBurgerOpen } = useContext(productContext);
  return (
    <HeaderComponent>
      <div className="logo-menu-div">
        <img
          onClick={() => setBurgerOpen(true)}
          className="menu"
          src="/images/icon-menu.svg"
          alt="burger menu icon"
        />
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <div className="cart-user-div">
        <img className="cart" src="/images/icon-cart.svg" alt="cart logo" />
        <img
          className="user-avatar"
          src="/images/image-avatar.png"
          alt="user avatar"
        />
      </div>

      {burgerOpen && <Burger />}
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 24px 25px;
  position: relative;

  & > .logo-menu-div {
    display: flex;
    align-items: center;
    gap: 16px;

    & > .menu {
      cursor: pointer;
    }
  }

  & > .cart-user-div {
    display: flex;
    align-items: center;
    gap: 22.18px;

    & > img {
      cursor: pointer;
    }

    & > .user-avatar {
      width: 24px;
    }
  }
`;
