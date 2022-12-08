import styled from "styled-components";

export const CreateColumnContainer = styled.div`
  display: flex;
  background-color: rgba(12, 23, 70, 0.9);
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 17%;
  padding: 30px 20px 20px;
`;

export const ColumnForm = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: center;
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
      cursor: pointer;
      transition: 0.4s;
      background-color: green;
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
