import styled from "styled-components";
import CarouselSlider from "./CarouselSlider";
import SneakerInfo from "./SneakerInfo";

export default function Main() {
  return (
    <MainComponent>
      <CarouselSlider />
      <SneakerInfo />
    </MainComponent>
  );
}

const MainComponent = styled.main``;
