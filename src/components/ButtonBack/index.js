import { ButtonBackDiv } from "./styles";
import { Link } from "react-router-dom";

const ButtonBack = () => {
  return (
    <ButtonBackDiv>
      <Link to="/">
        <i class="fa-solid fa-chevron-left"></i>Back
      </Link>
    </ButtonBackDiv>
  );
};

export default ButtonBack;
