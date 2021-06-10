import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UiManager, UserManager } from "services";

const ForgotPassword = () => {
  const history = useHistory();

  const forgotPasswordFetch = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.formBasicEmail.value,
    };
    UserManager.forgotPassword(data)
      .then(() => {
        UiManager.openNotification("success", "Email de récupération du mot de passe envoyé !");
        history.push("/");
      })
      .catch(() => {
        UiManager.openNotification(
          "error",
          "Hum... il y a une petite erreur..."
        );
      });
  };

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-sm-5 col-lg-4 my-bg-light border-quaternary p-4 my-5">
          
          <h2 className=" my-text-tertiary">Mot de passe oublié</h2>
          
          <Form onSubmit={forgotPasswordFetch}>
            <Form.Group controlId="formBasicEmail" className="pb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control size="sm" type="email" placeholder="nom@example.com" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-secondary mt-2 mb-3">Réinitialiser</Button>
          </Form>
        
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
