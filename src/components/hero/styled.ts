import styled from "styled-components";
import { text } from "../../data/constants/style";

export const Section = styled.section`
  background-color: #080808;
  padding-inline: 4px;
  height: fit-content;
  padding-bottom: 84px;
  padding-top: calc(100px - 16px);
  @media (min-width: 768px) {
    padding-inline: 85px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 25px 0px;
  align-items: center;
  justify-content: center;
  padding-inline: 32px;
  padding-block: 80px;
  grid-template-areas:
    "photo"
    "description";

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas: "description photo"; /* Em telas maiores, o layout volta ao original */
    padding-inline: 95px;
  }
`;

export const Title = styled.h1`
  ${text["4xl"]}
  font-weight: 800;
  line-height: 51.66px;
  color: white;
  margin-bottom: 10px;
  text-align: center;
  @media (min-width: 768px) {
    ${text["5xl"]};
    text-align: left;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-auto-flow: row;
  white-space: "pre-line";
  grid-area: description;
`;
export const ContainerPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: photo;
`;

export const Box = styled.div`
  border: 1px solid #1b1b1b;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 24px;
  padding-inline: 12px;
  border-radius: 4px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
`;

export const ImgBox = styled.img`
  width: 32px;
  height: 32px;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;
  grid-auto-flow: row;
`;
