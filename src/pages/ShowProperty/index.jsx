import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BsFillEnvelopeFill, BsJustifyLeft } from "react-icons/bs";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { CgLogIn } from "react-icons/cg";
import { PropertiesManager } from "services";
import House from "assets/images/02_house.jpg";
import "./style.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShowProperty = () => {
  const { propId } = useParams();
  const [currentProperty, setCurrentProperty] = useState(undefined);
  const auth = useSelector((store) => store.isLogged);

  useEffect(() => {
    PropertiesManager.showProperties(propId)
      .then((data) => {
        setCurrentProperty(data);
      })
      .catch((error) => console.log(error));
  }, [propId]);

  return (
    <>
      {currentProperty !== undefined ? (
        <div className="ShowProperty">
          <h1>{currentProperty.property.title}</h1>
          <div className="show-property-content">
            <img src={House} />
            <div className="show-property-infos">
              <p className="show-property-price">
                <RiMoneyEuroCircleLine className="my-mr my-medium" />
                <strong>{currentProperty.property.price} €</strong>
              </p>
              <p className="show-property-email">
                {auth ? (
                  <a
                    href={`mailto: ${currentProperty.user.email}`}
                    className="contact-email"
                  >
                    <BsFillEnvelopeFill className="my-mr my-medium" />
                    {currentProperty.user.email}
                  </a>
                ) : (
                  <Link to="/login" className="contact-email">
                    <CgLogIn className="my-medium"/> Connexion
                  </Link>
                )}
                <p className="contact-label">
                  <BsFillEnvelopeFill className="my-mr my-medium" /> Contacter le vendeur
                </p>
              </p>
            </div>
            <hr />
            <h4>
              <BsJustifyLeft /> Description
            </h4>
            <p>{currentProperty.property.description}</p>
          </div>
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
