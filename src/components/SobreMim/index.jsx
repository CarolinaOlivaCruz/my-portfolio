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
          <li>- Framework: ReactJs, Express, Django;</li>
          <li>
            - Linguagens de Desenvolvimento: Javascript, Typescript, Python;
          </li>
          <li>
            - Tecnologias e Ferramentas: HTML, CSS Responsivo, Tailwind, Styled
            components, NextJs, construção e consumo de Api, Postgres, MySQL,
            Insomnia, DBeaver;
          </li>
          <li>- Metodologia Ágil: Scrum, Kanban;</li>
          <li>- Controle de Versionamento: Git e Github.</li>
        </ul>
      </div>
    </StyledContainer>
  );
};

export default SobreMim;
