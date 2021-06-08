import React, { useEffect, useState } from "react";

const SearchBar = ({data}) => {
  const [filteredData, setFilteredData] = useState([])

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

  return (
    <div className="App">
      <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search title:</label>
        <input id="titleSearch" type="text" onChange={(e) =>handleSearch(e)} />
      </div>
      <div style={{padding:10}}>
      {filteredData.map((value,index)=>{
      return(
      <div key={value.id}>

      {value.title}<br/>
      {value.description}<br/><br/>
      </div>
      )
      })}
      </div>
    </div>
  );
};

export default SearchBar;