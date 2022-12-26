import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const CardsProject = () => {
  const { listProjects } = useContext(UserContext);

  return (
    <ul>
      {listProjects?.map((item) => {
        const { name, html_url, language, description } = item;

        return (
          <li>
            <h2>{name}</h2>
            <h3>{language}</h3>
            <p>{description}</p>
            <a href={html_url}>Ver projeto no Github</a>
          </li>
        );
      })}
    </ul>
  );
};
