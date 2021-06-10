import React, { useEffect, useState } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "components/SearchBar";
import { useSelector } from "react-redux";
import { PropertiesManager } from "services";
import PropertyCard from 'components/PropertyCard';
import './style.scss';

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
    <div className="pb-5 mb-5">

      <Jumbotron fluid className="jumbotron d-flex justify-content-center pb-5">
        <div className="text-center pt-70">
          <h2 className="fs-1 mb-2">Bienvenue sur ImmoCoin</h2>
          <p className="mb-3">Facilitez-vous la vie et faites confiance à ImmoCoin</p>
          <div className="d-flex justify-content-center flex-wrap">
            {auth
              ? <Link to="/user/me" className="btn-secondary btn-lg mt-2">Je suis un propriétaire</Link>
              : <Link to="/login" className="btn-secondary btn-lg mt-2">Je suis un propriétaire</Link>
            }
            <a href="#search" className="btn-secondary btn-lg ms-3 mt-2">Je recherche un bien</a>
          </div>
        </div>
      </Jumbotron>

      <Container id="search">
        <div className="text-center pt-5">
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
