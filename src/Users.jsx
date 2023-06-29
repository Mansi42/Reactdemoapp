import { useState, useEffect } from "react";
import React from 'react';
import { Formik , Field } from 'formik';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from'axios';
import {getFunc , deleteFunc,postFunc} from "./Backenddata";
import Model from "./NewModal";
import DeleteModel from "./deleteModel";
import {useNavigate, useParams} from "react-router-dom";

import { Navbar, Container, Nav  } from 'react-bootstrap';  
import { NavLink } from 'react-router-dom';
// const input = ({field,form, ...props}) =>{
//     return <input>{...field}{...props}</input>
// }
export function Users() {
 const [data, setData] = useState(null);
 const [show, setShow] = useState(false);
 const [user,setuser] = useState({ name: '', age: '' ,role: '' ,email:'',password:''});
 const [deleteshow,setDeleteShow] = useState(false);
 const [action,setAction] = useState("add");
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 const handleDeleteShow = () => setDeleteShow(true);
 const handleDeleteClose = () => setDeleteShow(true);

 
 
    
 const fetchdata = async() =>{
   const response=await getFunc()
     setData(response.data)
    
   
 }
 console.log(data)

 useEffect(() => {
    fetchdata();
 }, []);

 const navigate = useNavigate();

 const handleAction = (_id,action) =>{
     const user = data.find((user)=> user._id === _id)
    
     if(action === "edit"){
         let path = `/NewEdit/${user._id}`;
         navigate(path);
     }
 }

 const handleDelete= () => {
  if(user) {
    const res= deleteFunc(user._id)
    if(res.status === 200) {
      fetchdata();
    }
  }
}
  


return(<>
 
  <Table class="table-info" striped bordered hover variant="dark">
 <thead>
    <tr>
    <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Age</th>
        <th>Role</th>
        <th>Actions</th>

      </tr>
    </thead>
    <tbody>
  {data && data.length && (
    <> 
      {data.map((element,index) => {
          return (
            
            <tr>
               <td>{index}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.password}</td>
              <td>{element.age}</td>
              <td>{element.role}</td>
              <td>
              <Button onClick={()=>handleAction(element._id,"edit")}>Edit</Button>
                 &nbsp;&nbsp;&nbsp;
              <Button onClick={()=>handleAction(element._id,"delete")}>Delete</Button></td>
            </tr>
          )
        }
        )}
    </>
  )}
  </tbody>
  
  </Table>
  <Button  onClick={handleShow}>Add User</Button>
  <Model show={show} handleClose={handleClose} user={user} setShow={setShow}  action={action}/>
  <DeleteModel show={deleteshow} handleDelete={handleDelete} handleDeleteShow={handleDeleteShow}/>
</>
)
}




export default Users;