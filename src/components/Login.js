import './App.css';
import profile from "./imgs/a.jpeg";
import email from "./imgs/email.jpeg";
import pass from "./imgs/pass.jpeg";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from './Registration3';
import Button from "@mui/material/Button";
import Movies2 from "./MovieScreens2";

function Login(){
    return (
        <div className="main" style={{backgroundColor:'lightblue'}}>
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
                 <input type="text" placeholder="user name" className="name" />
               </div>
               <div className="second-input">
                 <img src={pass} alt="pass" className="email"/>
                 <input type="password" placeholder="password" className="name" />
               </div>
              <div className="login-button">
              <Link to="/movieScreens2" >
          <Button variant="contained"><h3>Movies Info</h3></Button>
          </Link>
              </div>
                <p className="link">
                  <p>Already have an account ?</p>
                  <Link to="/registration3">
                  <p>Sign Up</p>
                  </Link>
                </p>
                <Routes>
                  <Route path="/registration3" element={<SignUp />} />
                  <Route path="/movieScreens2" element={<Movies2 />} />
                </Routes>
             </div>
           </div>
         </div>
        </div>
      );
}

export default Login;