import { useEffect,useState } from "react";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import UserLoginPage from "./MainLogin";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {

  const [userName, setUserName]=useState('');
  const [userType, setUserType]=useState('');
  const [emailId,setEmailId]=useState('');
  const [mobileNo, setMobileNo]=useState(null);
  const [userPassword,setUserPassword]=useState('');
  const [userConfirmPassword, setUserConfirmPassword]=useState('');
  const [data, setData]=useState([])

  const navigate = useNavigate();

    useEffect(() => {
      console.log('compenentDidUpdate');
  })

  useEffect(() => {
      console.log('compenentDidMount');
      axios.get('http://localhost:8080/getallusers')
        .then(res => {console.log("Getting from ::::",res.data)
        setData(res.data)})
        .catch(err => console.log(err))
  }, [])

  useEffect(() => {
      return () => console.log('componentWillUnmount');
  })



    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/registeruser',{
        userName,
        userType,
        emailId,
        mobileNo,
        userPassword,
        userConfirmPassword
    }).then(res => console.log('Posting data',res)).catch(err => console.log(err))
    setTimeout(() => {
      navigate("/MainLogin");

    }, 2000);
    }    


  return (
    <div style={{ backgroundColor: 'lightblue', height:820,width:1518}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  variant="filled"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  autoFocus
                />
              </Grid>
              
              <Grid Grid item xs={12}>
              <FormControl>
      <FormLabel id="userType">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="userType"
        defaultValue="female"
        name="radio-buttons-group"
        
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(e) => setUserType(e.target.value)}/>
        <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e) => setUserType(e.target.value)}/>
        <FormControlLabel value="other" control={<Radio />} label="Other" onChange={(e) => setUserType(e.target.value)}/>
      </RadioGroup>
    </FormControl>
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  id="emailId"
                  label="Email Address"
                  name="emailId"
                  autoComplete="email"
                  onChange={(e) => setEmailId(e.target.value)}
                  value={emailId}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  name="mobileNo"
                  label="Mobile No"
                  type="number"
                  id="mobileNo"
                  onChange={(e) => setMobileNo(e.target.value)}
                  value={mobileNo}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  name="userPassword"
                  label="Password"
                  type="password"
                  id="userPassword"
                  autoComplete="new-password"
                  onChange={(e) => setUserPassword(e.target.value)}
                  value={userPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  name="userConfirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="userConfirmPassword"
                  autoComplete="new-password"
                  onChange={(e) => setUserConfirmPassword(e.target.value)}
                  value={userConfirmPassword}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link to="/MainLogin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
    <Routes>
      <Route path="/MainLogin/*" element={<UserLoginPage />} />
    </Routes>
    </div>
  );
}
