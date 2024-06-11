import styled from "styled-components";
import Burger from "./Burger";
import { useContext, useState, useRef } from "react";
import { productContext } from "../../App";
import Cart from "./Cart";

export default function Header() {
  const { burgerOpen, setBurgerOpen, count, cart } = useContext(productContext);
  const [cartOpen, setCartOpen] = useState(false);

  const handleMenuClick = () => {
    setBurgerOpen(true), setCartOpen(false);
  };

  const cartIconRef = useRef(null);

  return (
    <HeaderComponent>
      <div className="logo-menu-div">
        <img
          onClick={handleMenuClick}
          className="menu"
          src="/images/icon-menu.svg"
          alt="burger menu icon"
        />
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <div className="cart-user-div">
        <img
          ref={cartIconRef}
          onClick={() => setCartOpen(!cartOpen)}
          className="cart"
          src="/images/icon-cart.svg"
          alt="cart logo"
        />
        <span
          style={{
            position: "absolute",
            top: "15px",
            right: "65px",
            background: "rgba(255, 126, 27, 1)",
            color: "rgba(255, 255, 255, 1)",
            borderRadius: "7px",
            padding: "0px 6px",
            fontSize: "10px",
            fontWeight: "700",
          }}>
          {cart.count}
        </span>
        <img
          className="user-avatar"
          src="/images/image-avatar.png"
          alt="user avatar"
        />
      </div>

      {burgerOpen && <Burger />}
      {cartOpen && <Cart setCartOpen={setCartOpen} cartIconRef={cartIconRef} />}
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
      border-radius: 50%;

      &:hover {
        border: 2px solid rgba(255, 126, 27, 1);
      }
    }
  }
`;
