import React from 'react';
import Header from './header.js';
import './header.css';
import BasicTabs from './tab.js';
import Footer from './footer.js';
import './footer.css';
import './tab.css';
import Pic1 from "./pictures/availablehome-1.jpg";
import Pic2 from "./pictures/availablehome-2.jpg";
import Pic3 from "./pictures/availablehome-3.jpg";
import Pic4 from "./pictures/availablehome-4.jpg";
import Pic5 from "./pictures/availablehome-5.jpg";

import  { useState} from 'react';




 function SeacondPage(){
     
    function ClickEvent(){
            window.open("http://localhost:3000/c","_self");
        }
        const[image,setImage]=useState(<img src={Pic1} alt=""className="usestate"/>)   
    return(
<>
<h1 >{image}</h1>
<Header/>
<div className="community">
   <p>Community name : Canyon Lakes Houses</p> 
</div>
<div className="home1" onClick={()=>setImage(<img src={Pic1} alt="" className="setimage" />)}><li>House Name</li></div>
<div className="home2" onClick={()=>setImage(<img src={Pic2} alt="" className="setimage" />)}><li>House Name</li></div>
<div className="home3" onClick={()=>setImage(<img src={Pic3} alt="" className="setimage" />)}><li>House Name</li></div>
<div className="home4" onClick={()=>setImage(<img src={Pic4} alt="" className="setimage" />)}><li>House Name</li></div>
<div className="home5" onClick={()=>setImage(<img src={Pic5} alt="" className="setimage" />)}><li>House Name</li></div>
<div className="home6" onClick={()=>setImage(<img src={Pic1} alt="" className="setimage" />)}><li>House Name</li></div>
<div className="home7" onClick={()=>setImage(<img src={Pic2} alt="" className="setimage" />)}><li>House Name</li></div>
<div className="home8" onClick={()=>setImage(<img src={Pic3} alt="" className="setimage" />)}><li>House Name</li></div>
<div className="arrow2"></div>
<div className="features">Features:</div>
<ul className="points">
           <li>Smart Home Fixtures</li>
           <li>Superseal Insulation Package</li>
           <li>Extradinary Lightings</li>
           <li>Upgraded Flooring</li>
           <li>Whirlpool Applicances</li>
           <li>Enormous Use Of Crowns</li>
           <li>Barrel/Cofferred Ceilings</li>
           <li>Sprinkler With Web Module</li>
           <li>Insulated Garage Doors</li></ul>
<div className="details">

  <p>Canyon Lakes : <li>House Name</li></p>
  <button onClick={ClickEvent}>More Details</button></div>
  <div className="description">Description: 
<li>Number of houses/rooms</li>
<li>How many remaining, </li>
<li>Time of completion, </li>
<li>How much % is completed and etc.,</li></div>  

<div className="secondbooking">
           For Booking Raj 405-361-6198<br/>
        <span>For Booking</span> Jay 650-888-0015
        </div>
        <div className="nearby">Near by
            <ul ><li>Police Station<br/>2 Km</li>
            <li>Walmart Super Center<br/>4 km</li>
            <li>Hospital<br/>2 Km</li>
            <li>School<br/> 1.3 Km</li>
            </ul>
            </div>
        
            <BasicTabs/>
            <div className="overview">
            <p>Community Plan</p>
            </div>
            <div className="map">
                <p>Google Map</p>
            </div>
            

<Footer/>
</>
    )
}
export default SeacondPage;
