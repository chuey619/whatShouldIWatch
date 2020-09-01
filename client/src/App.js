import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import {
  Home,
  Login,
  Register,
  About,
  Results,
  MyProfile,
  Show,
} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FullWidth } from "./layouts";

import customTheme from "./theme";
import { UserProvider } from "./contexts/userContext";

function App() {
  const initialState = {
    user: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: action.user,
        };

      case "logout":
        return {
          ...state,
          user: {},
        };

      default:
        return state;
    }
  };

  return (
    <UserProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Router>
          <Switch>
            <Route exact path="/">
              <FullWidth>
                <Home />
              </FullWidth>
            </Route>
            <Route path="/login">
              <FullWidth>
                <Login />
              </FullWidth>
            </Route>
            <Route path="/register">
              <FullWidth>
                <Register />
              </FullWidth>
            </Route>
            <Route path="/about">
              <FullWidth>
                <About />
              </FullWidth>
            </Route>
            <Route path="/profile">
              <FullWidth>
                <MyProfile />
              </FullWidth>
            </Route>
            <Route path="/results">
              <FullWidth>
                <Results />
              </FullWidth>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/results" render={(props) => <Results {...props} />} />
            <Route path="/media/:id" render={(props) => <Show {...props} />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
