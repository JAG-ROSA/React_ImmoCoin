/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Slider, Switch, Row, Col } from 'antd';
import { Form } from "react-bootstrap";
import './style.scss';

const SearchBar = ({data, filtered}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [inputValueMin, setInputValueMin] = useState(100000);
  const [inputValueMax, setInputValueMax] = useState(500000);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() =>{
    setFilteredData(data);
  }, [data]);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleDisabledChange = (disabled) => {
    setDisabled(disabled);
  };

  const onChangeMin = (value) => {
    setInputValueMin(value);
  };

  const onChangeMax = (value) => {
    setInputValueMax(value);
  };

  const onChange = (value) => {
    setInputValueMin(value[0]);
    setInputValueMax(value[1]);
  };

  const searchData = (value) => {
    filtered(value);
  };

  useEffect(() => {
    const filter = (min, max, value) => {
      let result = [];
      result = data.filter((data) => {
      return (data.price >= min && data.price <= max && (data.title.toLowerCase().search(value) !== -1 || data.description.toLowerCase().search(value) !== -1));
      });
      setFilteredData(result);
      searchData(filteredData);
    }
    disabled ? filter(0, 1000000, searchTerm) : filter(inputValueMin, inputValueMax, searchTerm);    
  }, [inputValueMin, inputValueMax, data, disabled, searchTerm]);

  
  return (
    <div>
      <Form>
        <div className="d-flex justify-content-center">
          <Form.Group controlId="searchTerme" className="col-3 mb-3">
            <Form.Control type="text" placeholder="Je recherche..." className="text-center" onChange={(e) =>handleSearch(e)}/>
          </Form.Group>
        </div>
      </Form>
      <Row className="d-flex justify-content-center">
        <p className="my-text-tertiary fs-5 pe-3">{inputValueMin} €</p>
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
        <p className="my-text-tertiary fs-5 ps-3">{inputValueMax} €</p>
      </Row>
      Désactiver la recherche par prix: <Switch size="small" checked={disabled} onChange={handleDisabledChange}/> 
       {/* <div className="d-flex justify-content-center align-items-center form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onChange={handleDisabledChange}></input>
        <label className="form-check-label ps-2" for="flexSwitchCheckDefault">Désactiver la recherche par prix</label>
      </div> */}
    </div>
  );
};

export default SearchBar;