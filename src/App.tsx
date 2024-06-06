import { useState } from "react";
import { createContext } from "react";
import Header from "./components/header/Header.tsx";
import GlobalStyles from "./styles/Globalstyles.ts";
import "./App.css";
import styled from "styled-components";
import Main from "./components/main/Main.tsx";

export const productContext = createContext({});

/* ჰედერი - ცალკე კომპონენტი
ბურგერ მენიუს შიგთავსი - ცალკე კომპონენტი
ნავიგაციის ბარი - ცალკე კომპონენტი დეკსტოპზე
იუზერის ფოტო და  ქართი ერთად - ცალკე კომპ.

მეინში - ფოტო და დანარჩენი ყველაფერი sneaker company-dan add to cart-ამდე, ცალ-ცალკე დივებში.
ფასის ველი მთლიანად ცალკე დივში, პროცენტი და ამჟამინდელი ფასი ცალკე - გადახაზილი ფასი ცალკე.
ბათონები - ერთ დივში

*/

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const categories = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <productContext.Provider value={{ categories, burgerOpen, setBurgerOpen }}>
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
