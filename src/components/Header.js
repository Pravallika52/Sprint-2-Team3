import SignUp from "./Registration3";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Route, Routes } from "react-router-dom";
import bg from './imgs/bg.jpg';
import Background from "./Background";

function header1(){
    return(
        <>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            MULTIPLEX TICKET BOOKING SYSTEM 
          </Typography>
          <Link to="/registration3">
          <Button color="inherit" variant="contained">SignIn</Button>
          </Link>
          <Link to="/registration3">
          <Button color="inherit" variant="contained">SignUp</Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <Routes><Route path="/registration3" element={<SignUp />} /></Routes>
        </>
    )
}

export default header1;