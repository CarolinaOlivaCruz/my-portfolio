import React from "react";
import StyledContainer from "./style";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import whatsapp from "../../assets/whatsapp.svg";

const Contato = () => {
  return (
    <StyledContainer>
      <ul>
        <li>
          <img src={github} alt="" />
          <a href="https://github.com/CarolinaOlivaCruz" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li>
          <img src={linkedin} alt="" />
          <a href="https://linkedin.com/in/carolina-oliva-cruz" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </li>
        <li>
          <img src={gmail} alt="" />
          <span>carol.oliva.cruz@gmail.com</span>
        </li>
        <li>
          <img src={whatsapp} alt="" />
          <span>(81) 99254-7202</span>
        </li>
      </ul>
    </StyledContainer>
  );
};

export default Contato;
