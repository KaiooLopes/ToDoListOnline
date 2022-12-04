import styled from "styled-components";

const desktop = 994;

export const ContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background-color: rgb(10, 10, 10);
  color: white;
  align-items: center;

  i,
  span {
    margin: 20px;
  }

  span {
    font-weight: bold;
    letter-spacing: 2px;
  }

  i {
    transition: 0.4s;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
  }

  i:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${desktop}px) {
    height: 80px;
    i {
      display: none;
    }
  }
`;

export const Nav = styled.ul`
  ${(props) =>
    props.open
      ? `
    max-width: 200px;
    padding: 10px 30px;
  `
      : `
      max-width: 0;
      padding: 0;
  `}

  z-index: 1;
  overflow: hidden;
  list-style-type: none;
  position: absolute;
  top: 70px;
  right: 0;
  transition: 0.4s;
  text-align: center;
  background-color: rgb(10, 10, 10);

  li {
    padding: 15px 7px;
  }

  li a,
  li button {
    letter-spacing: 6px;
    border: none;
    background-color: transparent;
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: 0.4s;
  }

  li a:hover,
  li button:hover {
    color: gray;
  }

  @media (min-width: ${desktop}px) {
    position: static;
    display: flex;
    max-width: none;
    padding: 0;
    margin-right: 20px;
  }
`;
