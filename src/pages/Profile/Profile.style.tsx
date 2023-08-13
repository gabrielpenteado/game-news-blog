import styled from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;
  gap: 2rem;

  h2 {
    color: blue;
    font-family: "Roboto", sans-serif;
  }

  span {
    text-transform: capitalize;
  }
`;
