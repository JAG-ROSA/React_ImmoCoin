import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory, Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailed } from "store/user/userAction";
import { UiManager, UserManager } from "services";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token } = useParams()

  const loginFetch = (event, newData) => {
    event.preventDefault();
    console.log(newData.password)
    const data = {
      email: newData.email,
      password: event.target.formBasicPassword.value,
    };
    UserManager.loginUser(data.email, data.password)
      .then((data) => {
        dispatch(loginSuccess(data.id));
      })
      .catch((error) => {
        dispatch(loginFailed(error.message));
        UiManager.openNotification(
          "error",
          "Hum... il y a une petite erreur..."
        );
      });
  };

  const resetPasswordFetch = (event) => {
    event.preventDefault();
    const data = {
      password: event.target.formBasicPassword.value,
      token: token,
    };
    if (event.target.formBasicPassword.value === event.target.formBasicPassword2.value) {
      UserManager.resetPassword(data)
        .then((data) => {
          console.log(data)
          loginFetch(event, data);
          dispatch(loginSuccess(data.id));
          UiManager.openNotification("success", "Mot de passe modifié, welcome back !");
          history.push("/");
        })
        .catch((error) => {
          dispatch(loginFailed(error.message));
          UiManager.openNotification(
            "error",
            "Hum... il y a une petite erreur..."
          );
        });
      } else {
        UiManager.openNotification("error", "Modification du mot de passe échouée, les mots de passes ne sont pas identiques !");
      }
  };

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-sm-5 col-lg-4 my-bg-light border-quaternary p-4 my-5">
          
          <h2 className=" my-text-tertiary">Réinitialisation</h2>
          
          <Form onSubmit={resetPasswordFetch}>
            <Form.Group controlId="formBasicPassword" className="pb-3">
              <Form.Label>Nouveau mot de passe</Form.Label>
              <Form.Control size="sm" type="password" placeholder="Mot de passe" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Confirmer le nouveau mot de passe</Form.Label>
              <Form.Control size="sm" type="password" placeholder="Confirmer le mot de passe" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-secondary mt-4 mb-3">Confirmer</Button>
          </Form>

        </div>
      </div>
    </Container>
  );
};

export default ResetPassword;
