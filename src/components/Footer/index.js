import { ContainerFooter, SocialMidia, Contact } from "./styles";

const Footer = () => {
  return (
    <ContainerFooter>
      <Contact>
        <p>
          <i className="fa-regular fa-envelope"></i> kaio.loopes18@gmail.com
        </p>

        <p>
          <i className="fa-solid fa-phone"></i> (51) 9 8653-7075
        </p>
      </Contact>
      <SocialMidia>
        <a
          href="https://www.linkedin.com/in/kaio-alves-lopes-3a1057245/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/kaio_al1/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/kaio.alveslopes/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="https://github.com/KaiooLopes"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github-alt"></i>
        </a>
      </SocialMidia>
    </ContainerFooter>
  );
};

export default Footer;
