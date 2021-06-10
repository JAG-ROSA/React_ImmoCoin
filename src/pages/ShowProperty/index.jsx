import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BsFillEnvelopeFill, BsJustifyLeft, BsHouse } from "react-icons/bs";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgLogIn } from "react-icons/cg";
import { PropertiesManager } from "services";
import House from "assets/images/02_house.jpg";
import "./style.scss";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const ShowProperty = () => {
  const { propId } = useParams();
  const [currentProperty, setCurrentProperty] = useState(undefined);
  const auth = useSelector((store) => store.isLogged);
  const location = useLocation();

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
            <img src={House} alt={currentProperty.property.title} />
            <div className="show-property-infos">
              <p className="show-property-price">
                <RiMoneyEuroCircleLine className="my-mr my-medium" />
                <strong className="align-middle">{currentProperty.property.price} €</strong>
              </p>
              <p className="show-property-location">
                <HiOutlineLocationMarker className="my-mr my-medium" />
                <strong className="align-middle">{currentProperty.property.location}</strong>
              </p>
              <p className="show-property-category">
                <BsHouse className="my-mr my-medium" />
                <strong className="align-middle">{currentProperty.property.category}</strong>
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
                  <div className="show-property-log">
                    <Link
                      to={{
                        pathname: "/login",
                        state: { redirectUrl: location.pathname },
                      }}
                      className="contact-email"
                    >
                      <CgLogIn className="my-medium" /> <span className="align-middle">Se Connecter</span>
                    </Link>
                  </div>
                )}
                <p className="contact-label">
                  <BsFillEnvelopeFill className="my-mr my-medium" /> <span className="align-middle">Contacter
                  le vendeur</span>
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
