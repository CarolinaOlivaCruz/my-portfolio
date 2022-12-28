import React from "react";
import { Routers } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routers />
    </div>
  );
};
