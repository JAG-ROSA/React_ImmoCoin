import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserManager from "services/user";
import { useHistory } from "react-router-dom";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import {
  registrationSuccess,
  registrationFailed,
} from "store/user/userAction";
import "antd/dist/antd.css";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
    });
  };

  const registerFetch = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.formBasicEmail.value,
      password: event.target.formBasicPassword.value,
    };
    UserManager.registerUser(data.email, data.password)
      .then(() => {
        dispatch(registrationSuccess());
        openNotification("success", "Enregistrement réussi !");
        history.push("/");
      })
      .catch((error) => {
        dispatch(registrationFailed(error.message))
        openNotification("error", "Enregistrement échoué !");
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
