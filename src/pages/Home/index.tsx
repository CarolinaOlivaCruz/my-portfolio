import imgBackground from "../../assets/img-background.png";
import imgPerfil from "../../assets/perfil.png";
import { StyledHeader, StyledProfile } from "./style";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <StyledHeader>
        <img src={imgBackground} alt="" />
      </StyledHeader>
      <main>
        <StyledProfile>
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
              Desenvolvimento Web Full Stack
            </p>
            <button>
              <Link to="/dashboard">Meus projetos</Link>
            </button>
          </div>
        </StyledProfile>
      </main>
    </>
  );
};
