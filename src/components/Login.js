import './App.css';
import profile from "./imgs/a.jpeg";
import email from "./imgs/email.jpeg";
import pass from "./imgs/pass.jpeg";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from './Registration3';

function Login(){
    return (
        <div className="main">
         <div className="sub-main">
           <div>
             <div className="imgs">
               <div className="container-image">
                 <img src={profile} alt="profile" className="profile"/>
    
               </div>
    
    
             </div>
             <div>
               <h1>Login Page</h1>
               <div>
                 <img src={email} alt="email" className="email"/>
                 <input type="text" placeholder="user name" className="name"/>
               </div>
               <div className="second-input">
                 <img src={pass} alt="pass" className="email"/>
                 <input type="password" placeholder="password" className="name"/>
               </div>
              <div className="login-button">
              <Link to="/registration3">
              <button>Login</button>
              </Link>
              </div>
               
                <p className="link">
                  <a href="#">Forgot password ?</a> Or
                  <Link to="/registration3">
                  <a href="#">Sign Up</a>
                  </Link>
                </p>
                <Routes>
      
        <Route path="/registration3" element={<SignUp />} /></Routes>
     
             </div>
           </div>
           
    
         </div>
        </div>
      );
}

export default Login;