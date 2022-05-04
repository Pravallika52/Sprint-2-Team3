import React from 'react';
import Registration2 from './components/Registration2';
//import { palette } from '@mui/system';
//import RegisterComponent from './components/registration';
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    {/* <div >
    <header >Multiples Ticket Booking</header></div>
    <div className="App" backgroundColor = 'pink'>
      Hello World
    </div> */}
    <div><Link to="/registration2">Register</Link> </div>
    <Routes>
          <Route path="/registration2" element={<Registration2 />} />
    </Routes>
    </>
  );
}

export default App;
