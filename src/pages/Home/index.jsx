import React, { useEffect, useState } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "components/SearchBar";
import { useSelector } from "react-redux";
import { PropertiesManager } from "services";
import PropertyCard from 'components/PropertyCard';

const Home = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const auth = useSelector((store) => store.isLogged);

  const fetchPropertiesList = () => {
    PropertiesManager.indexProperties()
      .then((response) => setPropertiesList(response))
      .catch((error) => console.log(error));
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

      <Jumbotron fluid className="jumbotron d-flex justify-content-center pb-5">
        <div className="text-center">
          <h2 className="fs-1 pt-70 mb-2">Bienvenue sur ImmoCoin</h2>
          <p className="mb-5 pb-2">Facilitez-vous la vie et faites confiance à ImmoCoin</p>
          {auth
            ? <Link to="/user/me" className="btn-secondary btn-lg">Je suis un propriétaire</Link>
            : <Link to="/login" className="btn-secondary btn-lg">Je suis un propriétaire</Link>
          }
          <a href="#search" className="btn-secondary btn-lg ms-3">Je recherche un bien</a>
        </div>
      </Jumbotron>

      <Container id="search" className=" py-5">
        <div className="text-center"  >
          <h2 className="my-text-tertiary">Consultez la liste de nos annonces</h2>
          <SearchBar data={propertiesList} filtered={searchBarResult}/>
        </div>
        <div className="mt-5">
          <PropertyCard data={filteredData} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
