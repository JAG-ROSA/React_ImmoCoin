import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PropertiesManager } from "services";

const ShowProperty = () => {
  const { propId } = useParams();
  const [currentProperty, setCurrentProperty] = useState(undefined);

  useEffect(() => {
    PropertiesManager.showProperties(propId)
      .then((data) => {
        setCurrentProperty(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {currentProperty !== undefined ? (
        <div className="ShowProperty">
          <h1>{currentProperty.property.title}</h1>
          <p>{currentProperty.property.description}</p>
          <p>
            <strong>{currentProperty.property.price} €</strong>
          </p>
          <p>Contactez le vendeur : {currentProperty.user.email}</p>
        </div>
      ) : (
        <div className="NoProperty">
          <h1>Bien essayé, p'tit malin !</h1>
          <p>Cette propriété n'existe pas.</p>
        </div>
      )}
    </>
  );
};

export default ShowProperty;
