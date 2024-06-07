import styled from "styled-components";
import Buttons from "./Buttons";

export default function SneakerInfo() {
  return (
    <InfoPanel>
      <div className="paragraphs">
        <h4>SNEAKER COMPANY</h4>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>

      <div className="price-container">
        <div className="price-flex-grp">
          <span id="price">$125.00</span>
          <span id="discount">50%</span>
        </div>

        <span id="original-price">$250.00</span>
      </div>

      <Buttons />
    </InfoPanel>
  );
}

const InfoPanel = styled.div`
  padding: 24px 24px 88px;

  & h4 {
    font-size: 12px;
    font-weight: 700;
    line-height: 14.88px;
    letter-spacing: 1.8461538553237915px;
    color: rgba(255, 126, 27, 1);
  }

  & h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    color: rgba(29, 32, 38, 1);
    margin-top: 19px;
  }

  & p {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: rgba(105, 112, 125, 1);
    margin-top: 15px;
  }

  & .price-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 28px;

    & > #original-price {
      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
      text-decoration: line-through;
      color: rgba(182, 188, 200, 1);
    }

    & > .price-flex-grp {
      display: flex;
      align-items: center;
      gap: 16px;

      & > #price {
        font-size: 28px;
        font-weight: 700;
        line-height: 34.73px;

        color: rgba(29, 32, 38, 1);
      }

      & > #discount {
        font-size: 16px;
        font-weight: 700;
        line-height: 19.84px;
        color: rgba(255, 126, 27, 1);
        padding: 7px 8px;
        background: rgba(255, 238, 226, 1);
        border-radius: 10px;
      }
    }
  }
`;
