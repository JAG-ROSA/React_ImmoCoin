import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/user" exact>
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
