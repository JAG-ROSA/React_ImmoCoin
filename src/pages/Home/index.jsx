import React, { useEffect, useState } from "react";
import { Jumbotron, Button, Container, Row, Col, Card } from "react-bootstrap";
import BannerImage from "assets/images/01_happy_woman.jpg";
import { Link } from "react-router-dom";
import SearchBar from 'components/SearchBar'
import { useSelector } from "react-redux";
import { PropertiesManager } from "services";
import PropertyCard from 'components/PropertyCard';

const Home = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const auth = useSelector((store) => store.isLogged);

  const fetchPropertiesList = async () => {
    PropertiesManager.indexProperties().then((response) =>
      setPropertiesList(response)
    );
  };

  useEffect(() => {
    fetchPropertiesList();
  }, []);

  useEffect(() => {
    setFilteredData(propertiesList);
  }, [propertiesList]);

  const searchBarResult = (searchBarData) => {
    setFilteredData(searchBarData);
  };

  return (
    <div className="pb-5">
      <Jumbotron
        fluid
        style={{
          backgroundImage: `url(${BannerImage})`,
          height: "80vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
        className="d-flex justify-content-center"
      >
        <Container style={{ textAlign: "center" }}>
          <h2 className="fs-1 pt-70">Bienvenue sur ImmoCoin</h2>
          <p className="mb-5 pb-2">
            Facilitez-vous la vie et faites confiance à ImmoCoin
          </p>
          {!auth && (
            <Link to="/login" className="btn-secondary btn-lg">
              S'inscrire
            </Link>
          )}
        </Container>
      </Jumbotron>
      <Container style={{ textAlign: "center" }} className="pb-5">
        <Row style={{ heigth: "50rem" }} className="p-5">
          <Col>
            <Card className="my-bg-light">
              <Card.Body>
                <Card.Title>Propriétaires</Card.Title>
                <Card.Text>Vous avez un logement à vendre ?</Card.Text>
                <Button variant="primary">Je suis un propriétaire</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-bg-light">
              <Card.Body>
                <Card.Title>Particuliers</Card.Title>
                <Card.Text>Vous avez un logement à louer/acheter ?</Card.Text>
                <Button variant="primary">Je suis un particulier</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <SearchBar data={propertiesList} filtered={searchBarResult}/>
        <p>Consultez la liste de nos annonces</p>
        <div className="mt-5">
        <PropertyCard data={filteredData} />
      </div>
      </Container>
    </div>
  );
};

export default Home;
