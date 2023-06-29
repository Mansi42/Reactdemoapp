import React  from "react";
import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import  Modal  from "react-bootstrap/Modal";
import { useFormik,FormikProvider } from "formik";
import {Field,Form,Formik,Formikprops} from 'formik';
import  Button  from "react-bootstrap/Button";
import {postFunc,updateFunc,deleteFunc,getFunc} from "./Backenddata";

function NewEdit({setShow}){
const [user, setUser] =useState(null);
  let navigate = useNavigate();
  const newpath = ()=>{
    let path='./Users';
    navigate(path);
  }

  const getData = async(id)=>{
    let res = await getFunc(id);
    if(res.status==200){
        setUser(res.data)
    }
  }
  const {id}=useParams();
  useEffect(()=>{
    getData(id)
  },[])

  

    return(
         <div class="newform">
          <>
        <h2>Edit Form</h2>
        {user && (
            <Formik
        

        initialValues={user[0]}
        validate={values => {
          const errors = {};
          console.log()
          if(!values.name){
              errors.name='fill the blanks';
          }else if(values.name<4){
              errors.name='name must be of 3 characters';
          }
          if(!values.email){
              errors.all='fill the blanks';
          }
          else if(values.email=='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'){
                 errors.all='enter valid format';
              }
              
          if(!values.age){
              errors.all='fill the blanks';
          }
        
          if(!values.role){
              errors.all='fill the blanks';
          }
          return errors;
        
        }}
        
        
        
        onSubmit={(values) => {
          // console.log(values.name)
         if(values.name && values.email && values.password && values.age && values.role){
             updateFunc(values._id,values.name,values.email,values.password,values.age,values.role)
             }
           newpath();
            
          
         }
           
        
            
        }
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form>
            <input
             
              type="text"
              name="name"
              placeholder='Enter your name..'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            /><br></br>
            {errors.name && touched.name&& errors.name}
        
            <input
              type="email"
              name="email"
              placeholder='Enter your email..'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            /><br></br>
           {errors.email && touched.email && errors.email}
           <input
              type="password"
              name="password"
              placeholder='Enter your password..'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            /><br></br>
            {errors.password && touched.password && errors.password}
            <input
              type="number"
              name="age"
              placeholder='Enter your age..'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
            /><br></br>
             {errors.age && touched.age && errors.age}
        
            
            <Field as="select" name="role" value={values.rolel}>
              <option value="user">User</option>
              <option value="system">System</option>
               <option value="admin">Admin</option>
               </Field><br></br>
               {errors.role && touched.role && errors.role}
              
               <br></br>
          <br></br>
           
          <Button variant="primary"  type="submit" value="Submit" onClick={handleSubmit}>
            Submit
          </Button>
          </form>
          
        )}
        </Formik>
        )}
        
</>
</div>
)};
 

export default NewEdit;