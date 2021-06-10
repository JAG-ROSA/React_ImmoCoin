/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Slider, Switch, Row, Col, Button } from 'antd';
import { Form } from "react-bootstrap";

const SearchBar = ({data, filtered}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [inputValueMin, setInputValueMin] = useState(100000);
  const [inputValueMax, setInputValueMax] = useState(500000);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() =>{
    setFilteredData(data);
  }, [data]);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSearchLocation = (e) => {
    setSearchLocation(e.target.value.toLowerCase());
  };

  const handleSearchCategory = (e) => {
    setSearchCategory(e.target.value.toLowerCase());
  };

  const handleDisabledChange = (disabled) => {
    setDisabled(disabled);
  };

  const handleSearchReset = (e) => {
    setSearchTerm("");
    setSearchLocation("");
    setSearchCategory("");
    setInputValueMin(100000);
    setInputValueMax(500000);
    document.querySelector("#searchTerme").value = "";
    document.querySelector("#searchLocation").value = "";
    document.querySelector("#searchCategory").value = "Catégorie";
  };

  const onChange = (value) => {
    setInputValueMin(value[0]);
    setInputValueMax(value[1]);
  };

  useEffect(() => {
    const filter = (min, max, valueTerm, valueLocation, valueCategory) => {
      let result = [];
      result = data.filter((data) => {
      return (data.price >= min && data.price <= max && (data.title.toLowerCase().search(valueTerm) !== -1 || data.description.toLowerCase().search(valueTerm) !== -1) && data.location.toLowerCase().search(valueLocation) !== -1 && data.category.toLowerCase().search(valueCategory) !== -1);
      });
      setFilteredData(result);
    }
    if (disabled) {
      if (searchCategory === "catégorie") {
        filter(inputValueMin, inputValueMax, searchTerm, searchLocation, "");
      } else {
        filter(0, 1000000, searchTerm, searchLocation, searchCategory);
      }
    } else {
      if (searchCategory === "catégorie") {
        filter(inputValueMin, inputValueMax, searchTerm, searchLocation, "");
      } else {
        filter(inputValueMin, inputValueMax, searchTerm, searchLocation, searchCategory);
      }
    }
  }, [inputValueMin, inputValueMax, data, disabled, searchTerm, searchLocation, searchCategory]);

  useEffect(() => {
    const searchData = (value) => {
      filtered(value);
    };

    searchData(filteredData);
  }, [filteredData]);

  return (
    <div>
      <Form>
        <div className="d-flex justify-content-center">
          <Form.Group controlId="searchTerme" className="col-md-3 mb-3">
            <Form.Control type="text" placeholder="Je recherche..." className="text-center" onChange={(e) => handleSearch(e)}/>
          </Form.Group>
          <Form.Group controlId="searchLocation" className="col-md-3 mb-3">
            <Form.Control type="text" placeholder="Où ?" className="text-center" onChange={(e) => handleSearchLocation(e)}/>
          </Form.Group>
          <Form.Group controlId="searchCategory" onChange={(e) => handleSearchCategory(e)}>
            <Form.Control defaultValue="Catégorie" as="select">
              <option>Catégorie</option>
              <option>Villa</option>
              <option>Maison</option>
              <option>Studio</option>
              <option>Appartement</option>
            </Form.Control>
          </Form.Group>
        </div>
      </Form>
      <Row className="d-flex justify-content-center ">
        <p className="my-text-tertiary open-sans-semi-bold pe-3">{inputValueMin} €</p>
        <Col span={12}>
          <Slider 
            range
            min={0}
            max={1000000}
            step={1000}
            value={[inputValueMin, inputValueMax]}
            disabled={disabled}
            onChange={onChange}
          />
        </Col>
        <p className="my-text-tertiary open-sans-semi-bold ps-3">{inputValueMax} €</p>
      </Row>
      Désactiver la recherche par prix: <Switch size="small" checked={disabled} onChange={handleDisabledChange}/><br/>
      <Button
        variant="primary"
        type="submit"
        className="btn btn-secondary mt-2 mb-3"
        onClick={handleSearchReset}
      >
        Remise à 0
      </Button>
    </div>
  );
};

export default SearchBar;