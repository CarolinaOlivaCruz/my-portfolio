import React from "react";
import  Home  from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyles";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
};
