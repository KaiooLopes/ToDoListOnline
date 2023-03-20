import styled, { createGlobalStyle } from "styled-components";

import background from "./background.png";
const desktop = 994;

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.80),rgba(0, 0, 0, 1)), url(${background}), repeat-y;
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;
    margin: 0 auto;

    @media (min-width: ${desktop}px){
      width: 70%;
    }
  }
  

  *{
    margin: 0;
    font-family: sans-serif;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  margin-bottom: 40px;
`;
