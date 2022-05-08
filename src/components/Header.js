import SignUp from "./Registration3";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Route, Routes } from "react-router-dom";
import bg from './imgs/bg.jpg';
import Background from "./Background";
import App from "../App";
import { Box } from "@mui/system";
import Movies2 from "./MovieScreens2";
import UserLoginPage from "./MainLogin";

function header1(){
    return(
        <>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            <a href="/App">
            <h4 style={{ Color: 'white'}}>MULTIPLEX TICKET BOOKING SYSTEM</h4> 
            </a>
          </Typography>
          <Link to="/MovieScreens2" >
          <Button variant="contained"><h3>Movies Info</h3></Button>
          </Link>
          <Link to="/MainLogin" >
          <Button variant="contained"><h3>SignIn</h3></Button>
          </Link>
          <Link to="/registration3" >
          <Button variant="contained"><h3>SignUp</h3></Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      {/* <div style={{ backgroundImage:`url(${bg})`, backgroundSize:"cover",backgroundRepeat:"no-repeat" ,height:750,width:1535}}>
        <div style={{ color:'whhite',marginLeft: '40%', marginTop: '60px', width: '30%' }}>
      The Joy Of Movie Tickets Bookings with Just a Few Clicks.<br/>
        Grab on your popcorn because there are many movies to watch today.<br/>
        If you want to save some money, don't miss out on our movie offers and discounts. 
      </div>
      </div> */}
      
      <Routes>
      <Route path="/MovieScreens2/*" element={<Movies2 />} />
      <Route path="/MainLogin/*" element={<UserLoginPage />} />
        <Route path="/registration3/*" element={<SignUp />}/>
        </Routes>
        </>
    )
}

export default header1;