import React from "react";
import StyledContainer from "./style";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import whatsapp from "../../assets/whatsapp.svg";

const Contact = () => {
  const numeroWhatsapp = "5581992547202";

  const handleWhatsappClick = () => {
    window.location.href = `https://wa.me/${numeroWhatsapp}`;
  };

  return (
    <StyledContainer>
      <ul>
        <li>
          <img src={github} alt="Ícone Github" />
          <a
            href="https://github.com/CarolinaOlivaCruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <img src={linkedin} alt="Ícone Linkedin" />
          <a
            href="https://linkedin.com/in/carolina-oliva-cruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <img src={gmail} alt="Ícone Gmail" />
          <span>carol.oliva.cruz@gmail.com</span>
        </li>
        <li>
          <img src={whatsapp} alt="Ícone Whatsapp" />
          <a
            href={`https://wa.me/${numeroWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
          >
            (81) 99254-7202
          </a>
        </li>
      </ul>
    </StyledContainer>
  );
};

export default Contact;
