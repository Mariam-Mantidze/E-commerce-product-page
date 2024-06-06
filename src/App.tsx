import { useState } from "react";
import { useContext } from "react";
import Header from "./components/Header.tsx";

import "./App.css";

/* ჰედერი - ცალკე კომპონენტი
ბურგერ მენიუს შიგთავსი - ცალკე კომპონენტი
ნავიგაციის ბარი - ცალკე კომპონენტი დეკსტოპზე
იუზერის ფოტო და  ქართი ერთად - ცალკე კომპ.

მეინში - ფოტო და დანარჩენი ყველაფერი sneaker company-dan add to cart-ამდე, ცალ-ცალკე დივებში.
ფასის ველი მთლიანად ცალკე დივში, პროცენტი და ამჟამინდელი ფასი ცალკე - გადახაზილი ფასი ცალკე.
ბათონები - ერთ დივში

*/

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
