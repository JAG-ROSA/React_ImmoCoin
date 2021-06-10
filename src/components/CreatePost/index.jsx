import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const CreatePost = ({onCreate}) => (
  <Form onSubmit={onCreate}>
    <Form.Group as={Row} controlId="formTitle">
      <Form.Label column sm="2">Titre</Form.Label>
      <Col sm="10" className="pt-2">
        <Form.Control size="sm" type="text" placeholder="Entrez un titre à votre annonce" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formDescription">
      <Form.Label column sm="2">Description</Form.Label>
      <Col sm="10" className="pt-2">
        <Form.Control size="sm" type="text" placeholder="Entrez une description" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formCategory">
      <Form.Label column sm="2">Catégorie</Form.Label>
      <Col sm="10" className="pt-2">
        <Form.Control className="form-select form-select-sm" as="select">
          <option>Appartement</option>
          <option>Maison</option>
          <option>Studio</option>
          <option>Villa</option>
        </Form.Control>
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formLocation">
      <Form.Label column sm="2">Lieu</Form.Label>
      <Col sm="10" className="pt-2">
        <Form.Control size="sm" type="text" placeholder="Entrez votre lieu"/>
      </Col>
    </Form.Group>
    
    <Form.Group as={Row} controlId="formPrice">
      <Form.Label column sm="2">Prix</Form.Label>
      <Col sm="10" className="pt-2">
        <Form.Control size="sm" type="number" placeholder="Entrez un prix" />
      </Col>
    </Form.Group>

    <Form.Group as={Row}>
      <Form.Label column sm="2"></Form.Label>
      <Col sm="10" className="pt-2">
        <button className="btn-secondary btn-sm" type="submit">Créer</button>
      </Col>
    </Form.Group>
  </Form>
);


export default CreatePost;
