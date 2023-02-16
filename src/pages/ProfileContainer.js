import React from "react";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";
import CardComponent from "../component/ProfileComponent/CardComponent";
import ThumbnailComponent from "../component/ProfileComponent/ThumbnailComponent";

const ProfileContainer = () => {
  return (
    <>
      <NavbarComponent home="Home" profile="Profile" logout="logout" />
      <div className="d-flex flex-column justify-content-center align-items-center pt-5">
        <ThumbnailComponent />
        <CardComponent />
      </div>
    </>
  );
};

export default ProfileContainer;
