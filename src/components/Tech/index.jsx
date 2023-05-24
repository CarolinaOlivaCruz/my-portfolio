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
      <div>
        <ul>
          <li>
            <img src={html5} alt="html5" />
          </li>
          <li>
            <img src={css3} alt="html5" />
          </li>
          <li>
            <img src={js} alt="html5" />
          </li>
          <li>
            <img src={ts} alt="html5" />
          </li>
          <li>
            <img src={reactjs} alt="html5" />
          </li>
          <li>
            <img src={nodejs} alt="html5" />
          </li>
          <li>
            <img src={express} alt="html5" />
          </li>
          <li>
            <img src={postgres} alt="html5" />
          </li>
          <li>
            <img src={python} alt="html5" />
          </li>
          <li>
            <img src={git} alt="html5" />
          </li>
          <li>
            <img src={github} alt="html5" />
          </li>
          <li>
            <img src={jira} alt="html5" />
          </li>
          <li>
            <img src={trello} alt="html5" />
          </li>
        </ul>
      </div>
    </StyledContainer>
  );
};

export default Tech;
