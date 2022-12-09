import styled from "styled-components";

export const ContainerColumns = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  padding-bottom: 20px;
  padding: 15px 0;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0;
  justify-content: space-between;
  width: 90%;
  column-gap: 10px;

  ${(props) =>
    props.home ? "justify-content: space-between;" : "justify-content: center;"}

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

  i:last-child {
    font-size: 18px;
    color: white;
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
  i,
  i:last-child {
    font-size: 8px;
    color: white;
  }
  h4 {
    color: white;
    font-size: 20px;
  }
`;
