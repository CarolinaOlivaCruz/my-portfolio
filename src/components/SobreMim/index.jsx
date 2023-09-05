import React from "react";
import imgPerfil from "../../assets/perfil.jpg";
import StyledContainer from "./style";

const SobreMim = () => {
  return (
    <StyledContainer>
      <div>
        <img src={imgPerfil} alt="" />
      </div>
      <article>
        <h1>
          Olá!
          <br />
          Eu sou a Ana Carolina
        </h1>
        <h2>Desenvolvedora Web Fullstack</h2>
        <p>
          Se você chegou até aqui, provalmente me encontrou no Linkedin ou
          no Github, ou recebeu meu currículo. Sendo assim gostaria de
          apresentar meus projetos pessoais, utilizando algumas ou todas as
          habilidades abaixo, como:
        </p>
        <ul>
          <li>- Framework: <span>ReactJs, Express, Django</span>;</li>
          <li>
            - Linguagens de Desenvolvimento: <span>Javascript, Typescript, Python</span>;
          </li>
          <li>
            - Tecnologias e Ferramentas: <span>HTML, CSS Responsivo, Tailwind, Styled
            components, NextJs, construção e consumo de Api, Postgres, MySQL,
            Insomnia, DBeaver</span>;
          </li>
          <li>- Metodologia Ágil: <span>Scrum, Kanban</span>;</li>
          <li>- Controle de Versionamento: <span>Git e Github</span>.</li>
        </ul>
      </article>
    </StyledContainer>
  );
};

export default SobreMim;
