import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="pt-70">
    <footer className="my-bg-primary p-4">
      <Container>
        <div className="d-flex justify-content-between align-items-end">
          <div className="pe-3">
            <Link to="/" className="title-footer link">ImmoCoin</Link>
            <p className="my-text-light pt-2">© 2021 ImmoCoin</p>
          </div>
          <p className="my-text-light text-end">Carole Meney, Arnaud Gossard, Martin Forget et Morgane Tessier</p>
        </div>
        </Container>
    </footer>
  </div>
);

export default Footer;