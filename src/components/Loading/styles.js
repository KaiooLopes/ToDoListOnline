import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(62, 62, 62, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    @keyframes rotateAndScale {
      to {
        transform: rotate(1turn);
      }
    }
    width: 50px;
    height: 50px;
    border: 8px solid blue;
    border-top-color: gray;
    border-left-color: gray;
    border-right-color: gray;
    background-color: transparent;
    border-radius: 50%;
    animation: rotateAndScale 1s infinite;
  }
`;
