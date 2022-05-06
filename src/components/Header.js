import SignUp from "./Registration3";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Route, Routes } from "react-router-dom";
import bg from './imgs/bg.jpg';
import Background from "./Background";
import Login from "./Login";
import App from "../App";

function header1(){
    return(
        <>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            <a href="/App">
            <h4>MULTIPLEX TICKET BOOKING SYSTEM</h4> 
            </a>
          </Typography>
          <Link to="/Login">
          <Button variant="contained"><h3>SignIn</h3></Button>
          </Link>
          <Link to="/registration3">
          <Button variant="contained"><h3>SignUp</h3></Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <Routes>
      <Route path="/Login/*" element={<Login />} />
        <Route path="/registration3/*" element={<SignUp />}/>
        {/* <Route path="/App" element={<App />} /> */}
        </Routes>
        </>
    )
}

export default header1;