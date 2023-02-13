import React from "react";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";
import CardComponent from "../component/ProfileComponent/CardComponent";
import ThumbnailComponent from "../component/ProfileComponent/ThumbnailComponent";
import "./ProfileContainer.css";

const ProfileContainer = () => {
  return (
    <>
      <NavbarComponent home="Home" profile="Profile" logout="logout" />
      <div className="profileContent-container">
        <ThumbnailComponent />
        <CardComponent />
      </div>
    </>
  );
};

export default ProfileContainer;
