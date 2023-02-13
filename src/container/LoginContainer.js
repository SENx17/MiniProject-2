import React from "react";
import LoginForm from "../component/LoginComponent/LoginForm";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";

const LoginContainer = () => {
  return (
    <>
      <NavbarComponent home="" profile="" logout="" />
      <div className="d-flex justify-content-center">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginContainer;
