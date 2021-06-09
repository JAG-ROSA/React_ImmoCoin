import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Card, CardDeck } from "react-bootstrap";

const PropertyCard = ({data}) => {
  return (
    <Container style={{ textAlign: "center" }} className="pb-5">
      <CardDeck>
      {data.map((property)=>{
      return(
        <Card key={property.id}>
          <Card.Body>
            <Card.Title>{property.title}</Card.Title>
            <Card.Text>{`Descrition : ${property.description}`}</Card.Text>
            <Card.Text>{`Prix : ${property.price} €`}</Card.Text>
            <Button><Link to={{pathname: `/properties/${property.id}`}}>Voir la propriété</Link></Button>
          </Card.Body>
        </Card>
      )
      })}      
      </CardDeck>
    </Container>
  );
};

export default PropertyCard;