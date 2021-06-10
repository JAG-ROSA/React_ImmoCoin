import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutSuccess, logoutFailed } from "store/user/userAction";
import { UiManager, UserManager } from "services";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    UserManager.logoutUser()
      .then(() => {
        dispatch(logoutSuccess());
        UiManager.openNotification("success", "À bientôt ✌️");
        history.push("/");
      })
      .catch((error) => {
        dispatch(logoutFailed(error.message));
        UiManager.openNotification("error", "Déconnexion échouée...");
        console.log(error.message);
      });
  });
  
  return (
    <Container>
      <p>Déconnexion en cours</p>
    </Container>
  );
};

export default Logout;
