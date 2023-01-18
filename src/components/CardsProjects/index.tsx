import { StyledList } from "./style";
import appFinance from "../../assets/app-finance.png";

export const CardsProject = () => {
  return (
    <StyledList>
      <li>
        <img src={appFinance} alt="Uma imagem do projeto Controle Financeiro" />
        <section>
          <h3>Controle Financeiro <span>- JavaScript</span></h3>
          <p>
            Uma aplicação em construção, que gerencia as transações de entradas
            e saídas do usuário.
          </p>
          <div>
            <a href="https://control-finance-sigma.vercel.app">
              Ver com aplicação
            </a>
            <a href="https://github.com/CarolinaOlivaCruz/control-finance">
              Repositório do projeto
            </a>
          </div>
        </section>
      </li>
    </StyledList>
  );
};
