import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
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
      .then((data) => {
        dispatch(loginSuccess(data.id));
        UiManager.openNotification("success", "Connexion réussie !");
        history.push("/");
      })
      .catch((error) => {
        dispatch(loginFailed(error.message));
        UiManager.openNotification(
          "error",
          "Hum... il y a une petite erreur..."
        );
      });
  };

  return (
    <Container>
      <h2>Please Log In</h2>
      <br />
      <Form onSubmit={loginFetch}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
