import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="pt-70">
    <footer className="my-bg-primary p-4">
      <div className="container">
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <Link to="/" className="title-footer link">ImmoCoin</Link>
            <p class="my-text-light">© 2021 ImmoCoin</p>
          </div>
          <p class="my-text-light">Carole Meney, Arnaud Gossard, Martin Forget et Morgane Tessier</p>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;