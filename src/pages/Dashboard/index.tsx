import { CardsProject } from "../../components/CardsProjects";
import imgHeader from "../../assets/img-dash.png";
import { StyledContentDash } from "./style";

export const Dashboard = () => {
  return (
    <StyledContentDash>
      <header>
        <img src={imgHeader} alt="" />
      </header>
      <main>
        <h2>Meus Projetos</h2>
        <CardsProject />
      </main>
    </StyledContentDash>
  );
};
