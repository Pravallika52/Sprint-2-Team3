import React from "react";
import multiverse1 from './imgs/multiverse1.jpg'
import runway from './imgs/runway.jpeg'
import kgf from './imgs/kgf.jpg'
import Button from "@mui/material/Button";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";


export default function Movies2(){
    return(
        <>
        <div style={{backgroundColor:'lightblue'}} class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 css-1tz8m30">
            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-ctmtb0">
            <img src={multiverse1} alt="Logo" class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img css-1fzgs4v" style={{width:600}} /> 
            <div class="MuiCardContent-root css-10ofaip">
            <div class="MuiCardContent-root css-10ofaip">
            <h2 class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-t1nuxs">Doctor Strange in the Multiverse of Madness</h2>
            <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
            Marvel Studios' "Doctor Strange in the Multiverse of Madness"—a<br/>
            thrilling ride through the Multiverse with Doctor Strange, his <br/>
            trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. "Doctor<br/>
            Strange in the Multiverse of Madness" open in theaters from May 6, 2022.
            </p>
            </div>
            </div><Link to="/Login" >
          <Button variant="contained"><h3>Book Tickets</h3></Button>
          </Link>
            </div>
            
            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-ctmtb0">
            <img src={kgf} alt="Logo" class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img css-1fzgs4v" style={{width:600}}/> 
            <div class="MuiCardContent-root css-10ofaip">
            <div class="MuiCardContent-root css-10ofaip">
            <h2 class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-t1nuxs">K.G.F: Chapter 2</h2>
            <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
            In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear<br/>
            into his foes. While his allies look up to him, the government sees<br/>
            him as a threat to law and order. Rocky must battle threats from <br/>
            all sides for unchallenged supremacy.
            </p>
            </div>
            </div>
            <Link to="/Login" >
          <Button variant="contained"><h3>Book Tickets</h3></Button>
          </Link>
            </div>

            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-ctmtb0">
            <img src={runway} alt="Logo" class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img css-1fzgs4v" style={{width:600}}/> 
            <div class="MuiCardContent-root css-10ofaip">
            <div class="MuiCardContent-root css-10ofaip">
            <h2 class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-t1nuxs">Runway 34</h2>
            <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
            IInspired by true incidents, "Runway 34" revolves around Captain<br/>
            Vikrant Khanna played by Ajay Devgn, a flying prodigy, whose flight<br/>
            takes a mysterious course after take-off from an international <br/>
            destination.
            </p>
            </div>
            </div><Link to="/Login" >
          <Button variant="contained"><h3>Book Tickets</h3></Button>
          </Link>
            </div>
            </div>

            <Routes>
      <Route path="/Login/*" element={<Login />} />
        </Routes>
        </>
    )

}
