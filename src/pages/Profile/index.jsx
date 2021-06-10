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
    PropertiesManager.deleteProperties(id).then((response)=> getUserProfile());
    UiManager.openNotification("success", " Annonce bien effacée !");
  };

  const createPost = (event) => {
    event.preventDefault();
    const title = event.target.formTitle.value;
    const description = event.target.formDescription.value;
    const price = event.target.formPrice.value;
    PropertiesManager
      .createProperties(title, description, price)
      .then((response) => {
        getUserProfile();
        UiManager.openNotification("success", "Annonce créée !")
      });
  };

  useEffect(() => {
    getUserProfile();
  },[updateProfile]);

  return (
    <Container>
      <h2> Bienvenue sur votre Dashboard </h2>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={(event) => onUserClick(event, true, false, false)}>Profil Utilisateur</button>
          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={(event) => onUserClick(event, false, true, false)}>Créer une annonce</button>
          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={(event) => onUserClick(event, false, false, true)}>Liste des annonces</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{isUserProfile && <UserProfile userDetails={userDetails} onUpdate={updateUserProfile}/>}</div>
          <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">{isCreatePost && <CreatePost onCreate={createPost} />}</div>
          <div className="tab-pane fade show active" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">{isPropertiesList && <PropertiesList userDetails={userDetails} onDelete={deleteProperty}/>}</div>
        </div>
      </div>

      
    </Container>
  );
};

export default Profile;

