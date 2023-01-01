import imgBackground from "../../assets/img-background.png";
import imgPerfil from "../../assets/perfil.png";
import { StyledContentLink, StyledHeader, StyledMain } from "./style";
import { Link } from "react-router-dom";
import git from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

export const Home = () => {
  return (
    <>
      <StyledHeader>
        <img src={imgBackground} alt="" />
      </StyledHeader>
      <StyledMain>
        <section>
          <img src={imgPerfil} alt="" />
          <div>
            <h1>Quem sou eu?</h1>
            <p>
              Olá, se você chegou até aqui, provalmente me encontrou no Linkedin
              ou no Github, ou recebeu meu currículo. Sendo assim gostaria de
              apresentar meus projetos pessoais, utilizando algumas ou todas as
              habilidades abaixo, como:
            </p>
            <p>- Framework: React</p>
            <p>
              - Tenologias de Desenvolvimento: HTML, CSS, Javascript, Typescript
            </p>
            <p>- Metodologia Ágil: Scrum, Kanban</p>
            <p>- Controle de Versionamento: Git e Github</p>

            <Link to="/dashboard">Meus projetos</Link>
          </div>
        </section>
      </StyledMain>
      <StyledContentLink>
        <button>
          <a href="https://github.com/CarolinaOlivaCruz">
            <img src={git} alt="" />
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/carolina-oliva-cruz/">
            <img src={linkedin} alt="" />
          </a>
        </button>
      </StyledContentLink>
    </>
  );
};
