import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { PropertiesManager, UiManager, UserManager } from "services";
import UserProfile from "components/UserProfile";
import CreatePost from "components/CreatePost";
import PropertiesList from "components/PropertiesList";

const Profile = () => {
  const [isUserProfile, setIsUserProfile] = useState(false);
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [isPropertiesList, setIsPropertiesList] = useState(false);
  const [userDetails, setUserDetails] = useState(undefined); 
  const [updateProfile, setUpdateProfile] = useState([]);

  const onUserClick = (event, state1, state2, state3) => {
    event.preventDefault();
    setIsUserProfile(state1);
    setIsCreatePost(state2);
    setIsPropertiesList(state3);
  };

  const getUserProfile = () => {
    UserManager.getProfile()
      .then((response) => setUserDetails(response));
  };

  const updateUserProfile = (event) => {
    event.preventDefault();
    const data = {
      first_name: event.target.formPlaintextFirstName.value,
      last_name: event.target.formPlaintextLastName.value,
    };
    UserManager.updateProfile(data)
      .then((response) => {
        setUpdateProfile(response);
        UiManager.openNotification("success", "Mise à jour réussie !");
    });
  };

  const deleteProperty = (id) => {
    PropertiesManager.deleteProperty(id).then((response)=> getUserProfile());
    UiManager.openNotification("success", " Annonce bien effacée !");
  };

  const createPost = (event) => {
    event.preventDefault();
    const title = event.target.formTitle.value;
    const description = event.target.formDescription.value;
    const price = event.target.formPrice.value;
    const category = event.target.formCategory.value;
    const location = event.target.formLocation.value;
    PropertiesManager
      .createProperty(title, description, price, category, location)
      .then(() => {
        getUserProfile();
        UiManager.openNotification("success", "Annonce créée !")
      })
      .catch((error) => {
        UiManager.openNotification(
          "error", "Hum... il y a une petite erreur! 🤔"
        );
      });
  };

  useEffect(() => {
    getUserProfile();
  },[updateProfile]);

  return (
    <Container>
      <div className="py-5">

        <h2 className="text-center pb-3">Bienvenue sur votre Dashboard</h2>

        <div className="d-flex justify-content-center">
          <div className="col-11 d-flex justify-content-center my-bg-light my-border border-quaternary p-5">
            <div className="col-4 col-sm-5 col-lg-3 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link link-tertiary fs-6 px-0 pb-0" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false" onClick={(event) => onUserClick(event, true, false, false)}>Profil Utilisateur</button>
              <button className="nav-link link-tertiary fs-6 px-0 pb-0" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={(event) => onUserClick(event, false, true, false)}>Créer une annonce</button>
              <button className="nav-link link-tertiary fs-6 px-0 pb-0" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={(event) => onUserClick(event, false, false, true)}>Liste des annonces</button>
            </div>

            <div className="col-8 col-sm-7 col-lg-9 tab-content" id="v-pills-tabContent">
              <div className="show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{isUserProfile && <UserProfile userDetails={userDetails} onUpdate={updateUserProfile}/>}</div>
              <div className="show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">{isCreatePost && <CreatePost onCreate={createPost} />}</div>
              <div className="show active" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">{isPropertiesList && <PropertiesList userDetails={userDetails} onDelete={deleteProperty}/>}</div>
            </div>
          </div>
        </div>
      </div>   
    </Container>
  );
};

export default Profile;
