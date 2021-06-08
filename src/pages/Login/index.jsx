import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserManager from "services/user";
import { useHistory } from "react-router-dom";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailed } from "store/user/userAction";
import "antd/dist/antd.css";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
    });
  };

  const loginFetch = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.formBasicEmail.value,
      password: event.target.formBasicPassword.value,
    };
    UserManager.loginUser(data.email, data.password)
      .then(() => {
        dispatch(loginSuccess());
        openNotification("success", "Connexion réussie !");
        history.push("/");
      })
      .catch((error) => {
        dispatch(loginFailed(error.message));
        openNotification("error", "Hum... il y a une petite erreur...");
        console.log(error.message);
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
