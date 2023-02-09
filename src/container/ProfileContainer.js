import React, { Component } from "react";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";
import CardComponent from "../component/ProfileComponent/CardComponent";
import ThumbnailComponent from "../component/ProfileComponent/ThumbnailComponent";
import "./ProfileContainer.css";

class ProfileContainer extends Component {
  render() {
    return (
      <>
        <NavbarComponent home="Home" profile="Profile" logout="logout" />
        <div className="profileContent-container d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column gap-2">
            <ThumbnailComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </div>
      </>
    );
  }
}

export default ProfileContainer;
