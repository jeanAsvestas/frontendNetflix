import "./register.scss"
import { useState , useRef } from 'react'

export default function Register() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }
  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
        <img className="logo"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
         alt="" />
         <button className="loginButton">Sign in

         </button>
         </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV Shows and more.</h1>
        <h2>Watch everywhere, Cancel anytime.</h2>
        <p>Ready to Watch? Enter your e-mail to to create your membership!</p>
        {!email ? (
            <div className="input">
            <input type="email" placeholder = "email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>

          // 4 inputs ,  Firstname , Lastname , DateofBirth , Password ,  
          ) : (
          <form className="input">
          <input type="password" placeholder = "password" ref={passwordRef} />
          <button className="passwordButton" onClick={handleFinish}>
            Start MemberShip
          </button>
        </form>
        )} 
         </div>
       </div>
  );
}
