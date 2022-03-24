import 'bootstrap/dist/css/bootstrap.css';
import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Homepage/Home"
import { Routes, Route, } from "react-router-dom";
import Login from "../src/pages/Login/Login"
import Watch from "./pages/watch/Watch"
import Register from "./pages/Register/Register"





const App = () => {
 
  return <div><Navbar/>
  <Routes>

<Route exact path={"/"} element={<Home/>} />

<Route exact path="/login" element={<Login/>} />

<Route exact path="/register" element={<Register/>} />

<Route exact path="/watch" element={<Watch/>} />

{/* /* <Route exact path="/profile" element={<Profile/>} />  

/* <Route path="/user" component={BoardUser} />

<Route path="/mod" component={BoardModerator} />

<Route path="/admin" component={BoardAdmin} />   */}

</Routes>
  </div>

};

export default App;