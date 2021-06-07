import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserManager from "services/user";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const registerFetch = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.formBasicEmail.value,
      password: event.target.formBasicPassword.value,
    };
    UserManager.registerUser(data.email, data.password)
      .then((token) => {
        /* dispatch(usersRegistrationSuccess(token)); */
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <h2>Sign up</h2>
      <Form onSubmit={registerFetch}>
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

export default Register;
