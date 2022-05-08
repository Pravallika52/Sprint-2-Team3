import React from 'react';
import Registration3 from './components/Registration3';
//import { palette } from '@mui/system';
//import RegisterComponent from './components/registration';
import { Link, Route, Routes } from "react-router-dom";
import Registration2 from './components/Registration2'
import { NavLink } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/Registration3';
import Background from './components/Background';
import bg from './components/imgs/bg.jpg'
import FormComponent from './components/Registration2';
import Main from './components/Main';
import Contact from './components/Details/Contact';

function App() {
  return (
    <>
    {/* <div >
    <header >Multiples Ticket Booking</header></div>
    <div className="App" backgroundColor = 'pink'>
      Hello World
    </div> */}
    {/* <Link to="/registration3">Registration</Link> 
        <Routes>
          <Route path="/registration3" element={<Registration3 />} />
        </Routes> */}
       {/* <link to="/Registration2"><button >Register</button></link>  */}
       
       {/* <NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="Registration2"
    exact>
	Home
</NavLink> */}
{/* <header/>
    <a href='Registration2.js'>Register</a>
    <Registration2/> */}


    <div >
    <Main/>
    </div>


    {/* <Movies/> */}

    {/* <SignUp/> */}
    {/* <Registration3/> */}
    {/* <FormComponent/> */}
    </>
  );
}

export default App;


// backgroundImage:`url(${bg4})`, backgroundRepeat:"no-repeat" ,,height:700,width:1500