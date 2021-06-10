import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((store) => store.isLogged);

  return (
    <header>
      <nav>
        <Container>
          <div className="d-flex justify-content-between align-items-baseline nav">

            <Form.Control type="checkbox" id="nav-check" />
            <h1 className="navbar-brand"><Link to="/">ImmoCoin</Link></h1>

            <div className="nav-btn pt-2 pe-3">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <ul className="d-flex nav-links">
              {!auth ? (
                <li className="pe-3">
                  <Link to="/login" className="pe-3">Se connecter</Link>
                </li>
              ) : (
                <>
                  <li className="pe-3">
                    <Link to="/user/me">Mon dashboard</Link>
                  </li>
                  <li className="pe-3">
                    <Link to="/logout">Se déconnecter</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;