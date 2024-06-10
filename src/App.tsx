import { useState } from "react";
import { createContext } from "react";
import Header from "./components/header/Header.tsx";
import GlobalStyles from "./styles/Globalstyles.ts";
import "./App.css";
import styled from "styled-components";
import Main from "./components/main/Main.tsx";

export const productContext = createContext({});

function App() {
  // state for managing burger menu pop
  const [burgerOpen, setBurgerOpen] = useState(false);

  // category array for mapping
  const categories = ["Collections", "Men", "Women", "About", "Contact"];

  // state for managing product count in the cart
  const [count, setCount] = useState(0);

  // state for cart
  const [cart, setCart] = useState(0);

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
`;
