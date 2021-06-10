import React from "react";
import {  Container, Form } from "react-bootstrap";
import { useLocation } from "react-router";
import { PropertiesManager, UiManager } from "services";

const EditProperty = () => {
  const location = useLocation();
  const data = location.params;

  const editProperty = (event) => {
    event.preventDefault();
    const title = event.target.formTitleEdit.value;
    const description = event.target.formDescriptionEdit.value;
    const price = event.target.formPriceEdit.value;
    const category = event.target.formCategory.value;
    const location = event.target.formLocation.value;
    PropertiesManager.updateProperties(title, description, price, category, location, data.data.id)
    .then(() => {
      UiManager.openNotification("success", " Annonce mise à jour !");
    })
    .catch((error) => {
      UiManager.openNotification(
        "error",
        "Un des champs est vide !"
      );
    });;
  };

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <div className="col col-md-10 col-lg-6 my-bg-light border-quaternary p-4 my-5 mx-3">
          <h2 className=" my-text-tertiary">Modifier mon annonce</h2>
          <Form onSubmit={editProperty}>
            <Form.Group controlId="formTitleEdit" className="pb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control size="sm" type="text" defaultValue={data.data.title} />
            </Form.Group>

            <Form.Group controlId="formDescriptionEdit">
              <Form.Label>Description</Form.Label>
              <Form.Control size="sm" type="text" defaultValue={data.data.description} />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label column sm="2">Catégorie</Form.Label>
              <Form.Control className="form-select form-select-sm" as="select" defaultValue={data.data.category}>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Studio</option>
                <option>Villa</option>
              </Form.Control>
            </Form.Group>

            <Form.Group  controlId="formLocation">
              <Form.Label column sm="2">Lieu</Form.Label>
              <Form.Control size="sm" type="text" defaultValue={data.data.location}/>
            </Form.Group>

            <Form.Group controlId="formPriceEdit">
              <Form.Label>Prix</Form.Label>
              <Form.Control size="sm" type="number"  defaultValue={data.data.price} />
            </Form.Group>

            <button type="submit" className="btn btn-secondary mt-4 mb-3">Modifier</button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default EditProperty;
