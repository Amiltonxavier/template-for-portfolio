import styled from "styled-components";
import { size } from "../../data/constants/style";

export const Header = styled.header`
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #1b1b1b;
  position: fixed;
  overflow: hidden;
  height: 2.5rem;
  z-index: 1000;
  left: 180px;
  right: 180px;
  height: auto;

  div {
    display: flex;
    gap: 16px;
    margin-left: auto;
    align-items: center;
    padding-right: 12px;
  }

  span {
    @media (min-width: 768px) {
      overflow: hidden;
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    left: 16px;
    right: 16px;
    padding: 18px;
    div {
      gap: 12px;
      padding-right: 8px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
  padding: 24px;
  transition: opacity 0.3s ease;
  @media (max-width: 768px) {
    visibility: visible;
    opacity: 1;
    gap: 16px;
    padding: 16px;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }

  &.active {
    color: #007bff;
    font-weight: bold;
  }

  img {
    width: ${size["w-6"]};
    height: ${size["w-6"]};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    img {
      width: ${size["w-5"]};
      height: ${size["w-5"]};
    }
  }
`;
