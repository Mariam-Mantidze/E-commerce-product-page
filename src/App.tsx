import { useState } from "react";
import { createContext } from "react";
import Header from "./components/header/Header.tsx";
import GlobalStyles from "./styles/Globalstyles.ts";
import "./App.css";
import styled from "styled-components";
import Main from "./components/main/Main.tsx";
import windowSize from "./styles/window-size/windowSize.ts";

export const productContext = createContext({});

function App() {
  // state for managing burger menu pop
  const [burgerOpen, setBurgerOpen] = useState(false);

  // category array for mapping
  const categories = ["Collections", "Men", "Women", "About", "Contact"];

  // state for managing product count in the cart
  const [count, setCount] = useState(0);

  // state for managing cart
  const [cart, setCart] = useState({});

  // total price
  const totalPrice = count * 125;

  const { width } = windowSize();

  return (
    <productContext.Provider
      value={{
        categories,
        burgerOpen,
        setBurgerOpen,
        count,
        setCount,
        cart,
        setCart,
        totalPrice,
        width,
      }}>
      <GlobalStyles />
      <Header />
      {burgerOpen && <Overlay />}
      <Main />
    </productContext.Provider>
  );
}

export default App;

const Overlay = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;

  @media (min-width: 1052px) {
    display: none;
  }
`;
