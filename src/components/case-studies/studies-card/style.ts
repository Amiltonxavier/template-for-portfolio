import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 26px;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Header = styled.div`
  padding-top: 26px;
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button<{ color: string }>`
  margin-top: 16px;
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  width: fit-content;
  font-weight: 700;
  border-radius: 4px;
  padding-inline: 24px;
  padding-block: 12px;
`;

export const Img = styled.img<{ position: "left" | "right" }>`
  border-radius: 8px;
  object-fit: fill;
  width: 200px;
  height: fit-content;
  background-position: center;
  @media (min-width: 768px) {
    width: 445px;
    height: 300px;
    margin-left: ${(props) => (props.position === "left" ? "auto" : "0")};
    margin-right: ${(props) => (props.position === "right" ? "auto" : "0")};
  }
`;

export const Badge = styled.span<{ color: string }>`
  display: flex;
  background-color: #fff6e9;
  padding-inline: 10px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  font-weight: 700;
  width: fit-content;
`;
