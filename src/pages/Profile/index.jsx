// import React, { useState } from "react";
import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

const Profile = () => {

  const [isUserProfile, setIsUserProfile] = useState(true);
  const [isCreatePost, setIsCreatePost] = useState(false);

  const onUserChoice = () => {
    setIsUserProfile(!isUserProfile);
    setIsCreatePost(!isCreatePost);
  };


  // const onClick =
  return (
    <Container>
      <h2>Profile</h2>
      <ButtonGroup>
        <Button onClick={}>Profile Utilisateur</Button>
        <Button>Créer une annonce</Button>
      </ButtonGroup>
      {isUserProfile && <UserProfile />}

    </Container>
  );
};

export default Profile;