import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem;
  background-color: #aaaaaa;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
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
    /* top: 1; */
    height: 100%;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: whitesmoke;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #096888;
      color: whitesmoke;
    }
  }

  input {
    outline: none;
    /* width: 100%; */
    /* font-size: 1rem; */
    border: none;
    background-color: whitesmoke;
    border-radius: 0.3rem;
    padding: 0.6rem;

    &:focus {
      /* border: 1px solid #096888; */
    }
  }
`;

export const StyledErrorSpan = styled.span`
  display: flex;
  justify-content: center;
  background-color: #ffcdcd;
  color: #9e0000;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.3rem;
`;
