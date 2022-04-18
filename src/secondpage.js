import React from 'react';
import Header from './header.js';
import './header.css';
import BasicTabs from './tab.js';
import Footer from './footer.js';
import './footer.css';
import './tab.css';



 function SeacondPage(){
    function ClickEvent(){
            window.open("http://localhost:3000/c","_self");
        }
    return(
<>
<Header/>
<div className="community">
   <p>Community name : Canyon Lakes Houses</p> 
</div>
<div className="home1"><li>House Name</li></div>
<div className="home2"><li>House Name</li></div>
<div className="home3"><li>House Name</li></div>
<div className="home4"><li>House Name</li></div>
<div className="home5"><li>House Name</li></div>
<div className="home6"><li>House Name</li></div>
<div className="home7"><li>House Name</li></div>
<div className="home8"><li>House Name</li></div>
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
