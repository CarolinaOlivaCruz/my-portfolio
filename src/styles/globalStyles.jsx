import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
  }

  /* body {
    height: 100vh;
    color: #f4fdf6;
    background:  #0c2253;
  } */

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

// #492b69
// #683b8c
// #ba3a99
// #b43793
// #ff39c6
// #f342b1
// #f284ed

// #0c2253
// #1a2f64
// #118cba
// #15a3d6
// #1dd6f8
// #7cecfb
// #77fff9
// #f4fdf6