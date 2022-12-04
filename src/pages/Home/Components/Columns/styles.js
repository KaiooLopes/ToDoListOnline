import styled from "styled-components";

export const ContainerColumns = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  padding: 15px 10px;
  height: 100%;
  position: relative;
`;

export const RemoveColumn = styled.div`
  ${(props) =>
    props.removingColumn
      ? "opacity:1;visibility:visible;"
      : "opacity:0;visibility:hidden;"}
  transition: 0.4s;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 61, 61, 0.8);
  border-radius: 10px;
  text-align: right;
  button {
    font-size: 22px;
    margin: 10px 20px 0 0;
    color: white;
    border: 2px solid #b82929;
    border-radius: 20px;
    background-color: #ea5555;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0;
  justify-content: space-between;
  width: 90%;
  column-gap: 10px;

  button {
    background-color: transparent;
    ${(props) =>
      props.creating ? "transform: rotate(135deg);" : "transform: rotate(0);"}
    border: none;
    padding: 0;
    font-size: 18px;
    cursor: pointer;
    transition: 0.4s;
  }
`;

export const Title = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin: 0;
  padding: 0;
  max-width: 85%;
  overflow: hidden;
  i {
    font-size: 8px;
  }
  h4 {
    color: white;
    font-size: 20px;
  }
`;

export const CreatingCard = styled.div`
  ${(props) =>
    props.creating
      ? "max-height: 300px;transition: 0.8s ease;"
      : "max-height: 0;transition: 0.2s ease;"}
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  border-radius: 10px;
  box-shadow: 1px 1px 8px black;
  position: relative;
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
    color: #30ff00;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    border: 0;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
