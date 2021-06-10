/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Slider, Switch, Row, Col } from 'antd';
import { Form } from "react-bootstrap";

const SearchBar = ({data, filtered}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [inputValueMin, setInputValueMin] = useState(100000);
  const [inputValueMax, setInputValueMax] = useState(500000);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");


  useEffect(() =>{
    setFilteredData(data);
  }, [data]);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleSearchLocation = (e) => {
    setSearchLocation(e.target.value.toLowerCase());
  };

  const handleDisabledChange = (disabled) => {
    setDisabled(disabled);
  };

  const onChange = (value) => {
    setInputValueMin(value[0]);
    setInputValueMax(value[1]);
  };

  useEffect(() => {
    const filter = (min, max, value, location) => {
      let result = [];
      result = data.filter((data) => {
      return (data.price >= min && data.price <= max && (data.title.toLowerCase().search(value) !== -1 || data.description.toLowerCase().search(value) !== -1) && data.location.toLowerCase().search(location) !== -1);
      });
      setFilteredData(result);
    }
    disabled ? filter(0, 1000000, searchTerm, searchLocation) : filter(inputValueMin, inputValueMax, searchTerm, searchLocation);    
  }, [inputValueMin, inputValueMax, data, disabled, searchTerm, searchLocation]);

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
            <Form.Control type="text" placeholder="Je recherche..." className="text-center" onChange={(e) =>handleSearch(e)}/>
          </Form.Group>
          <Form.Group controlId="searchTerme" className="col-md-3 mb-3">
            <Form.Control type="text" placeholder="Où ?" className="text-center" onChange={(e) =>handleSearchLocation(e)}/>
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
      Désactiver la recherche par prix: <Switch size="small" checked={disabled} onChange={handleDisabledChange}/>
    </div>
  );
};

export default SearchBar;