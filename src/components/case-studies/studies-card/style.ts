import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 26px 32px;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-flow: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Img = styled.img<{ position: "left" | "right" }>`
  order: -1; /* Reordena a imagem como primeiro elemento */
  border-radius: 8px;
  object-fit: fill;
  width: 100%;
  height: fit-content;
  background-position: center;
  margin: auto;

  @media (min-width: 768px) {
    order: 0; /* Restaura a ordem padrão em telas maiores */
    width: 445px;
    height: 300px;
    margin-left: ${(props) => (props.position === "left" ? "auto" : "0")};
    margin-right: ${(props) => (props.position === "right" ? "auto" : "0")};
  }
`;

export const Header = styled.div`
  padding-top: 26px;
  padding-bottom: 20px;
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
