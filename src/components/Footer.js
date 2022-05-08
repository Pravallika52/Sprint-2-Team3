import React from "react";
import Contact from "./Details/Contact";
import { Link, Route, Routes } from "react-router-dom";


function footer(){
    return(
        <>
        <div style={{
        backgroundColor: 'grey',
        width: '50%',
        float:'left'
      }}>Customer Service:
            <div>emailId: customerservice@gmail.com</div>
            <div>Phone  : (+91) 999 999 9999</div>
        </div>
        <div style={{
        backgroundColor: 'grey',
        width: '50%',
        float:'left'
      }}>
            Click Below To Know More About Us:
            <div>
            <Link to="/contact"><button>KNOW US</button></Link>
            </div>
        </div>
        <Routes>
      
        <Route path="/contact" element={<Contact />} /></Routes>
        </>
    )

}

export default footer;