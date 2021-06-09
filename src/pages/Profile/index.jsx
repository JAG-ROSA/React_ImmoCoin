import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import UserProfile from "components/UserProfile";
import CreatePost from "components/CreatePost";
import "./style.scss";

const Profile = () => {
  // const auth = useSelector((store) => store.isLogged);
  const [isUserProfile, setIsUserProfile] = useState(true);
  const [isCreatePost, setIsCreatePost] = useState(false);

  const onUserProfile = () => {
    setIsUserProfile(true);
    setIsCreatePost(false);
  };

  console.log(isUserProfile);
  console.log(isCreatePost);
  const onCreatePost = () => {
    // event.preventDefault();
    setIsUserProfile(false);
    setIsCreatePost(true);
  };

  useEffect(()=> {

  },[isUserProfile, isCreatePost]);

  return (
    <Container>
      <h2> User Dashboard </h2>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={onUserProfile}>Profil Utilisateur</button>
          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={onCreatePost}>Créer une annonce</button>
          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
          <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{isUserProfile && <UserProfile />}</div>
          <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">{isCreatePost && <CreatePost />}</div>
          <div className="tab-pane fade show active" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"></div>
        </div>
      </div>

      
    </Container>
  );
};

export default Profile;

