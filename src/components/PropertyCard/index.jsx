import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Card, CardDeck } from "react-bootstrap";

const PropertyCard = ({data}) => {
  return (
    <Container style={{ textAlign: "center" }} className="pb-5">
      <CardDeck>
      {data.map((value)=>{
      return(
        <Card key={value.id}>
          <Card.Body>
            <Card.Title>{value.title}</Card.Title>
            <Card.Text>{`Descrition : ${value.description}`}</Card.Text>
            <Card.Text>{`Prix : ${value.price} €`}</Card.Text>
          </Card.Body>
        </Card>
      )
      })}
        
      </CardDeck>
    </Container>
  );
};

export default PropertyCard;