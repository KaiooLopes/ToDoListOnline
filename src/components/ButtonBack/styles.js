import styled from "styled-components";

export const ButtonBackDiv = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  i {
    transition: 0.2s;
  }
  &:hover {
    i {
      transform: translateX(-8px);
    }
  }

  a,
  i {
    font-size: 20px;
  }
  a {
    background-color: transparent;
    border: none;
    color: white;
    text-decoration: none;
    &:active {
      color: white;
    }
  }
`;
