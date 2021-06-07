import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserManager from "services/user";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const loginFetch = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.formBasicEmail.value,
      password: event.target.formBasicPassword.value,
    };
    UserManager.loginUser(data.email, data.password)
      .then((token) => {
        /* dispatch(usersLoginSuccess(token)); */
        history.push("/");
      })
      .catch((error) => {
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
