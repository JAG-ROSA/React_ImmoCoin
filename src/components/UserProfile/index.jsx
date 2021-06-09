import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { UserManager } from "services";

const UserProfile = ({user}) => {
  
  return(
    <Form>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={user.email}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextFirstName">
        <Form.Label column sm="2">
          First Name
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={user.first_name}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextLastName">
        <Form.Label column sm="2">
          Last Name
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={user.last_name}/>
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save Change
      </Button>
    </Form>
  );
};

export default UserProfile;
