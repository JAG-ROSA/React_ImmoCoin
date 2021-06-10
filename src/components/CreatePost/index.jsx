import React from "react";
import { Button, Form } from "react-bootstrap";

const CreatePost = ({onCreate}) => (
  <Form onSubmit={onCreate}>
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


export default CreatePost;
