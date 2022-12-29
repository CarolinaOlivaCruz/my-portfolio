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
            <p>Olá, me chamo Ana Carolina, tenho 25 anos.</p>
            <p>
              Antes de entrar no mundo da programação, trabalhava com
              artesanato.{" "}
            </p>
            <p>
              Hoje, sou aluna da Kenzie Academy, e estou me formando em
              Desenvolvimento Web Full Stack Hoje, sou aluna da Kenzie Academy,
              e estou me formando em Desenvolvimento Web Full Stack Hoje, sou
              aluna da Kenzie Academy, e estou me formando em Desenvolvimento
              Web Full Stack Hoje, sou aluna da Kenzie Academy, e estou me
              formando em Desenvolvimento Web Full Stack
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
