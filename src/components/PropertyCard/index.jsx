import React from "react";
import { Link } from "react-router-dom";
import { Row, Card } from "react-bootstrap";

const PropertyCard = ({data}) => {
  return (
    <div className="d-flex flex-wrap">
      <Row>
        {data.map((property) => (
          <div key={property.id} className="col-md-6 col-lg-4 py-2">
            <Card>
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