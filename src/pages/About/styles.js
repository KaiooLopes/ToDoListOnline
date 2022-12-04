import styled from "styled-components";

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 20px auto 0;
  row-gap: 15px;

  * {
    margin: 10px;
  }

  h1 {
    font-size: 35px;
    text-shadow: 2px 2px 2px gray;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    color: white;
  }

  p {
    color: white;
    font-size: 23px;
    text-align: center;
    line-height: 2em;
    letter-spacing: 2px;
  }
`;

export const IconsTools = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 600px;
  justify-content: space-evenly;
  i {
    font-size: 40px;
    transition: 0.4s;
    padding: 10px;
  }

  i:nth-child(1) {
    color: #2a9ec5;
  }

  i:nth-child(3) {
    color: #df7d18;
  }

  i:nth-child(2) {
    color: #1863df;
  }

  i:nth-child(4) {
    color: #c4b923;
  }

  i:hover {
    transform: scale(1.3);
  }
`;
