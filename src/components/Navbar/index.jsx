import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header>
    <nav>
      <div className="container">
        <div className="d-flex justify-content-between align-items-baseline">
          <h1 className="navbar-brand"><Link to="/">ImmoCoin</Link></h1>
          <div className="col-3">
            <ul className="d-flex justify-content-between">
              <li><Link to="/register">S'inscrire</Link></li>
              <li><Link to="/user">Profil</Link></li>
              <li><Link to="/login">Se connecter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;