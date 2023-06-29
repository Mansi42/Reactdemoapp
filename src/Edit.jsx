import  Modal  from "react-bootstrap/Modal";
import { useFormik,FormikProvider } from "formik";
import {Field,Form,Formik,Formikprops} from 'formik';
import  Button  from "react-bootstrap/Button";


function Edit({show,handleClose,user,setShow,action}){

    return(
        <>
        <h2>Edit Form</h2>
        <Formik
        
    initialValues={user}
   
    validate= { values => {
    const errors = {};
    if (!values.name) {
       errors.name = 'Required';
    }
    if (!values.email) {
       errors.email = 'Required';
    }
    if (!values.password) {
       errors.password = 'Required';
    }
    if (!values.age) {
       errors.age = 'Required';
    }
    if (!values.role) {
        errors.role = 'Required';
     }
    return errors;
 }}


  
      
         
 
             onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)} > 
             {
                ({
                   values,
                   errors,
                   touched,
                   handleChange,
                   handleBlur,
                   handleSubmit,
                   isSubmitting,
                   /* and other goodies */
                }) => 
                (

                   <form >
                      <label for="name">Name<span>{errors.name && touched.name && errors.name}</span></label>
                      <input type="text" id="name" name="name" placeholder="Enter name"
                         onChange={handleChange}
                         onBlur={handleBlur}
                      /><br></br>

                      <label for="email">Email <span>{errors.email && touched.email && errors.email}</span></label>
                      <input type="email" id="email" name="email" placeholder="Enter email"
                         onChange={handleChange}
                         onBlur={handleBlur}
                    /><br></br>

                      <label for="password">Password <span>{errors.password && touched.password && errors.password}</span></label>
                      <input type="password" id="password" name="password" placeholder="Enter password"
                         onChange={handleChange}
                         onBlur={handleBlur}
                       /><br></br>

                      <label for="age">Age <span>{errors.age && touched.age&& errors.age}</span></label>
                      <input type="number" id="age" name="age" placeholder="Enter age"
                         onChange={handleChange}
                         onBlur={handleBlur}
                        /><br></br>

                      <label for="role">Role <span>{errors.role && touched.role && errors.role}</span></label>
                      <select id="role" name="role"
                         onChange={handleChange}
                         onBlur={handleBlur}
                        >
                         <option value="">Select</option>
                         <option >User</option>
                         <option >System</option>
                         <option>Admin</option>
                      </select><br></br>

                      <Button variant="primary"  type="submit" value="Submit" onClick={handleSubmit} disabled={isSubmitting}>
          Submit
        </Button> 
                   </form>
                )
             }
          </Formik>
          </>
    )};
 

export default Edit;