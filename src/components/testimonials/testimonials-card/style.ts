import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  padding-inline: 20px;
  padding-block: 28px;
  flex-direction: column;
  gap: 12px;
  width: 250px;
  max-height: 212px;
  border: 1px solid #333;
  border: 2px solid transparent;
  border-radius: 20px;
  background: linear-gradient(to right, #080808, #080808),
    linear-gradient(to right, #484848, #1b1b1b00);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-color: transparent;
  border-radius: 8px;
  div {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  div > h4 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
  }

  span {
    position: absolute;
    top: -8px;
  }

  @media (min-width: 1280px) {
    width: 445px;
    max-height: 212px;
    padding-inline: 30px;
    padding-block: 20px;
    gap: 24px;
  }
`;
