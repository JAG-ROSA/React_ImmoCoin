import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registrationSuccess, registrationFailed } from "store/user/userAction";
import { UiManager, UserManager } from "services";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const registerFetch = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.formBasicEmail.value,
      password: event.target.formBasicPassword.value,
    };
    UserManager.registerUser(data.email, data.password)
      .then(() => {
        dispatch(registrationSuccess());
        UiManager.openNotification("success", "Enregistrement réussi !");
        history.push("/");
      })
      .catch((error) => {
        dispatch(registrationFailed(error.message));
        UiManager.openNotification("error", "Enregistrement échoué !");
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
