import { ContainerAbout, IconsTools } from "./styles";
import ButtonBack from "../../components/ButtonBack";

const About = () => {
  return (
    <ContainerAbout>
      <ButtonBack />
      <h1>To Do List</h1>
      <p>
        Neste site, você pode armazenar suas tarefas e usar de qualquer lugar
        atraves de seu login
      </p>
      <p>
        Fiz este site para colocar em meu portfólio e praticar minhas
        habilidades com as ferramentas que uso!
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
