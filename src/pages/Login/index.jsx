import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailed } from "store/user/userAction";
import { UiManager, UserManager } from "services";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginFetch = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.formBasicEmail.value,
      password: event.target.formBasicPassword.value,
    };
    UserManager.loginUser(data.email, data.password)
      .then((response) => {
        dispatch(loginSuccess(response.id));
        UiManager.openNotification("success", "Connexion réussie !");
        history.push("/");
      })
      .catch((error) => {
        dispatch(loginFailed(error.message));
        UiManager.openNotification(
          "error",
          "Hum... il y a une petite erreur! 🤔"
        );
      });
  };

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-sm-5 col-lg-4 my-bg-light border-quaternary p-4 my-5">
          <h2 className=" my-text-tertiary">Se connecter</h2>

          <Form onSubmit={loginFetch}>
            <Form.Group controlId="formBasicEmail" className="pb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control size="sm" type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-secondary mt-4 mb-3"
            >
              Se connecter
            </Button>
          </Form>

          <Link to="/register" className="link-tertiary">
            S'inscrire
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
