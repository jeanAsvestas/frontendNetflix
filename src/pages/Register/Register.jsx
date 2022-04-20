import "./register.scss"
import { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }
  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }
  return (
    <>
    <div className="register">
      <Navbar />
      {/* <div className="top">
        <div className="wrapper">

          <Link to="/login" >Sign in

          </Link>
         </div>
      </div> */}
      <div className="container container-main">
        <h1>Unlimited movies, TV Shows and more.</h1>
        <h2>Watch everywhere, Cancel anytime.</h2>
        <p>Ready to Watch? Enter your e-mail to to create your membership!</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="passwordButton" onClick={handleFinish}>
              Start MemberShip
            </button>
          </form>
        )}
      </div>
    </div>
      <Footer />
      </>
    
  );
}
