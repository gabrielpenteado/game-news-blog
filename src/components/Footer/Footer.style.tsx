import styled from "styled-components";

export const StyledFooter = styled.footer`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-self: end;
  justify-content: space-evenly;
  max-width: 100%;
  padding: 2rem;
  background-color: #aaaaaa;
  z-index: 1;
  gap: 1rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    align-items: center;
  }

  input {
    outline: none;
    width: 300px;
    border: none;
    background-color: whitesmoke;
    border-radius: 0.3rem;
    padding: 0.6rem;
    /* position: relative; */

    /* &:focus {
      border: 1.5px solid #096888;
    } */
  }

  div {
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    position: relative;
  }

  span {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    padding: 0%.6rem;

    i {
      font-size: 24px;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
