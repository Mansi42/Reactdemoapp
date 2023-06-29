import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Field, Form, Formik, Formikprops } from "formik";
import Button from "react-bootstrap/Button";
import { addFunc, getFunc } from "./Backenddata";
import "bootstrap/dist/css/bootstrap.min.css";
import { getData, setData } from "./services";
import "./navbar.css";
import { Link } from "react";

function Home() {
  let navigate = useNavigate();
  const changePath = () => {
    let path = "./Users";
    navigate(path);
  };

  return (
    <div class="form">
      <>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            console.log();

            if (!values.email) {
              errors.email = "fill the blanks";
            } else if (
              values.email == "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/"
            ) {
              errors.email = "enter valid format";
            }

            if (!values.password) {
              errors.password = "fill the blanks";
            }
            return errors;
          }}
          onSubmit={async (values, { setErrors, setSubmitting }) => {
            try {
              if (values.email && values.password) {
                const response = await addFunc(values.email, values.password);
                if (response.status === 200) {
                  console.log(response.data);
                  setData("authstate", response.data);
                  changePath();
                }
              }
            } catch (error) {
              if (error.status === 422) {
                setErrors({ common: error.message });
              }
              console.log(error.message);

              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            verifyOtp,
            /* and other goodies */
          }) => (
            <div class="form-group">
              <form class="form-inline">
                <h2>Sign In Form</h2>
                <div className="signInForm">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email.."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <br></br>
                  {errors.email && touched.email && errors.email} <br></br>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password.."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <br></br>
                  {errors.password && touched.password && errors.password}
                  <br />
                  <a href="Forgot Password">Forgot Password?</a> <br />
                  <Button
                    class="btn btn-outline-info"
                    variant="primary"
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                  >
                    Sign In
                  </Button>
                  {errors && errors.common && (
                    <span class="error">{errors.common}</span>
                  )}
                </div>
              </form>
            </div>
          )}
        </Formik>
      </>
    </div>
  );
}

export default Home;
