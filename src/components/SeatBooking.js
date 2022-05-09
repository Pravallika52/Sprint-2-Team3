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
import BookingSuccess from './Successful';


const theme = createTheme();


function BookingSeats () {

  const navigate = useNavigate();    
  const [name, setName]=useState('');
  const [seats, setSeats]=useState(null);
  const [seatType, setSeatType]=useState(null);
  const [date,setDate]= useState()
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
    }) 
  
    useEffect(() => {
        console.log('compenentDidMount');
    }, [])
  
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

              
            <Grid Grid item xs={12}>
              <FormControl>
      <FormLabel id="name">Movie Name:</FormLabel>
      <RadioGroup
        aria-labelledby="name"
        defaultValue="normal"
        name="radio-buttons-group">
        <FormControlLabel value='Doctor Strange in the Multiverse of Madness' control={<Radio />} label="Doctor Strange in the Multiverse of Madness" onChange={(e) => setName(e.target.value)}/>
        <FormControlLabel value='K.G.F: Chapter 2' control={<Radio />} label="K.G.F: Chapter 2" onChange={(e) => setName(e.target.value)}/>
        <FormControlLabel value='Runway 34' control={<Radio />} label="Runway 34" onChange={(e) => setName(e.target.value)}/>
      </RadioGroup>
    </FormControl>
              </Grid>

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
        name="radio-buttons-group">
        <FormControlLabel value='150' control={<Radio />} label="Normal" onChange={(e) => setSeatType(e.target.value)}/>
        <FormControlLabel value='200' control={<Radio />} label="Exclusive" onChange={(e) => setSeatType(e.target.value)}/>
        <FormControlLabel value='250' control={<Radio />} label="Premium" onChange={(e) => setSeatType(e.target.value)}/>
      </RadioGroup>
    </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="date"
                  variant="filled"
                  required
                  fullWidth
                  id="date"
                  label="Booking Date"
                  type='datetime-local'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  autoFocus
                />
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
            <a href="/SeatBooking">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Book
            </Button>
            </a>
            
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
    </div>
        </>
    )
}

export default BookingSeats;