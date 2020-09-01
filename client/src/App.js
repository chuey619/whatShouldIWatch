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

import { UserContext } from "./contexts";
import useUser from "./hooks/useUser";

import customTheme from "./theme";

function App() {
  const user = useUser();

  console.log(user);
  return (
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
  );
}

export default App;
