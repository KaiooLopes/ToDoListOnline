import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 15px;
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  align-items: center;

  button {
    border: none;
    background-color: red;
    border-radius: 50px;
    cursor: pointer;
    font-size: 18px;
    color: white;
  }
`;

export const TitleAndCheck = styled.div`
  overflow: hidden;
  display: flex;
  column-gap: 5px;
  div {
    cursor: pointer;
  }
  h3 {
    line-height: 1;
  }
`;

export const Date = styled.div`
  display: flex;
  column-gap: 0.2em;
  font-size: 15px;
`;

export const CardBody = styled.div`
  padding: 5px;
  color: white;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  p {
    text-align: center;
    word-wrap: break-word;
  }
`;
