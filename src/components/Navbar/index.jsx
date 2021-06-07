import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar d-flex justify-content-around">

    <h1 className="navbar-brand"> ImmoCoin </h1>

    <Link to="/">
      Home
    </Link>

    <Link to="/register">
      Register
    </Link>
    
    <Link to="/user">
      Profile
    </Link>
    
    <button>
      Log out
    </button>
    
    <Link to="/login">
      Login
    </Link>

  </nav>
);

export default Navbar;
