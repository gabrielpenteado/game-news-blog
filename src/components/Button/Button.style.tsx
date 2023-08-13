import styled from "styled-components";

type StyledButtonProps = {
  type: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: #0b97c5;
  border: none;
  outline: none;
  font-size: 1rem;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  font-family: Roboto, Arial;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: #fff;
  border-radius: 0.3rem;
  /* padding: 0.4rem 1rem; */
  padding: ${({ type }) => (type === "button" ? "0.4rem 1rem" : "0.8rem 1rem")};
  text-transform: uppercase;

  &:hover {
    background-color: #096888;
  }
`;
