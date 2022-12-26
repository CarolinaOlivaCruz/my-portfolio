import imgBackground from "../assets/img-background.png";
import imgPerfil from "../assets/perfil.png";

import { CardsProject } from "../components/CardsProjects";

export const Home = () => {
  return (
    <>
      <header>
        <img src={imgBackground} alt="" />
      </header>
      <main>
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
              Desenvolvimento Web Full Stack
            </p>
          </div>
        </section>
        <section>
          <CardsProject />
        </section>
      </main>
    </>
  );
};
