import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem;
  background-color: white;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledImageLogo = styled.img`
  width: 16rem;
  height: 2.8rem;
  cursor: pointer;
  margin-right: 6rem;
`;

export const StyledInputSpace = styled.div`
  position: relative;
  width: 14rem;
  display: flex;
  align-items: center;

  button {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: whitesmoke;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #0bade3;
      color: whitesmoke;
    }
  }

  input {
    outline: none;
    width: 100%;
    font-size: 1rem;
    border: none;
    background-color: whitesmoke;
    border-radius: 0.3rem;
    padding: 0.6rem;

    &:focus {
      border: 1px solid #0bade3;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: #0bade3;
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
  padding: 0.4rem 1rem;
  text-transform: uppercase;

  &:hover {
    background-color: #0a86af;
  }
`;
