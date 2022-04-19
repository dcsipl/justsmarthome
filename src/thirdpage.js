import React from 'react';
import Header from './header.js';
import './header.css';
import Footer from './footer.js';
import './footer.css';
import  { useState} from 'react';
import Hall from "./pictures/hall 1.webp";
import Kitchen from "./pictures/kitchen 1.jpg";
import Bathroom from "./pictures/bathroom 1.webp";
export default  function ThirdPage(){
    const[image,setImage]=useState(<img src={Hall} alt=""className="usestate1"/>)
    return(
<>
<h1>{image}</h1>i
<Header/>
<div className="community">
   <p>Community name : Canyon Lakes - Houses Name</p>
   <h5>Kitchen - Size - 10 ft x 10 ft</h5> 
</div>

<div className="kitchen">
    
    </div>

<div className="hall-1" onClick={()=>setImage(<img src={Hall} alt="" className="setimage1" />)}></div>
<div className="kitchen-1" onClick={()=>setImage(<img src={Kitchen} alt="" className="setimage1" />)}></div>
<div className="bathroom-1" onClick={()=>setImage(<img src={Bathroom} alt="" className="setimage1" />)}></div>

<div className="booking">
           For Booking Raj 405-361-6198<br/>
        <span>For Booking</span> Jay 650-888-0015
        </div>
       
        <div className="houseplan">
        <h5>Details....</h5>
        <p> Houses Name - Plan</p>
    
</div>
<div className="twobhk-1"><h4 style={{position:"absolute",top:"-50px",left:"200px"}}>2 BHK</h4></div>
<div className="threebhk-1"><h4 style={{position:"absolute",top:"-60px",left:"200px"}}>3 BHK</h4></div>
<Footer/>
</>
    )
}