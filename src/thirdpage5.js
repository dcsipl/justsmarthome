import React from 'react';
import Header from './header.js';
import './header.css';
import Footer from './footer.js';
import './footer.css';
import  { useState} from 'react';
import Hall5 from "./pictures/hall 5.jpg";
import Kitchen5 from "./pictures/kitchen 5.webp";
import Bathroom5 from "./pictures/bathroom 5.jpg";

export default  function ThirdPage5(){
    const[image,setImage]=useState(<img src={Hall5} alt=""className="usestate1"/>)
    return(
<>
<h1>{image}</h1>i
<Header/>
<div className="community">
   <p>Community name : Canyon Lakes - Houses Name 5</p>
   <h5>Kitchen - Size - 10 ft x 10 ft</h5> 
</div>

<div className="kitchen">
    
    </div>

<div className="hall5" onClick={()=>setImage(<img src={Hall5} alt="" className="setimage1" />)}></div>
<div className="kitchen5" onClick={()=>setImage(<img src={Kitchen5} alt="" className="setimage1" />)}></div>
<div className="bathroom5" onClick={()=>setImage(<img src={Bathroom5} alt="" className="setimage1" />)}></div>

<div className="booking">
           For Booking Raj 405-361-6198<br/>
        <span>For Booking</span> Jay 650-888-0015
        </div>
       
        <div className="houseplan">
        <h5>Details....</h5>
        <p> Houses Name 5 - Plan</p>
    
</div>
<div className="twobhk-1"><h4 style={{position:"absolute",top:"-50px",left:"200px"}}>2 BHK</h4></div>
<div className="threebhk-1"><h4 style={{position:"absolute",top:"-60px",left:"200px"}}>3 BHK</h4></div>
<Footer/>
</>
    )
}