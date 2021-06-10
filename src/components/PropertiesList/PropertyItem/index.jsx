import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PropertiesItem = ({tableContents, onDelete}) => {
  const [description, setDescription] = useState([]);
  
  const tableDescription = () => {
    tableContents.property.map((tableContent) => setDescription(tableContent.description))
  };

  useEffect(()=> {
    tableDescription();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);
  
  return (
    <tbody>
        {tableContents.property.map((tableContent) => (
          <tr key={tableContent.id}>
            <td> {tableContent.id}</td>
            <td> {tableContent.title}</td>
            <td> {tableContent.description}</td>
            <td> {tableContent.price}</td>
            <td>
              {<Link to={{pathname: "/property/edit", params:{ data: tableContent.id}}} className="btn-secondary btn-lg">Modifier</Link>}
              {<Button onClick={(id) => onDelete(tableContent.id)} className="btn-secondary btn-lg">Effacer</Button>}
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default PropertiesItem;
