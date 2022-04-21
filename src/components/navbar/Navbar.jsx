import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss"
import AuthService from "../../services/auth_service";

const Navbar = ({ filterMovies }) => {

  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const logout = () => {
    AuthService.logout().then(
      () => {
        console.log("logout")
        navigate("/login");
      }
    )
  }

  const toggleShowSearchBar = () => {
    if (showSearchBar) {
      setShowSearchBar(false);
      return;
    }
    setShowSearchBar(true);
  }


  return (

    <div className={isScrolled ? "navbar2 scrolled" : "navbar2"}>
      <div className="container2 ">


        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="" />
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <span>Series</span>
          <span>New And Popular</span>
          <Link to={`/mylist/${currentUser.id}`} >My List</Link>
        </div>
        <div className="right">
          <input type="text" onChange={filterMovies} style={{ display: showSearchBar ? "block" : "none" }} />
          <Search className="icon" onClick={toggleShowSearchBar} />

          <span>KID</span>

          {currentUser ?
            (
              <div className="profile ">
                <ArrowDropDown className="icon" />
                <div className="options">
                  <Link to='/account' >Settings</Link>
                  <Link to="/" onClick={logout} >Logout</Link>
                  {currentUser.isAdmin ? (<Link to='/admin' >Admin Panel</Link>)
                    :
                    (null)}
                </div>
              </div>)
            :
            (<div className="profile ">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>

            </div>)
          }
        </div>
      </div>
    </div>

  )
}

export default Navbar