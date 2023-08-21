import React from "react";
import StyledContainer from "./style";
import melisearch from "../../assets/melisearch.png";
import marvelComics from "../../assets/marvel-comics.png";
import burguerBig from "../../assets/burguer-big.png";

const Projetos = () => {
  return (
    <StyledContainer>
      <ul>
        <li>
          <img src={melisearch} alt="" />
          <div>
            <h3>MeliSearch</h3>
            <p>
              La aplicación es una especie de catálogo de productos que debe
              contener una lista de productos y una pantalla de detalles para
              cada uno. Además, la aplicación debe permitir hacer filtros por
              búsqueda, categoría y precio.
            </p>
            <div className="content-links">
              <a href="https://y-carolinaolivacruz.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href="https://github.com/CarolinaOlivaCruz/projet-meli-search" target="_blank" rel="noopener noreferrer">
                Repositório
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={burguerBig} alt="" />
          <div>
            <h3>Burguer Big</h3>
            <p>
              Essa aplicação e-commerce de fast food é uma versão simples e
              básica de uma loja virtual que oferece aos clientes a
              possibilidade de fazer pedidos de comida rápida. O objetivo
              principal deste MVP é testar rapidamente a ideia de negócio com o
              mínimo de recursos possíveis.
            </p>
            <div className="content-links">
              <a href="https://project-burguer-big.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href="https://github.com/Kenzie-Academy-Brasil-Developers/project-burguer-big" target="_blank" rel="noopener noreferrer">
                Repositório
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={marvelComics} alt="" />
          <div>
            <h3>Marvel Comics</h3>
            <p>
              A aplicação é uma espécie de catálogo de quadrinhos, que deve
              conter uma lista de quadrinhos e uma tela de detalhes para cada
              quadrinho. Além disso, a aplicação deve permitir o envio dos
              quadrinhos para um endereço selecionado no mapa, utilizando o
              Google Maps.
            </p>
            <div className="content-links">
              <a href="https://spa-mavel-comics-carolinaolivacruz.vercel.app/" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href="https://github.com/CarolinaOlivaCruz/spa-marvel-comics" target="_blank" rel="noopener noreferrer">
                Repositório
              </a>
            </div>
          </div>
        </li>
      </ul>
      <a href="https://github.com/CarolinaOlivaCruz">Ver outros projetos</a>
    </StyledContainer>
  );
};

export default Projetos;
