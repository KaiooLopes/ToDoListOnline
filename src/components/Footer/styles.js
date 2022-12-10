import styled from "styled-components";

const desktop = 994;

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  background-color: #2d2d2d;
  width: 100%;
  position: fixed;
  row-gap: 10px;
  padding: 10px 0;
  bottom: 0;
  left: 0;

  @media (min-width: ${desktop}px) {
    padding: 18px 0;
    width: 70%;
    left: 15%;
    right: 15%;
    flex-direction: row;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: space-between;

  p {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 20px;
      margin-right: 10px;
    }
  }

  @media (min-width: ${desktop}px) {
    flex-direction: row;
  }
`;
export const SocialMidia = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    font-size: 20px;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50px;
    transition: 0.4s;
    cursor: pointer;
    color: white;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
    }
  }

  a:nth-child(1) {
    background-color: #033db0;
  }
  a:nth-child(2) {
    background-image: linear-gradient(#e326b6, #e3a926);
  }
  a:nth-child(3) {
    background-color: #2c64d4;
  }
  a:nth-child(4) {
    background-color: #232323;
  }
`;
