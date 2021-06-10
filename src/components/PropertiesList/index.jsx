import React from "react";
import { Table } from "react-bootstrap";
import PropertyHeader from "./PropertyHeader";
import PropertyItem from "./PropertyItem";

const PropertiesList = ({userDetails, onDelete}) => {
  
  return (
    <Table responsive>
      <PropertyHeader />
      <PropertyItem tableContents={userDetails} onDelete={onDelete}/>
    </Table>
  );
};

export default PropertiesList;
