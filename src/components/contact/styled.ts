import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: auto;
  width: 100%;
  @media (min-width: 768px) {
    width: fit-content;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  line-height: 15px;
  color: white;
`;

export const Input = styled.input`
  padding-inline: 12px;
  border: 1px solid #d8d8d8;
  height: 2.5rem;
  width: 100%;
  outline: none;
  border-radius: 4px;
  &:focus {
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #d8d8d8;
  min-height: 120px;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  outline: none;

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
