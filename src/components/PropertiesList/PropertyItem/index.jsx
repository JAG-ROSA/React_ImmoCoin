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
            <td className="col-3">{tableContent.title}</td>
            <td className="col-4">{tableContent.description}</td>
            <td className="col-2">{tableContent.category}</td>
            <td className="col-2">{tableContent.location}</td>
            <td className="col-2">{tableContent.price} €</td>
            <td className="d-flex justify-content-end flex-column">
              <Link to={{pathname: "/property/edit", params:{ data: tableContent}}} className="btn btn-sm">Modifier</Link>
              <Button onClick={(id) => onDelete(tableContent.id)} className="btn-secondary btn-sm mt-2">Effacer</Button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default PropertiesItem;
