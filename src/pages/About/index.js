import { ContainerAbout, IconsTools } from "./styles";
import ButtonBack from "../../components/ButtonBack";

const About = () => {
  return (
    <ContainerAbout>
      <ButtonBack />
      <h1>To Do List</h1>
      <p>
        On this site, you can store your tasks and use them from anywhere
        through your login.
      </p>
      <p>
        I made this site to put in my portfolio and practice my skills with the
        tools i use.
      </p>
      <IconsTools>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-js"></i>
      </IconsTools>
    </ContainerAbout>
  );
};

export default About;
