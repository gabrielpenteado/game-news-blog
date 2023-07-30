import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,200;1,6..72,300;1,6..72,400;1,6..72,500;1,6..72,600;1,6..72,700;1,6..72,800&display=swap");

  @import url("https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,200;1,6..72,300;1,6..72,400;1,6..72,500;1,6..72,600;1,6..72,700;1,6..72,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

  * {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
    font-family: Newsreader, Arial;
  }

  html {
    max-width: 1920px;
    min-width: 320px;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    background-color: whitesmoke;
  }
`;
