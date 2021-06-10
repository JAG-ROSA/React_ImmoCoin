import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UiManager, PropertiesManager } from "services";

const CreatePost = () => {
  const [postInformation, setPostInformation] = useState([]);

  const createPost = (event) => {
    event.preventDefault();
    const title = event.target.formTitle.value;
    const description = event.target.formDescription.value;
    const price = event.target.formPrice.value;
    PropertiesManager.createProperties(title, description, price)
      .then((response) => {
        setPostInformation(response);
        UiManager.openNotification("success", "Post créé !");
    });
  };
  console.log(postInformation);
  return (
    <Form onSubmit={createPost}>
      <Form.Group controlId="formTitle">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="Donnez un titre à votre annonce" />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Veuillez décrire votre bien" />
      </Form.Group>
      
      <Form.Group controlId="formPrice">
        <Form.Label>Prix</Form.Label>
        <Form.Control type="" placeholder="Veuillez donner un prix à votre bien" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreatePost;
