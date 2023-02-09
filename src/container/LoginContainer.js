import React, { Component } from "react";
import LoginForm from "../component/LoginComponent/LoginForm";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";
import "./LoginContainer.css";

class LoginContainer extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <div className="loginContent-container d-flex justify-content-center align-items-center">
          <LoginForm />
        </div>
      </>
    );
  }
}

export default LoginContainer;
