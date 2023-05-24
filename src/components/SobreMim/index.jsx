import React from "react";
import imgPerfil from "../../assets/perfil.jpg";
import StyledContainer from "./style";

const SobreMim = () => {
  return (
    <StyledContainer>
      <div>
        <img src={imgPerfil} alt="" />
      </div>
      <div>
        <h1>
          Olá!
          <br />
          Eu sou a Ana Carolina
        </h1>
        <h2>Desenvolvedora Web Fullstack</h2>
        <p>
          Olá, se você chegou até aqui, provalmente me encontrou no Linkedin ou
          no Github, ou recebeu meu currículo. Sendo assim gostaria de
          apresentar meus projetos pessoais, utilizando algumas ou todas as
          habilidades abaixo, como:
        </p>
        <ul>
          <li>- Framework: React </li>
          <li>
            - Tecnologias de Desenvolvimento: HTML, CSS Responsivo, Javascript,
            Typescript, consumo de Api{" "}
          </li>
          <li>- Metodologia Ágil: Scrum, Kanban</li>
          <li>- Controle de Versionamento: Git e Github</li>
        </ul>
      </div>
    </StyledContainer>
  );
};

export default SobreMim;
