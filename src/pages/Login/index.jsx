import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <h2>
        Please Log In
      </h2>
      <br />
      <Form>

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