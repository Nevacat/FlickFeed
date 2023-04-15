import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
  ${reset}
  :root{
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
  body{
    height: 100vh;
    background-color:#a8d5f5;
  }
`