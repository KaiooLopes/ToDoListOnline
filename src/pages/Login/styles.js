import styled from "styled-components";

const desktop = 994;

export const SignInOrLogin = styled.p`
  color: white;
  font-size: 14px;
  letter-spacing: 1.5px;
  a {
    text-decoration: none;
    color: #3895da;
    transition: 0.4s;
  }

  a:hover {
    color: #1d6ca7;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  margin: 0 auto;
  width: 70%;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const FormLogin = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 20px 0;
  width: 90%;
  border-radius: 10px;

  * {
    margin: 10px;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 80%;
    color: white;
    letter-spacing: 4px;

    input {
      margin: 10px 0;
      color: white;
      height: 35px;
      padding: 0;
      text-align: center;
      border: none;
      border-bottom: 1px solid black;
      transition: 0.3s;
      background-color: rgba(173, 173, 173, 0.1);

      &:placeholder-shown {
        letter-spacing: 2px;
      }

      &:focus {
        border-bottom: 1px solid black;
        transform: scaleY(1.1);
        outline: 0;
      }
    }
  }

  @media (min-width: ${desktop}px) {
    max-width: 700px;
  }
`;

export const BtnLogin = styled.button`
  cursor: pointer;
  letter-spacing: 2px;
  padding: 10px 40px;
  background-color: gray;
  border: none;
  color: white;
  transition: 0.4s;

  &:hover {
    background-color: black;
  }
`;

export const Error = styled.p`
  color: red;
`;
