import styled from "styled-components";
import { colorType } from "../../types/common";
import { text, rounded, size } from "../../data/constants/style";

type ButtonProps = {
  w?: string;
  h?: string;
  bg?: string;
  py?: string;
  px?: string;
  border?: boolean;
  rounded?: string;
};

export const Title = styled.h2<{ color?: string; align?: string }>`
  font-size: 800;
  font-size: ${text["4xl"]};
  text-align: ${(props) => props.align ?? "center"};
  color: ${(props) => (props.color === colorType.dark ? "#080808" : "white")};
  font-family: "Raleway", serif;

  @media (min-width: 1024px) {
  }
`;

export const Description = styled.p<{ align?: string }>`
  letter-spacing: 1%;
  font-size: ${text.xs};
  color: #9c9c9c;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: ${text.sm};
    text-align: ${(props) => props.align ?? "center"};
  }
`;

export const Paragraph = styled.p`
  font-size: ${text.sm};
  letter-spacing: 1%;
  line-height: 24px;
  color: #9c9c9c;
`;

export const Img = styled.img<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  max-width: 100%; /* Garante que não ultrapasse o container */
  border-radius: 9999px; /* Mantém o formato circular */
  object-fit: cover; /* Garante que a imagem preencha sem distorções */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    /* Ajustes para dispositivos menores */
    width: ${(props) =>
      `${props.size * 0.8}px`}; /* Reduz o tamanho da imagem */
    height: ${(props) => `${props.size * 0.8}px`};
  }

  @media (max-width: 480px) {
    /* Ajustes para telas muito pequenas */
    width: ${(props) => `${props.size * 0.6}px`};
    height: ${(props) => `${props.size * 0.6}px`};
  }

  @media (min-width: 1024px) {
    /* Para telas grandes */
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
  }
`;

export const Container = styled.div<{ color?: colorType }>`
  background-color: ${(props) =>
    props.color === colorType.dark ? "#080808" : "white"};
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<{ styles?: ButtonProps }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${(props) => props.styles?.bg ?? "#3f8e00"};
  border-radius: ${rounded.base};
  border: ${(props) => (props.styles?.border ? "1px solid" : "none")};
  padding-inline: ${(props) => props.styles?.px ?? "2rem"};
  padding-block: ${(props) => props.styles?.py ?? "0.875rem"};
  width: ${(props) => props.styles?.w ?? "auto"};
  font-weight: 700;
  font-size: 1rem; /* Base font size */
  cursor: pointer;
  transition: all 0.3s ease; /* Suaviza mudanças visuais */

  /* Responsividade */
  @media (max-width: 768px) {
    padding-inline: ${(props) => props.styles?.px ?? "1.5rem"};
    padding-block: ${(props) => props.styles?.py ?? "0.75rem"};
    font-size: 0.875rem; /* Reduz o tamanho da fonte */
    width: ${(props) =>
      props.styles?.w ? "100%" : "auto"}; /* Expande em telas pequenas */
  }

  @media (max-width: 480px) {
    padding-inline: ${(props) => props.styles?.px ?? "1rem"};
    padding-block: ${(props) => props.styles?.py ?? "0.5rem"};
    font-size: 0.75rem; /* Fonte ainda menor para telas muito pequenas */
  }

  &:hover {
    background-color: "#2f6e00"; /* Cor de fundo ao passar o mouse */
    transform: scale(1.05); /* Pequeno efeito de crescimento */
  }

  &:active {
    transform: scale(0.95); /* Efeito de clique */
  }
`;

export const Header = styled.div`
  position: relative;
`;

export const MainWrapper = styled.div`
  padding-block: 80px;
  display: flex;
  padding-inline: ${size["w-12"]};
  flex-direction: column;
  gap: 60px;

  @media (min-width: 1024px) {
    padding-inline: ${size["w-44"]};
  }
`;
