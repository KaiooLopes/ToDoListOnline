import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  position: relative;
`;
export const AddCard = styled.button`
  color: white;
  margin: 20px 0 0 0;
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

  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;

export const ConfirmRemove = styled.div`
  background-color: rgba(119, 119, 119, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  width: 80%;
  max-width: 400px;
  position: absolute;
  left: auto;
  row-gap: 15px;
  right: auto;
  top: 40vh;
  padding: 15px 0;
  z-index: 1;

  ${(props) =>
    props.confirmRemove
      ? "transform: translateY(0);opacity: 1;  visibility: visible; "
      : "transform: translateY(-200px);opacity: 0;  visibility: hidden; "}
`;

export const ConfirmText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  h3 {
    font-weight: normal;
    font-size: 20px;
  }

  p {
    font-size: 15px;
    color: #bd0c0c;
    font-weight: bold;
  }
`;
export const Btns = styled.div`
  button {
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 6px 12px;
    margin: 0 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }

    &:nth-child(1) {
      color: #e32d2d;
    }

    &:nth-child(2) {
      color: #aeaeae;
    }
  }
`;

export const RemoveCard = styled.button`
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  letter-spacing: 0.1em;
  border-radius: 10px;
  cursor: pointer;
  width: 120px;
  transition: 0.4s;
  background-color: rgb(100, 0, 0);
  color: white;

  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;
export const CreatingToDo = styled.div`
  background-color: rgba(119, 119, 119, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  width: 80%;
  max-width: 400px;
  position: absolute;
  left: auto;
  right: auto;
  top: 40vh;
  z-index: 1;

  ${(props) =>
    props.creating
      ? "transform: translateY(0);opacity: 1;  visibility: visible; "
      : "transform: translateY(-200px);opacity: 0;  visibility: hidden; "}
`;

export const CardContent = styled.form`
  width: 90%;
  margin: 10px 0;
`;

export const CardInputs = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;

  label {
    width: 45%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 0 5px;
  }

  input {
    width: 100%;
    height: 28px;
    color: white;
    padding: 0;
    border: 0;
    background-color: transparent;

    &:focus {
      outline: none;
      &::placeholder {
        color: rgba(255, 255, 255, 0.2);
      }
    }

    &::placeholder {
      transition: 0.4s;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const DivColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 400px;
  transition: 0.4s;
`;

export const Date = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  input {
    border: none;
    width: 35%;
    height: 20px;
    border-bottom: 1px solid black;
    background-color: transparent;
    color: white;
    text-align: center;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: white;
    }
  }
`;

export const Help = styled.div`
  position: absolute;
  bottom: 10px;
  right: 18px;
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: 0.4s;

    &:hover {
      background-color: rgba(200, 200, 200, 0.4);
    }

    ${(props) => props.help && "background-color: rgba(200, 200, 200, 0.4);"}
  }
`;

export const ShowHelp = styled.div`
  z-index: 1;

  &,
  * {
    ${(props) =>
      props.help
        ? "opacity:1; visibility:visible;"
        : "opacity: 0; visibility: hidden;"}
    transition: 0.4s;
  }
  margin: 7px 0;
  position: relative;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  right: 5px;
  bottom: 35px;

  p {
    font-size: 15px;
    display: flex;
    align-items: center;
  }

  p span {
    height: 10px;
    width: 10px;
    border: 1px solid black;
    margin-right: 4px;
    border-radius: 50%;
  }

  p:nth-child(1) span {
    background-color: red;
  }

  p:nth-child(2) span {
    background-color: yellow;
  }

  p:nth-child(3) span {
    background-color: green;
  }

  div:nth-child(4) {
    content: "";
    position: absolute;
    display: block;
    right: 10%;
    bottom: -19px;
    border: 10px solid white;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
`;

export const CreateCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  button {
    background-color: rgba(0, 0, 0, 0.5);

    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    border: 0;
    transition: 0.4s;
    margin: 0 5px;

    &:hover {
      transform: scale(1.1);
    }
  }

  button:nth-child(1) {
    color: #30ff00;
  }
  button:nth-child(2) {
    color: #eb3f3f;
  }
`;

export const Loading = styled.div`
  margin: 5px 0;
  text-align: center;
  p {
    color: white;
  }
`;
