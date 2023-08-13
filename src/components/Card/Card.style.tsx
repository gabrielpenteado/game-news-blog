import styled from "styled-components";

type CardBodyProps = {
  $top?: boolean;
};

export const StyledCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 1rem;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.3rem;
  margin-top: 1rem;
  cursor: pointer;
`;

export const StyledCardHeader = styled.article<CardBodyProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${({ $top }) => ($top ? "1.7rem" : "0.9rem")};

  h2 {
    margin-bottom: 1rem;
    width: 100%;
    font-size: ${({ $top }) => ($top ? "1.7rem" : "0.9rem")};
  }
`;

export const StyledCardBody = styled.article`
  display: flex;
  /* align-items: center;
  justify-content: center;
  gap: 2rem; */
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }

  img {
    width: 30%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.3rem 0 0 0.3rem;
  }
`;

export const StyledCardFooter = styled.article`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  margin-bottom: 2rem;

  section {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    /* padding-bottom: 1rem; */
  }
`;
