import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SobreMim from "../../components/SobreMim";
import Projetos from "../../components/Projetos";
import Tech from "../../components/Tech";
import { ContentContainer, StyledHeader } from "./style";

const Home = () => {
  const sobreMimRef = useRef(null);
  const techRef = useRef(null);
  const projetosRef = useRef(null);

  const scrollToComponent = (ref: any) => {
    const element = ref.current;
    const scrollOffset = element.offsetTop - window.innerHeight / 2 + element.offsetHeight / 2;
    window.scrollTo({
      top: scrollOffset,
      behavior: "smooth"
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
          <button>Contato</button>
          <button>light/dark</button>
        </div>
      </StyledHeader>
      <ContentContainer>
        <div>
          <div ref={sobreMimRef}>
            <SobreMim />
          </div>
          <div ref={techRef}>
            <Tech />
          </div>
          <div ref={projetosRef}>
            <Projetos />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;