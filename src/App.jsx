import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'style/style.scss'
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Home from "pages/Home";
import Register from "pages/Register";
import Profile from "pages/Profile";
import Login from "pages/Login";

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
    <Footer />
  </Router>
);

export default App;
