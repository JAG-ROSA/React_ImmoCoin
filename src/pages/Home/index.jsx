import React, { useEffect, useState } from "react";
import { 
  Jumbotron, Button, Container, ButtonGroup, Row, Col, Card
} from "react-bootstrap";
import BannerImage from "assets/images/01_happy_woman.jpg"
import { BASE_URL } from "config";

const Home = () => {
  const [propertiesList, setPropertiesList] = useState([]);

  const fetchPropertiesList = async () => {
    const URL = `${BASE_URL}/properties`;
    const fetchPostList = await fetch(URL, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${Cookies.get(TOKEN)}`,
      },
    });
    const response = await fetchPostList.json();
    console.log(response);
    setPropertiesList(response);
  };

  useEffect(()=>{
    fetchPropertiesList();
  },[]);

  return (
    <div>
      <Jumbotron fluid  style={{ backgroundImage: `url(${BannerImage})`, height: '100%', width: '100%', backgroundSize: 'cover'  }}>
        <Container style={{textAlign: "center"}}>
          <h1>Bienvenue sur Immo Coin</h1>
          <p>
            Facilitez-vous la vie et faites confiance à Immo Coin
          </p>
          <ButtonGroup>
            <Button variant="primary"> Je suis un propriétaire </Button>
            <Button variant="primary"> Je suis un particulier </Button>
          </ButtonGroup>
        </Container>
      </Jumbotron>
      <Container style={{textAlign: "center"}}>
        <Row style={{ heigth: '50rem' }}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title> Propriétaires </Card.Title>
                <Card.Text>
                  Vous avez un logement à vendre ?
                </Card.Text>
                <Button variant="primary"> Je suis un propriétaire </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title> Particulier </Card.Title>
                <Card.Text>
                  Vous avez un logement à louer/acheter ?
                </Card.Text>
                <Button variant="primary"> Je suis un particulier </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container style={{textAlign: "center"}}>
        <Row>
          Consultez la liste de nos annonces 
        </Row>
        <Row>
          {propertiesList.map((property) => (
            <Card>
              <Card.Body>
                <Card.Title> {property.title} </Card.Title>
                <Card.Text>
                  {`descrition : ${property.description}`}
                </Card.Text>
                <Card.Text>
                  {`price: ${(property.price)/100} €`}
                </Card.Text>
              </Card.Body>
            </Card>))
          };
        </Row>
      </Container>
    </div>
  );
};

export default Home;
