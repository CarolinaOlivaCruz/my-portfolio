import React from "react";
import html5 from "../../assets/html.svg";
import css3 from "../../assets/css.svg";
import js from "../../assets/js.svg";
import ts from "../../assets/ts.svg";
import reactjs from "../../assets/react.svg";
import express from "../../assets/express.svg";
import postgres from "../../assets/postgresql.svg";
import python from "../../assets/python.svg";
import nodejs from "../../assets/nodejs.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import jira from "../../assets/jira.svg";
import trello from "../../assets/trello.svg";
import StyledContainer from "./style";

const Tech = () => {
  return (
    <StyledContainer>
      <ul>
        <li>
          <img src={html5} alt="HTML5" title="HTML5" />
        </li>
        <li>
          <img src={css3} alt="CSS3" title="CSS3" />
        </li>
        <li>
          <img src={js} alt="JavaScript" title="JavaScript" />
        </li>
        <li>
          <img src={ts} alt="TypeScript" title="TypeScript" />
        </li>
        <li>
          <img src={reactjs} alt="ReactJs" title="ReactJs" />
        </li>
        <li>
          <img src={nodejs} alt="NodeJs" title="NodeJs" />
        </li>
        <li>
          <img src={express} alt="Express" title="Express" />
        </li>
        <li>
          <img src={postgres} alt="Postgres" title="Postgres" />
        </li>
        <li>
          <img src={python} alt="Python" title="Python" />
        </li>
        <li>
          <img src={git} alt="Git" title="Git" />
        </li>
        <li>
          <img src={github} alt="Github" title="Github" />
        </li>
        <li>
          <img src={jira} alt="Jira" title="Jira" />
        </li>
        <li>
          <img src={trello} alt="Trello" title="Trello" />
        </li>
      </ul>
    </StyledContainer>
  );
};

export default Tech;
