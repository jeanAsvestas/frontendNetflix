import "./login.scss";
import { useState,useRef } from "react";
import AuthService from "../../services/auth_service";

import { useForm } from 'react-hook-form';

import { useNavigate } from "react-router-dom";

const Login = () => {


  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")

  // const emailRef = useRef();
  // const passwordRef = useRef();

  // const handleLogin = (e) => {
  //     e.preventDefault()
  //     setEmail(emailRef.current.value)
  //     setPassword(passwordRef.current.value)
  //     AuthService.login(email,password)
  // }
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (e) => {
    //console.log(data)
    console.log(e)
    await AuthService.login(e.email, e.password).then(res => {
      navigate('/')
      window.location.reload();
    },
      (err) => {
        console.log(err)
        setErr(err.toString())
      }
    )

  };
  const handleError = (e) => {
    console.log(e)
  }



 
  return ( 
    
    <div className="login">
      <div className="top">
        <div className="wrapper">
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(handleLogin, handleError)}>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" 
            //ref={emailRef}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === 'required' && <div className="alert alert-danger"> Email is required</div>}
          <input type="password" placeholder="Password"
            //ref={passwordRef}
            {...register("password", { required: true, maxLength: 20 })}
          />
          {errors.password?.type === 'required' && <div className="alert alert-danger"> Password is required</div>}
          {errors.password?.type === 'maxLength' && <div className="alert alert-danger">Too long password</div>}
          <button className="loginButton">
            Sign In</button>
          {err !== undefined && <div className="alert alert-danger">Wrong credentials</div>}
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;