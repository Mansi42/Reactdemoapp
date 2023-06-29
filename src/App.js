// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Navfile from "./Navfile";
import MainHome from "./MainHome";
import ReactDOM from "react-dom";
import "./App.css";
import CheckEmail from "./CheckEmail";
import SendOtp from "./SendOtp";
// import Welcome from './Welcome.js';
import React from "react";
import NewEdit from "./NewEdit.jsx";
import Electronics from "./Electronics.jsx";
import New from "./New.jsx";
import ArrayOfObjects from "./ArrayOfObjects.jsx";
import Property from "./Property.jsx";
import { lazy, Suspense } from "react";
import Clock from "./Clock.jsx";
import State from "./State.jsx";
import Form from "./Form.jsx";
import Composition from "./WelcomeDialog";
import WelcomeDialog from "./WelcomeDialog";
import Connect from "./Connect.jsx";
import Fetchdata from "./Fetchdata";
import Tables from "./Tables";
import ShowModal from "./ShowModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Edit from "./Edit.jsx";
import Users from "./Users.jsx";
import { useState } from "react";
import NewComponent from "./NewComponent";
import User from "./User";
import ConfirmPassword from "./ConfirmPassword";
const NewFormik = lazy(() => import("./Newformik.jsx"));
const Home = lazy(() => import("./Home.jsx"));

let details = [
  {
    fname: "mansi",
    lname: "dhingra",
    pooraname: "",
    email: "m@gmail.com",
    age: 40,
    nationality: "India",
    belongsToIndia: true,
    state: "Punjab",
    city: "garhdiwala",
  },
  {
    fname: "gurleen",
    lname: "kaur",
    pooraname: "",
    email: "g@gmail.com",
    age: 40,
    nationality: "Canada",
    belongsToIndia: false,
    state: "Manitoba",
    city: "Winnipeg",
  },
  {
    fname: "gaurav",
    lname: "sharma",
    pooraname: "",
    email: "g@gmail.com",
    age: 4,
    nationality: "Canada",
    belongsToIndia: false,
    state: "Brampton",
    city: "Toronto",
  },
  {
    fname: "shruti",
    lname: "kumra",
    pooraname: "",
    email: "s@gmail.com",
    age: 40,
    nationality: "India",
    belongsToIndia: true,
    state: "Punjab",
    city: "garhdiwala",
  },
];

let newFunc = (f, l) => {
  return f + l;
};

// let newname = details.map((data)=>{
//   return (
//
//           {data.Nname = data.fname+data.lname}

//

//   )
// })

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    role: "",
  });
  return (
    <>
      {/* < Welcome/>
      < Electronics/>
      < New/>
      <ArrayOfObjects/>
      <Clock/>
      
      <Property  name={newFunc}   oldArr={["fans","lights","leds","iron"] } x={details} />  
       <State/>
       <Form/>
       <FancyBorder>
         <div>ghvhjbhjbj</div>
       </FancyBorder> */}
      <Connect />
      <Fetchdata />
      <NewEdit />

      {/* <NewFormik /> */}
      {/* <Home />
      <User /> */}
      {/* <SendOtp /> */}
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Users" element={<NewComponent />}>
            <Route path="/Users" element={<User />} />
            <Route path="/Users" element={<Users />} />
            <Route
              path="/Users/NewEdit/:id"
              element={<NewEdit user={user} setUser={setUser} />}
            />
          </Route>
          {/* <Route path="/Forgot Password" element={<CheckEmail />}></Route>
          <Route path="/SendOtp" element={<SendOtp />}></Route>
          <Route path="/confirmPassword" element={<ConfirmPassword />}></Route> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
