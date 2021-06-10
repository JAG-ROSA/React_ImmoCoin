import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "style/style.scss";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Home from "pages/Home";
import Register from "pages/Register";
import Profile from "pages/Profile";
import Login from "pages/Login";
import Logout from "pages/Logout";
import ShowProperty from "pages/ShowProperty";
import EditProperty from "pages/EditProperty";

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
        <Route path="/user/me">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/properties/:propId">
          <ShowProperty />
        </Route>
        <Route path="/property/edit">
          <EditProperty />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
