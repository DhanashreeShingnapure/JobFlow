import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './login.css';

const Login = () => {

    const [allValues, setValues]= useState({
            username:"",
            password:"",
            errorMsg:""
          })

    const navigate = useNavigate();
      
    const onSubmitUser =async(e)=>{
        e.preventDefault();

        const api = "https://apis.ccbp.in/login";

        const userDetails={
            username: allValues.username,
            password: allValues.password,
            errorMsg: allValues.errorMsg
        }

        const options={
            method:"Post",
            body: JSON.stringify(userDetails)
        }

        try {
           const response = await fetch(api, options);
           const data = await response.json();

          //  console.log(data);
           
           if(response.ok){
              Cookies.set("myToken", data.jwt_token);
              setValues({...allValues,errorMsg:""});
              navigate("/");
           }
           else{
              setValues({...allValues,errorMsg:data.error_msg});
           }
        } 
        catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p>Login to your account</p>

          <form onSubmit={onSubmitUser}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input onChange={(e)=>{setValues({...allValues,username:e.target.value})}} type="text" id="username" placeholder="Enter your username" required />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onChange={(e)=>{setValues({...allValues,password:e.target.value})}} type="password" id="password" placeholder="Enter your password" required />
            </div>

            <button type="submit" className="login-btn">Login</button>
            <h4 style={{color:"red"}}>{allValues.errorMsg}</h4>

            <div className="login-footer">
              <p>Don't have an account? <a href="/register">Sign up</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
