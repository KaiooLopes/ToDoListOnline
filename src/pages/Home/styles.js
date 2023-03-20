import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  width: 90%;
  margin: 0 auto;

  h1 {
    margin: 30px auto 0;
    font-size: 35px;
    text-shadow: 2px 2px 2px gray;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    color: white;
  }
`;

export const HomeColumns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  row-gap: 20px;
  align-items: center;
`;

export const DivClick = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Buttons = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  column-gap: 10px;

  button {
    color: white;
    margin: 0;
    border: none;
    padding: 10px;
    font-size: 16px;
    letter-spacing: 0.1em;
    border-radius: 10px;
    cursor: pointer;
    width: 120px;
    transition: 0.4s;
    background-color: rgb(0, 100, 100);
    color: white;
  }

  button:hover {
    background-color: rgb(0, 0, 0);
  }
`;

export const Loading = styled.div`
  p {
    color: white;
  }
`;
