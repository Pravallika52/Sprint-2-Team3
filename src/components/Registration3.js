import { useState } from "react";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiPhoneNumber from 'mui-phone-number';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const theme = createTheme();

export default function SignUp() {
  
    const initialFormState = {
        userId: Date.now(),
        userName: '',
        userType:'',
        emailId: '',
        mobileNo:0,
        userPassword: '',
        userConfirmPassword:''
    };

    const [formData, setFormData] = useState(initialFormState);

    const [currentUser, setCurrentUser] = useState({});
    const [userList, setUserList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserList([...userList, formData]);
        setFormData({ ...initialFormState, id: Date.now()})
        // navigate to the home page
        // navigate("/home")
    }
    const handleChange = (event) => {
        const updatedFormData = { ...formData, [event.target.name]: event.target.value };
        setFormData(updatedFormData);
    }

  return (
    <div style={{ backgroundColor: 'lightblue', height:750,width:1518}}>
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
                  onChange={handleChange}
                  value={formData.userName}
                  autoFocus
                />
              </Grid>
              <Grid Grid item xs={12}>
              <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  id="emailId"
                  label="Email Address"
                  name="emailId"
                  autoComplete="email"
                  onChange={handleChange}
                  value={formData.emailId}
                />
              </Grid>
              {/* <Grid item xs={12}>
              <MuiPhoneNumber defaultCountry={'us'} onChange={handleChange}/>
              <MuiPhoneNumber
                    required
                    fullWidth
                    id="mobileNo"
                    name="mobileNo"
                    label="Mobile Number"
                    defaultCountry={"india"}
                    value={formData.mobileNo}
                    onChange={handleChange}
                  />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  name="mobileNo"
                  label="Mobile No"
                  type="text"
                  id="mobileNo"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={formData.mobileNo}
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
                  onChange={handleChange}
                  value={formData.userPassword}
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
                  onChange={handleChange}
                  value={formData.userConfirmPassword}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
    </div>
  );
}
