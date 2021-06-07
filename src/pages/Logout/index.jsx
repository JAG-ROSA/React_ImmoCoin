import React from "react";
import UserManager from "services/user";
import { Container } from "react-bootstrap";

import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  const logoutFetch = () => {
    UserManager.logoutUser()
      .then(() => {
        /* dispatch(usersLogoutSuccess()); */
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  logoutFetch();

  return (
    <Container>
      <p>Déconnexion en cours</p>
    </Container>
  );
};

export default Logout;
