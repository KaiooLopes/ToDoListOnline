import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  padding: 10px;
  width: 90%;
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

export const Completed = styled.div`
  div {
    ${(props) => {
      let color;
      if (props.progress === "dont started") {
        color = "background-color:red;";
      } else if (props.progress === "in progress") {
        color = "background-color:yellow;";
      } else if (props.progress === "finished") {
        color = "background-color:green;";
      }

      return color;
    }};
    height: 15px;
    width: 15px;
    border: 1px solid black;
    border-radius: 100px;
  }
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
