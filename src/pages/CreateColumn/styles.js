import styled from "styled-components";

export const CreateColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  position: relative;
`;

export const ColumnForm = styled.div`
  background-color: rgba(12, 23, 70, 1);
  display: flex;
  border-radius: 20px;
  max-width: 400px;
  border: 6px solid black;
  padding: 10px 0;
  width: 90%;
  justify-content: center;
  align-items: center;
  form {
    width: 70%;
    * {
      margin-bottom: 8px;
    }
  }

  div {
    display: flex;
    justify-content: space-evenly;

    button {
      width: 100px;
      padding: 5px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transition: 0.4s;
      background-color: green;
      margin: 0;
    }

    button:hover {
      background-color: black;
      color: white;
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
