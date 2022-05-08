import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { Link, Route, Routes } from "react-router-dom";
import FormLabel from '@mui/material/FormLabel';

import { useNavigate } from "react-router-dom";


const theme = createTheme();


function BookingSeats () {

  
  const navigate = useNavigate();
    
  const [seats, setSeats]=useState(null);
  const [seatType, setSeatType]=useState(null);
  const [card, setCard]=useState(null);
  const [cvv, setCvv]=useState(null);
  const [data,setData]=useState([]);

  const amount= seatType*seats;

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Successful");
  }

    useEffect(() => {
        console.log('compenentDidUpdate');
    }) // called on mount and every subsequent updates
  
    useEffect(() => {
        console.log('compenentDidMount');
    }, []) // called only on mount
  
    useEffect(() => {
        return () => console.log('componentWillUnmount');
    }) 


    return(
        <>
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
          <Typography component="h1" variant="h5">
            Booking Tickets:
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
              <Grid item xs={12}>
                <TextField
                  name="seats"
                  variant="filled"
                  required
                  fullWidth
                  id="seats"
                  label="No of Seats"
                  onChange={(e) => setSeats(e.target.value)}
                  value={seats}
                  autoFocus
                />
              </Grid>

              <Grid Grid item xs={12}>
              <FormControl>
      <FormLabel id="seatType">Seat Type</FormLabel>
      <RadioGroup
        aria-labelledby="seatType"
        defaultValue="normal"
        name="radio-buttons-group"
        
      >
        <FormControlLabel value='150' control={<Radio />} label="Normal" onChange={(e) => setSeatType(e.target.value)}/>
        <FormControlLabel value='200' control={<Radio />} label="Exclusive" onChange={(e) => setSeatType(e.target.value)}/>
        <FormControlLabel value='250' control={<Radio />} label="Premium" onChange={(e) => setSeatType(e.target.value)}/>
      </RadioGroup>
    </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="amount"
                  variant="filled"
                  required
                  fullWidth
                  id="amount"
                  label="Amount"
                  value={amount}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="card"
                  variant="filled"
                  required
                  fullWidth
                  id="card"
                  label="Card Number"
                  onChange={(e) => setCard(e.target.value)}
                  value={card}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="cvv"
                  variant="filled"
                  required
                  fullWidth
                  id="cvv"
                  label="CVV"
                  onChange={(e) => setCvv(e.target.value)}
                  value={cvv}
                  autoFocus
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
              Book
            </Button>
            
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
        
    </div>
        </>
    )
}

export default BookingSeats;