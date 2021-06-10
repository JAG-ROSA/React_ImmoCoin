import React from "react";
import { Table } from "react-bootstrap";
import { PropertiesManager, UiManager } from "services";
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
