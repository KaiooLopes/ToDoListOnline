import Cards from "../Cards/Cards";
import "./Columns.css";
import { Fragment } from "react";

function Columns(props) {
  const { children, title, card1, card2 } = props;
  const arr = [card1, card2];
  return (
    <Fragment>
      <div className="column-head">
        <div className="column-head-color"></div>
        <div className="column-head-darken"></div>
      </div>
      <div className="column">
        <h4 className="column-title">{children}</h4>
        {arr.map((obj, i) => (
          <Cards key={i} cardTitle={obj.cardTitle} label={obj.label}></Cards>
        ))}
      </div>
    </Fragment>
  );
}

export default Columns;
