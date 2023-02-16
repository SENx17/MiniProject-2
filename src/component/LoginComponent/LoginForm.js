import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LoginForm.css";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const errorStyle = { color: "red", fontSize: "12px" };
const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_APIKEY}`,
      })
        .then(function (response) {
          const request_token = response.data.request_token;
          console.log(`Requested Token : ${request_token}`);
          axios({
            method: "post",
            url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_APIKEY}`,
            data: {
              username: values.username,
              password: values.password,
              request_token: request_token,
            },
          })
            .then(function (response) {
              console.log(response.data);
              axios({
                method: "post",
                url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_APIKEY}`,
                data: {
                  request_token: request_token,
                },
              })
                .then(function (response) {
                  const session_id = response.data.session_id;
                  console.log(session_id);
                  if (session_id) {
                    localStorage.setItem("SID", session_id);
                    alert("Berhasil login dengan session id: " + session_id);
                    navigate("/profile");
                  }
                  setIsLoading(false);
                })
                .catch(function (error) {
                  alert(error.message);
                  setIsLoading(false);
                });
            })
            .catch(function (error) {
              alert(error.message);
              setIsLoading(false);
            });
        })
        .catch(function (error) {
          alert(error.message);
          setIsLoading(false);
        });
    },
  });
  return (
    <>
      <Form className="form-style" onSubmit={formik.handleSubmit}>
        <h2 className="text-center fw-bolder text-white mb-4">SignIn</h2>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label className="text-white">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <div className="err-content">
            <Form.Text style={errorStyle}>
              {formik.touched.username && formik.errors.username}
            </Form.Text>
          </div>
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="err-content">
            <Form.Text style={errorStyle}>
              {formik.touched.password && formik.errors.password}
            </Form.Text>
          </div>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            variant="primary px-4 py-2"
            type="submit"
            disabled={!formik.isValid || isLoading}
          >
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
