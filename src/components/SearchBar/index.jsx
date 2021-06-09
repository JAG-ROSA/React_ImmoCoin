import React, { useEffect, useState } from "react";
import { Slider, Switch, InputNumber, Row, Col } from 'antd';

const SearchBar = ({data}) => {
  const [filteredData, setFilteredData] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [inputValueMin, setInputValueMin] = useState(100000)
  const [inputValueMax, setInputValueMax] = useState(500000)

  useEffect(() =>{
    setFilteredData(data)
  }, [data])
  
  console.log(filteredData)
  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = data.filter((data) => {
    return (data.title.toLowerCase().search(value) !== -1 || data.description.toLowerCase().search(value) !== -1);
    });
    console.log(result)
    setFilteredData(result);
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

  return (
    <div className="App">
      <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search title:</label>
        <input id="titleSearch" type="text" onChange={(e) =>handleSearch(e)} />
      </div>
      <Row>
      <Col span={4}>
          <InputNumber
            min={1}
            max={1000000}
            step={1000}
            style={{ margin: '0 16px' }}
            value={inputValueMin}
            onChange={onChangeMin}
          />
        </Col>
        <Col span={12}>
      <Slider range min={0} max={1000000} step={1000} value={[inputValueMin, inputValueMax]} disabled={disabled} onChange={onChange}/>
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={1000000}
            step={1000}
            style={{ margin: '0 16px' }}
            value={inputValueMax}
            onChange={onChangeMax}
          />
        </Col>
      </Row>
      Disabled: <Switch size="small" checked={disabled} onChange={handleDisabledChange} />

      <div style={{padding:10}}>
      {filteredData.map((value,index)=>{
      return(
      <div key={value.id}>

      {value.title}<br/>
      {value.description}<br/><br/>
      {value.description.price}<br/>
      </div>
      )
      })}
      </div>
    </div>
  );
};

export default SearchBar;