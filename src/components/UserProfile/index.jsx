import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const UserProfile = ({userDetails, onUpdate}) => (
  <Form onSubmit={onUpdate}>
    <Form.Group as={Row} controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Email
      </Form.Label>
      <Col sm="10">
        <Form.Control plaintext readOnly defaultValue={userDetails.user.email}/>
      </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="formPlaintextFirstName">
      <Form.Label column sm="2">
        Prénom
      </Form.Label>
      <Col sm="10">
        <Form.Control plaintext placeholder="Entrez votre prénom" defaultValue={userDetails.user.first_name}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formPlaintextLastName">
      <Form.Label column sm="2">
        Nom
      </Form.Label>
      <Col sm="10">
        <Form.Control plaintext placeholder="Entrez votre nom" defaultValue={userDetails.user.last_name}/>
      </Col>
    </Form.Group>

    <Button variant="primary" type="submit">
      Save Change
    </Button>
  </Form>
);

export default UserProfile;
