import styled from "styled-components";

export default function Header() {
  return (
    <HeaderComponent>
      <div className="logo-menu-div">
        <img src="/images/icon-menu.svg" alt="burger menu icon" />
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <div className="cart-user-div">
        <img src="/images/icon-cart.svg" alt="cart logo" />
        <img
          className="user-avatar"
          src="/images/image-avatar.png"
          alt="user avatar"
        />
      </div>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 24px 25px;

  & > .logo-menu-div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  & > .cart-user-div {
    display: flex;
    align-items: center;
    gap: 22.18px;

    & > .user-avatar {
      width: 24px;
    }
  }
`;
