import React from "React";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
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

  </div>
);

export default Navbar;
