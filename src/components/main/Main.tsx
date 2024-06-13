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

const MainComponent = styled.main`
  @media (min-width: 1052px) {
    display: flex;
    align-items: center;
    gap: 125px;
    padding: 90px 212px 132px;
  }
`;
