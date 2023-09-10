import React, { useRef } from "react";
import About from "../../components/About";
import Projetos from "../../components/Projects";
import Tech from "../../components/Tech";
import { ContentContainer, StyledHeader } from "./style";
import Contato from "../../components/Contact";

const Home = () => {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToComponent = (ref: any) => {
    const element = ref.current;
    const scrollOffset =
      element.offsetTop - window.innerHeight / 2 + element.offsetHeight / 2;
    window.scrollTo({
      top: scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <StyledHeader>
        <div>
          <button onClick={() => scrollToComponent(aboutRef)}>
            Sobre mim
          </button>
          <button onClick={() => scrollToComponent(techRef)}>
            Tecnologias e Ferramentas
          </button>
          <button onClick={() => scrollToComponent(projetosRef)}>
            Projetos
          </button>
          <button onClick={() => scrollToComponent(contatoRef)}>Contato</button>
        </div>
      </StyledHeader>
      <ContentContainer>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={techRef}>
          <Tech />
        </section>
        <section ref={projetosRef}>
          <Projetos />
        </section>
        <section ref={contatoRef}>
          <Contato />
        </section>
      </ContentContainer>
    </>
  );
};

export default Home;
