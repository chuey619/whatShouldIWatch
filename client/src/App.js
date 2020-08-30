import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Home, Login, Register, About } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import customTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
