import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { emailFunc } from "./Backenddata";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

function ConfirmPassword() {
  let navigate = useNavigate();
  const changePath = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div className="form">
      <>
        <Formik
          initialValues={{ password: "" }}
          validate={(values) => {
            const errors = {};
            console.log();

            if (!values.password) {
              errors.password = "Please fill the details";
            }

            return errors;
          }}
          onSubmit={(values) => {
            console.log("ji");

            changePath();
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
            <div className="form-group">
              <form className="form-inline">
                <div className="checkPassword">
                  <input
                    id="passwordField"
                    type="password"
                    name="password"
                    placeholder="Enter your password.."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <br></br>
                  {errors.password && touched.password && errors.password}{" "}
                  <br></br>
                  <input
                    id="cpasswordField"
                    type="password"
                    name="cpassword"
                    placeholder="Confirm your password.."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <br></br>
                  {errors.password && touched.password && errors.password}{" "}
                  <br></br>
                  <Button
                    id="verifybtn"
                    class="btn btn-outline-info"
                    variant="primary"
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                  >
                    Change Password
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
export default ConfirmPassword;
