import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { emailFunc } from "./Backenddata";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

function CheckEmail() {
  let navigate = useNavigate();
  const changePathto = () => {
    let path = `/SendOtp`;
    navigate(path);
  };

  return (
    <div className="form">
      <>
        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors = {};
            console.log();

            if (!values.email) {
              errors.email = "Please fill the email";
            } else if (
              values.email == "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/"
            ) {
              errors.email = "enter valid format";
            }

            return errors;
          }}
          onSubmit={async (values, error) => {
            try {
              const res = await emailFunc(values);

              if (res.status == 200) {
                console.log("valid Email");

                changePathto();
              }
            } catch (error) {
              alert("invalid user");
              console.log(error);
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
            <div className="form-group">
              <form className="form-inline">
                <h2>Forgot Password?</h2>
                <h6>Enter your email for OTP</h6>
                <div className="checkEmail">
                  <input
                    id="emailField"
                    type="email"
                    name="email"
                    placeholder="Enter your email.."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <br></br>
                  {errors.email && touched.email && errors.email} <br></br>
                  <Button
                    id="verifybtn"
                    class="btn btn-outline-info"
                    variant="primary"
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                  >
                    Send OTP
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
export default CheckEmail;
