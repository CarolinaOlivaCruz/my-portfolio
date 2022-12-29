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
          <div>
            <img src={imgPerfil} alt="" />
          </div>
          <div>
            <h1>Quem sou eu?</h1>
            <p>
              Olá me chamo Ana Carolina, mais conhecida por Carol. Nunca
              imaginei na área de tech mas quando conheci a programação web tudo
              mudou.
            </p>
            <p>
              Em Julho de 2022 comecei a formação da Kenzie para desenvolvimento
              full stack. Na formação desenvolvi projetos Frontend usando HTML,
              CSS, JavaScript, Typescript e React. Mas além de adquirir
              habilidades de Hard Skill, também desenvolvi habilidades de Soft
              Skill, visto que a formação aplica conceitos do Scrum, e também
              tive a oportunidade de desenvolver projetos em equipe.
            </p>
            <button>
              <Link to="/dashboard">Meus projetos</Link>
            </button>
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
