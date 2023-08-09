import styled from "styled-components";

type StyledSectionProps = {
  type: string;
};

export const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  gap: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;

export const StyledSection = styled.section<StyledSectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  gap: 1rem;
  background-color: ${(props) => (props.type === "signin" ? "blue" : "white")};
  color: ${(props) => (props.type === "signup" ? "blue" : "white")};

  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
  }
`;
