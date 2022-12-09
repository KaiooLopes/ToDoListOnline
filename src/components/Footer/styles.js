import styled from "styled-components";

const desktop = 994;

export const ContainerFooter = styled.div`
  color: white;
  padding-bottom: 30px;
  background-color: #ffab62;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (min-width: ${desktop}px) {
    width: 70%;
    left: 15%;
    right: 15%;
  }
`;
