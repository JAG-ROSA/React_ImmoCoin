import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { PropertiesManager, UiManager } from "services";

const EditProperty = () => {
  const history = useHistory();

  const location = useLocation();
  const data = location.params;
  console.log(data.data)

  const editProperty = (event) => {
    event.preventDefault();
    const title = event.target.formTitleEdit.value;
    const description = event.target.formDescriptionEdit.value;
    const price = event.target.formPriceEdit.value;
    PropertiesManager.updateProperties(title, description, price, data.data);
    UiManager.openNotification("success", " Annonce mise à jour !");
    history.push("/user/me");
  };

  return (
    <Container>
      <Form onSubmit={editProperty}>
      <Form.Group controlId="formTitleEdit">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="Donnez un titre à votre annonce" />
      </Form.Group>

      <Form.Group controlId="formDescriptionEdit">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Veuillez décrire votre bien" />
      </Form.Group>
      
      <Form.Group controlId="formPriceEdit">
        <Form.Label>Prix</Form.Label>
        <Form.Control type="" placeholder="Veuillez donner un prix à votre bien" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    
  );
};

export default EditProperty;
