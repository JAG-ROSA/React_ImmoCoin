import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const UserProfile = () => (
  <div> 
    <Form>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={"updateProfile.email"} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextUsername">
        <Form.Label column sm="2">
          Username
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Username" defaultValue={"updateProfile.username"} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextDescription">
          <Form.Label column sm="2">
            Description
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Description" defaultValue={"updateProfile.description"} />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Change
        </Button>
      </Form>
  </div>
);

export default UserProfile;
