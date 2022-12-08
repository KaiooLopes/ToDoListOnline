import styled from "styled-components";

export const ContainerHome = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 43px;

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
  padding-top: 20px;
  row-gap: 20px;
  align-items: center;
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
  }

  button:hover {
    background-color: rgb(0, 0, 0);
  }
  button:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`;

export const AddColumnBtn = styled.button`
  background-color: rgb(0, 100, 100);
  color: white;
`;
