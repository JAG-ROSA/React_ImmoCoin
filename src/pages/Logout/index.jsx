import React, { useEffect } from "react";
import UserManager from "services/user";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { logoutSuccess, logoutFailed } from "store/user/userAction";
import "antd/dist/antd.css";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
    });
  };

  const logoutFetch = () => {
    UserManager.logoutUser()
      .then(() => {
        dispatch(logoutSuccess());
        openNotification("success", "À bientôt ✌️");
        history.push("/");
      })
      .catch((error) => {
        dispatch(logoutFailed(error.message));
        openNotification("error", "Déconnexion échouée...");
        console.log(error.message);
      });
  };

  useEffect(() => {
    logoutFetch();
  }, []);

  return (
    <Container>
      <p>Déconnexion en cours</p>
    </Container>
  );
};

export default Logout;
