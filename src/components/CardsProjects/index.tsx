import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledList } from "./style";

export const CardsProject = () => {
  const { listProjects } = useContext(UserContext);

  return (
    <StyledList>
      {listProjects?.map((item) => {
        const { name, html_url, language, description } = item;

        return (
          <li>
            <h3>{name.replace("-"," ").toLocaleUpperCase()}</h3>
            <p>{language}</p>
            <span>{description}</span>
            <a href={html_url}>Ver projeto no Github</a>
          </li>
        );
      })}
    </StyledList>
  );
};
