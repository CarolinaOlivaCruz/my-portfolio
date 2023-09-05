import React, { useRef } from "react";
import SobreMim from "../../components/SobreMim";
import Projetos from "../../components/Projetos";
import Tech from "../../components/Tech";
import { ContentContainer, StyledHeader } from "./style";
import Contato from "../../components/Contatos";

const Home = () => {
  const sobreMimRef = useRef(null);
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
          <button onClick={() => scrollToComponent(sobreMimRef)}>
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
        <section>
          <div ref={sobreMimRef}>
            <SobreMim />
          </div>
          <div ref={techRef}>
            <Tech />
          </div>
          <div ref={projetosRef}>
            <Projetos />
          </div>
          <div ref={contatoRef}>
            <Contato />
          </div>
        </section>
      </ContentContainer>
    </>
  );
};

export default Home;

