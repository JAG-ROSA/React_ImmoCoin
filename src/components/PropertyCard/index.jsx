import React from "react";
import { Link } from "react-router-dom";
import { Row, Card } from "react-bootstrap";

const PropertyCard = ({data}) => {
  return (
    <div className="d-flex">
      <Row>
        {data.map((property) => (
          <div className="col-4 py-2">
            <Card key={property.id}>
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{`Descrition : ${property.description}`}</Card.Text>
                <Card.Text>{`Prix : ${property.price} €`}</Card.Text>
                <Link to={{pathname: `/properties/${property.id}`}} className="btn btn-sm">Voir la propriété</Link>
              </Card.Body>
            </Card>
          </div>
        ))}      
      </Row>
    </div>
  );
};

export default PropertyCard;