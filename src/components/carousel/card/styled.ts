import styled from "styled-components";
import { rounded, size } from "../../../data/constants/style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size["w-10"]};
  width: 445;
  max-width: 445px;
  overflow: hidden;
`;

export const Image = styled.img`
  border-radius: ${rounded.base};
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: fit-content;
  width: 445px;
  height: 300px;
`;

export const Wrapper = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
