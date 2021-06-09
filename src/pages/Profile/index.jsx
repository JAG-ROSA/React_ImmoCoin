import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import UserProfile from "components/UserProfile";
import CreatePost from "components/CreatePost";
import { UiManager, UserManager } from "services";
// import "./style.scss";

const Profile = () => {
  const [isUserProfile, setIsUserProfile] = useState(false);
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [userDetails, setUserDetails] = useState(undefined); 
  const [updateProfile, setUpdateProfile] = useState([]);

  const onUserProfile = (event) => {
    event.preventDefault();
    setIsUserProfile(true);
    setIsCreatePost(false);
  };
  
  const onCreatePost = (event) => {
    event.preventDefault();
    setIsUserProfile(false);
    setIsCreatePost(true);
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

  useEffect(() => {
    UserManager.getProfile().then((response) => {
      setUserDetails(response);
    });
  },[updateProfile]);

  return (
    <Container>
      <h2> Bienvenue sur votre Dashboard </h2>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={onUserProfile}>Profil Utilisateur</button>
          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={onCreatePost}>Créer une annonce</button>
          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
          <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{isUserProfile && <UserProfile user={userDetails} onUpdate={updateUserProfile}/>}</div>
          <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">{isCreatePost && <CreatePost />}</div>
          <div className="tab-pane fade show active" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"></div>
        </div>
      </div>

      
    </Container>
  );
};

export default Profile;

