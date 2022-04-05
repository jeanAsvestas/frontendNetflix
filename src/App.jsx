import 'bootstrap/dist/css/bootstrap.css';
import "./app.scss"
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Homepage/Home"
import { Routes, Route, } from "react-router-dom";
import Login from "../src/pages/Login/Login"
import Watch from "./pages/watch/Watch"
import Register from "./pages/Register/Register"
import Movies from "./pages/Movies/Movies"
import AuthService from './services/auth_service'





const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return <div>
    <Navbar props={currentUser} />


  <Routes>

      <Route exact path={"/"} element={<Home props={currentUser} />} />

<Route exact path="/login" element={<Login/>} />

<Route exact path="/register" element={<Register/>} />

      <Route exact path="/watch/:id" element={<Watch />} />

      <Route exact path="/movies" element={<Movies />} />

{/* /* <Route exact path="/profile" element={<Profile/>} />  

/* <Route path="/user" component={BoardUser} />

<Route path="/mod" component={BoardModerator} />

<Route path="/admin" component={BoardAdmin} />   */}

</Routes>
  </div>

};

export default App;