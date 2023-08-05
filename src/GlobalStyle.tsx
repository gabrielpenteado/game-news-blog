import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
    /* font-family: Newsreader, Arial; */
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Newsreader', serif;
  }

  html {
    max-width: 1920px;
    min-width: 320px;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    background-color: #e6e6e6;
  }
`;
