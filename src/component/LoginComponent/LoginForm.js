import React from "react";
import { Button, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LoginForm.css";
// import axios from "axios";
// import * as Yup from "yup";
// import { useFormik } from "formik";

const LoginForm = () => {
  return (
    <>
      <Form className="form-style">
        <h2 className="text-center fw-bolder text-white mb-4">Sign in</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="off"
          />
          <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <Form.Text></Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary px-4 py-2" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
