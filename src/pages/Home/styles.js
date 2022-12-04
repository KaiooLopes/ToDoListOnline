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

export const ColumnForm = styled.div`
  z-index: 2;
  position: absolute;
  top: 100%;
  justify-content: center;
  display: flex;
  width: 100%;
  padding-top: 10px;
  text-align: left;
  border-radius: 10px;
  background-color: rgba(12, 23, 70, 0.9);
  margin-top: 10px;
  form {
    width: 90%;
    * {
      margin-bottom: 8px;
    }
  }

  div {
    display: flex;
    justify-content: space-evenly;

    button {
      width: 45%;
    }

    button:nth-child(1) {
      background-color: green;
    }

    button:nth-child(2) {
      background-color: red;
    }

    button:hover {
      background-color: black;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    color: white;
    text-align: center;
  }

  input {
    color: white;
    text-align: center;
    border: none;
    outline: none;
    background-color: transparent;
    height: 30px;
    border-bottom: 2px solid black;
    appearance: none;
    &::placeholder {
      color: rgba(250, 250, 250, 0.5);
    }
  }
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 25px;

  span:nth-child(${(props) => props.idColor}) {
    border: 1px solid white;
    transform: scale(1.2);
  }
`;

export const Color = styled.span`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const HomeColumns = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  column-gap: 20px;
  row-gap: 20px;
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

export const RemoveColumnBtn = styled.button`
  background-color: rgb(170, 0, 0);
  color: white;
`;
