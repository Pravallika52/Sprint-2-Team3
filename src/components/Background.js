import { Box, textAlign } from '@mui/system';
import bg from './imgs/bg.jpg';
import Wave from 'react-animated-text';

function background(){

    return(
        <>
        <div style={{ backgroundImage:`url(${bg})`,backgroundSize:"1518px 900px", backgroundRepeat:"no-repeat" , height:670,width:1700}}>

            <Box style={{color:'#037bfce4', textAlign:'center'}}>   <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><h1 style={{border:'solid', width:1200,marginLeft:'10%',fontFamily:'Serif', backgroundColor:'lightgrey'}}>
            
            The Joy Of Movie Tickets Bookings with Just a Few Clicks.<br/>
        Grab on your popcorn because there are many movies to watch today.<br/>
        If you want to save some money, don't miss out on our movie offers and discounts.</h1> </Box>
    </div>
  </>
    )
}

export default background;