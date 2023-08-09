import styled from "styled-components";

export const ContainerNews = styled.section`
  display: flex;
  padding-top: 1rem;
  width: 100%;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
  }
`;

export const SearchNews = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-row-gap: 0.3rem; */
  grid-column-gap: 1rem;
  margin: 0 auto;
`;

export const TextNews = styled.div`
  display: flex;
  position: relative;
  padding: 1.5rem;
  background-color: white;
  width: 78%;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  span {
    font-size: 1rem;
  }

  h3 {
    font-size: 1rem;
    padding-left: 4px;
  }
`;
