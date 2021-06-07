import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="my-bg-primary">
    <div className="container">
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <Link to="/" className="title-footer">ImmoCoin</Link>
          <p class="my-text-light">© 2021 ImmoCoin</p>
        </div>
        <p class="my-text-light">Carole Meney, Arnaud Gossard, Martin Forget et Morgane Tessier</p>
      </div>
    </div>
  </footer>
);

export default Footer;