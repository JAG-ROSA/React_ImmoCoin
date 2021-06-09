import { Menu } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import CreatePost from "components/CreatePost";
import UserProfile from "components/UserProfile";
import React, {  useState, useEffect } from "react";
// import React from "react";
import { Button, Container } from "react-bootstrap";
// import { Button, Container, Col} from "react-bootstrap";
// import { useSelector } from "react-redux";
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
      <Header theme="light">
        <h2> User Dashboard </h2>
      </Header>
      <Layout>
        <Sider theme="light">
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={onUserProfile}>
              Profil Utilisateur
            </Menu.Item>
            <Menu.Item key="2" onClick={onCreatePost}>
              Créer une annonce
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          {isUserProfile && <UserProfile/>}
          {isCreatePost && <CreatePost/>}
        </Content>
      </Layout>
    </Container>
  );
};

export default Profile;