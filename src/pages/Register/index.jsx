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

    if (event.target.formBasicPassword.value === event.target.formBasicPassword2.value) {
      UserManager.registerUser(data.email, data.password)
        .then(() => {
          dispatch(registrationSuccess());
          UiManager.openNotification("success", "Bienvenue ! 🙂");
          history.push("/");
        })
        .catch((error) => {
          dispatch(registrationFailed(error.message));
          UiManager.openNotification("error", "Enregistrement échoué !");
        });

    } else {
      UiManager.openNotification("error", "Enregistrement échoué, les mots de passes ne sont pas identiques !");
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-sm-5 col-lg-4 my-bg-light border-quaternary p-4 my-5">
          
          <h2 className=" my-text-tertiary">S'inscrire</h2>
          
          <Form onSubmit={registerFetch}>

            <Form.Group controlId="formBasicEmail" className="pb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control size="sm" type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="pb-3">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control size="sm" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control size="sm" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-secondary mt-4 mb-3">S'inscrire</Button>
          </Form>
        
        </div>
      </div>
    </Container>
  );
};

export default Register;
