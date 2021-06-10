import React from "react";

const PropertyHeader = () => {
  const headTableName = ["Title", "Description", "Catégorie", "Lieu", "Prix", ""];
  return (
    <thead>
      <tr>
        {headTableName.map((name, index) => (
          <th key={index}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default PropertyHeader;
