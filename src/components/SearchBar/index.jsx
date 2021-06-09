import React, { useEffect, useState } from "react";
import { Slider, Switch, InputNumber, Row, Col } from 'antd';
import { Form } from "react-bootstrap";

const SearchBar = ({data}) => {
  const [filteredData, setFilteredData] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [inputValueMin, setInputValueMin] = useState(100000)
  const [inputValueMax, setInputValueMax] = useState(500000)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() =>{
    setFilteredData(data)
  }, [data])
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  const handleDisabledChange = (disabled) => {
    setDisabled(disabled)
  }

  const onChangeMin = (value) => {
    setInputValueMin(value)
  };

  const onChangeMax = (value) => {
    setInputValueMax(value)
  };

  const onChange = (value) => {
    setInputValueMin(value[0])
    setInputValueMax(value[1])
  };

  useEffect(() =>{
    const filtered = (min, max, value) => {
      let result = [];
      result = data.filter((data) => {
      return (data.price >= min && data.price <= max && (data.title.toLowerCase().search(value) !== -1 || data.description.toLowerCase().search(value) !== -1));
      });
      setFilteredData(result);
    }

    if (disabled === false) {
      filtered(inputValueMin, inputValueMax, searchTerm)
    } else {
      filtered(0, 1000000, searchTerm)
    }
    
  }, [inputValueMin, inputValueMax, data, disabled, searchTerm])

  return (
    <div className="App">
      <Form>
        <Form.Group controlId="searchTerme" className="mb-3">
          <Form.Control type="text" placeholder="Je recherche..." onChange={(e) =>handleSearch(e)}/>
        </Form.Group>
      </Form>
      <Row justify="center">
        <Col span={3}>
            <InputNumber
              min={1}
              max={1000000}
              step={1000}
              style={{ margin: '0 16px' }}
              value={inputValueMin}
              onChange={onChangeMin}
              disabled={disabled}
            />
        </Col>
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
        <Col span={3}>
          <InputNumber
            min={1}
            max={1000000}
            step={1000}
            style={{ margin: '0 16px' }}
            value={inputValueMax}
            onChange={onChangeMax}
            disabled={disabled}
          />
        </Col>
      </Row>
      Désactiver la recherche par prix: <Switch size="small" checked={disabled} onChange={handleDisabledChange}/>

      <div className="mt-5">
      {filteredData.map((value,index)=>{
      return(
      <div key={value.id}>

      {value.title}<br/>
      {value.description}<br/>
      {value.price}<br/><br/>
      </div>
      )
      })}
      </div>
    </div>
  );
};

export default SearchBar;