import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './App.css';
import profile from "./imgs/a.jpeg";
import email from "./imgs/email.jpeg";
import pass from "./imgs/pass.jpeg";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from './Registration3';

const UserLoginPage = () => {
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({});
  const [emailId, setEmailId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const loginSubmit = async (e) => {
    e.preventDefault();
    const data = { emailId, userPassword };
    const errors = validate({...data});
    console.log('user login errors:', errors);
    if(Object.keys(errors).length === 0) {
        console.log('Logining with data: ', { data });
        try {
            const res = await axios.post('http://localhost:8080/user/login', data);
            console.log('Posting data', res);
            setIsSubmitted(true);
            setTimeout(() => {
              navigate("/MovieScreens2");

            }, 2000);
        } catch(e) {
          console.error(e)
          alert("Invalid Credentials")
        }
    } else {
        setErrors(errors);
    }
  }

  return (
    <>
      <div className='main' style={{backgroundColor:'lightblue'}}>
          <div className="sub-main">
              <div>
                  <div className="imgs">
        <div className="container-image">
          <img className='profile' src={profile} alt='student-login' />
        </div>
        </div>
        {!isSubmitted ? (
          <div className='form-content-right'>
          <form className='form' noValidate>
            <h1>
             LOGIN PAGE
            </h1>
            <div >
              <img src={email} alt="email" className="email"/>
              <input
                className='name'
                type='emailId'
                name='emailId'
                placeholder='EmailId'
                value={emailId}
                onChange={e => setEmailId(e.target.value)}
              />
              {errors.emailId && <p>{errors.emailId}</p>}
            </div>
            <div className='second-input'>
            <img src={pass} alt="pass" className="email"/>
              <input
                className='name'
                type='userPassword'
                name='userPassword'
                placeholder='Password'
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
              />
              {errors.userPassword && <p>{errors.userPassword}</p>}
            </div>
            <button className='form-input-btn' onClick={loginSubmit}>
              Sign in
            </button>
            <p className="link">
                  <p>Already have an account ?</p>
                  <Link to="/registration3">
                  <p>Sign Up</p>
                  </Link>
                </p>
          </form>
        </div>
        ) : (
          <div className='form-content-right'>
          <h1 className='form-success'>Login Successful!</h1>
        </div>
        )}
        </div>
          </div>
      </div>
      <Routes>
            <Route path="/registration3" element={<SignUp />} />
        </Routes>
    </>
  );
};

function validate({userName, emailId, userPassword, confirmPassword}) {
  let errors = {};
  if (!emailId) {
    errors.emailId = 'Email Id is required';
  } else if (!/\S+@\S+\.\S+/.test(emailId)) {
    errors.emailId = 'Email Id  is invalid';
  }
  if (!userPassword) {
    errors.userPassword = 'Password is required';
  } else if (userPassword.length < 8) {
    errors.userPassword = 'Password needs to be 8 characters or more';
  }
  return errors;
}

export default UserLoginPage;