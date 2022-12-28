import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
  }
  
  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }
  
  ul,
  ol,
  li {
    list-style: none;
  }
`