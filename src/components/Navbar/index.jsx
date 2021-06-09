import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((store) => store.isLogged);

  return (
    <header>
      <nav>
        <div className="container">
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className="navbar-brand">
              <Link to="/">ImmoCoin</Link>
            </h1>
            <ul className="d-flex">
              {!auth ? (
                <>
                  <li className="pe-3">
                    <Link to="/register">S'inscrire</Link>
                  </li>
                  <li className="pe-3">
                    <Link to="/login">Se connecter</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="pe-3">
                    <Link to="/user/me">Profil</Link>
                  </li>
                  <li className="pe-3">
                    <Link to="/logout">Se déconnecter</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
