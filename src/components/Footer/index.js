import { ContainerFooter, SocialMidia, Contact } from "./styles";

const Footer = () => {
  return (
    <ContainerFooter>
      <Contact>
        <p>
          <i class="fa-regular fa-envelope"></i> kaio.loopes18@gmail.com
        </p>

        <p>
          <i class="fa-solid fa-phone"></i> (51) 9 8653-7075
        </p>
      </Contact>
      <SocialMidia>
        <a href="google.com">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="google.com">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="google.com">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="google.com">
          <i class="fa-brands fa-github-alt"></i>
        </a>
      </SocialMidia>
    </ContainerFooter>
  );
};

export default Footer;
