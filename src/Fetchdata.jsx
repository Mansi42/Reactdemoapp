import { useState, useEffect } from "react";
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShowModal from "./ShowModal";
import Form from 'react-bootstrap/Form';
import axios from'axios';



 
function Fetchdata() {


 const [data, setData] = useState(null);
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 const[name,setName] =useState("");
 const[age,setAge] =useState("");
 const[role,setRole] =useState("");
 const[isError,SetIsError] = useState(false);
 
  useEffect(() => {
       fetchdata();
    }, []);
    
 const fetchdata = async() =>{
   try{
     const response=await fetch("http://localhost:3000/users")
     const json = await response.json()
     setData(json)
   }catch(error){
     console.log("error",error)
   }
 }
 console.log(data)


const postinfo= async()=>{
  try{
    axios
    .post("http://localhost:3000/addUser",
    {
      name,age,role
    })
    .then((response) =>{
      fetchdata();
    })

  }catch(error){
   console.log("error",error)
  }
}




 const NameOnChange=(e)=>{
   setName(e.target.value);
}
    const AgeOnChange=(e)=>{
       setAge(e.target.value);
        }
        const RoleOnChange=(e)=>{
         setRole(e.target.value);
          }

  const FormSubmit=(e)=>{
    e.preventDefault();
           
  if(name ==="" || age==="" || role===""){
      SetIsError(true)
     
      alert("details should be filled")
  }else{
      for(let i of data){
          if(i.name === name && i.age === age && i.role==role  ){
              
              alert("Already present")
              return ;
              
      }}
      postinfo();
  }
  
   }
  return (
    <div>
   <Table striped bordered hover>
   <thead>
     <tr>
       <th>ID</th>
       <th>Name</th>
       <th>Age</th>
       <th>Role</th>
     
      
     </tr>
   </thead>
   <tbody>
     {data && data.length && (<>
     {data.map((element,index) => {
       return(
         <tr>
           <td>{index}</td>
           <td>{element.name}</td>
           <td>{element.age}</td>
           <td>{element.role}</td>
        
         </tr>

       )
     }
     )}
     </>)}
   </tbody>
 
   </Table>
  
   <Button variant="success" onClick={handleShow}>Add User</Button>{' '}
   <ShowModal Show={show} handleclose={handleClose} roleOnChange={RoleOnChange}
    ageOnChange={AgeOnChange} nameOnChange={NameOnChange} formSubmit={FormSubmit}/>
  
   </div>
  )
}
 export default Fetchdata;
