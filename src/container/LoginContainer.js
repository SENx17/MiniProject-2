import React from "react";
import LoginForm from "../component/LoginComponent/LoginForm";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";
import "./LoginContainer.css";

const LoginContainer = () => {
  return (
    <>
      <NavbarComponent />
      <div className="loginContent-container d-flex justify-content-center align-items-center">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginContainer;
