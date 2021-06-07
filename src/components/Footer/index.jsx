import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="my-bg-primary">
    <div className="container">
      <div class="d-flex justify-content-between align-items-end">
        <div>
          <Link to="/" className="title-footer">Immo</Link>
          <p class="my-text-light">© 2021 Immo</p>
        </div>
        <p class="my-text-light">Carole Meney, Arnaud Gosard, Martin Forget et Morgane Tessier</p>
      </div>
    </div>
  </footer>
);

export default Footer;