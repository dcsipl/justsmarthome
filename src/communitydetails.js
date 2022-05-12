import React from 'react';
import Header from './header.js';
import './header.css';
import BasicTabs from './tab.js';
import Footer from './footer.js';
import './footer.css';
import './tab.css';
import Logo1 from './pictures/Logo.jpeg';
import Validation from './validation.js';

import Pic1 from "./pictures/availablehome-1.jpg";
import Pic2 from "./pictures/availablehome-2.jpg";
import Pic3 from "./pictures/availablehome-3.jpg";
import Pic4 from "./pictures/availablehome-4.jpg";
import Pic5 from "./pictures/availablehome-5.jpg";

import { useState,useRef } from 'react';




 function CommunityDetails() {
   function Header(props) {
  
    
      const [values, setValues]=useState({
          gmail:""
      });
      const [error ,setError]=useState({
          
      });
   
      
      function PopUp(event){
          event.preventDefault();
          setError(Validation(values));
        
      };
  
      function HandleChange(event){
          setValues({
              ...values,
              [event.target.name]:event.target.value,
          });
      }
     
      return (
          <>
              <div className="rectangle">
                  <div className="rectangle1"></div>
                  <div className="rectangle2"></div>
                  <img src={Logo1} alt="s-logo" />
                  <p>Just Smart Custom Homes</p>
                  <a href="http://localhost:3000" className="home">Home</a>
                  <a href="#" className="review" onClick={Down} >{props.second}</a>
                  <a href="#" className="available" onClick={Down}>{props.third}</a>
                  <a href="#" className="completed" onClick={Down}>{props.fourth}</a>
                  <form className="form">
                  <label className='subscribe'>Subscribe for NewsLetter</label>
                  <label className='email'>Email</label>
                  <input type="text"  className="box" name="gmail" placeholder="saranya@gmail.com"value={values.gmail} onChange={HandleChange}/>
                  {
                      error.gmail && <p className="error"style={{position:"absolute",color:"red",fontFamily:"qwigley",fontSize:"23px",left:"1030px",top:"50px"}}>{error.gmail}</p>
                  }
                  <button className="butt" onClick={PopUp}>ok</button>
                  </form>
                 
  
  
              </div>
          </>
      )
  }
  
      const ServicesRef = useRef(null);
      
      const Down = () =>
        window.scrollTo({
          top: ServicesRef.current.offsetTop,
          behavior: "smooth", 
         
         
        });

   function ClickEvent1() {
      window.open("http://localhost:3000/c1", "_self");
   }
   function ClickEvent2() {
      window.open("http://localhost:3000/c2", "_self");
   }
   function ClickEvent3() {
      window.open("http://localhost:3000/c3", "_self");
   }
   function ClickEvent4() {
      window.open("http://localhost:3000/c4", "_self");
   }
   function ClickEvent5() {
      window.open("http://localhost:3000/c5", "_self");
   }
   function ClickEvent6() {
      window.open("http://localhost:3000/c6", "_self");
   }
   function ClickEvent7() {
      window.open("http://localhost:3000/c7", "_self");
   }
   function ClickEvent8() {
      window.open("http://localhost:3000/c8", "_self");
   }
   const [image, setImage] = useState(<div className="rhsimage">
      <img src={Pic1} alt="" className="usestate" />
      <div className="details">
         <p>Canyon Lakes : <li>House Name 1</li></p>
         <a href="#"><button onClick={ClickEvent1}>More Details</button></a>
      </div>
   </div>
   )
   return (
      <>
         <p >{image}</p>
         <Header second="Features" third="Community Plan" fourth="Google Map"  />
         
         <div className="community">
            <p>Community name : Canyon Lakes Houses</p>
         </div>
         <a href="#"><div className="home1" onClick={() => setImage(<div className="rhsimage">
            <img src={Pic1} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>House Name 1</li></p>
               <button onClick={ClickEvent1}>More Details</button>
            </div>
         </div>)}><li>House Name 1</li></div></a>
         <a href="#"><div className="home2" onClick={() => setImage(<div className="rhsimage">
            <img src={Pic2} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>House Name 2</li></p>
               <button onClick={ClickEvent2}>More Details</button>
            </div>
         </div>)}><li>House Name 2</li></div></a>
         <a href="#"><div className="home3" onClick={() => setImage(<div className="rhsimage">
            <img src={Pic3} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>House Name 3</li></p>
               <button onClick={ClickEvent3}>More Details</button>
            </div>
         </div>)}><li>House Name 3</li></div></a>
         <a href="#"><div className="home4" onClick={() => setImage(<div className="rhsimage">
            <img src={Pic4} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>House Name 4</li></p>
               <button onClick={ClickEvent4}>More Details</button>
            </div>
         </div>)}><li>House Name 4</li></div></a>
         <a href="#"><div className="home5" onClick={() => setImage(<div className="rhsimage">
            <img src={Pic5} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>House Name 5</li></p>
               <button onClick={ClickEvent5}>More Details</button>
            </div>
         </div>)}><li>House Name 5</li></div></a>
         <a href="#"><div className="home6" onClick={() => setImage(<div className="rhsimage">
            <img src={Pic1} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>House Name 6</li></p>
               <button onClick={ClickEvent6}>More Details</button>
            </div>
         </div>)}><li>House Name 6</li></div></a>
         <a href="#"><div className="home7" onClick={() => setImage(<div className="rhsimage">
            <img src={Pic2} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>House Name 7</li></p>
               <button onClick={ClickEvent7}>More Details</button>
            </div>
         </div>)}><li>House Name 7</li></div></a>
         <a href="#"><div className="home8" onClick={() => setImage(<div className="rhsimage">
            <img src={Pic3} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>House Name 8</li></p>
               <button onClick={ClickEvent8}>More Details</button>
            </div>
         </div>)}><li>House Name 8</li></div></a>
         <div className="arrow2"></div>
         <div className="features" ref={ServicesRef}>Features:</div>
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

         <div className="description">Description:
            <li>Number of houses/rooms</li>
            <li>How many remaining, </li>
            <li>Time of completion, </li>
            <li>How much % is completed and etc.,</li></div>

         <div className="secondbooking">
            For Booking Raj 405-361-6198<br />
            <span>For Booking</span> Jay 650-888-0015
         </div>
         <div className="nearby">Near by
            <ul ><li>Police Station<br />2 Km</li>
               <li>Walmart Super Center<br />4 km</li>
               <li>Hospital<br />2 Km</li>
               <li>School<br /> 1.3 Km</li>
            </ul>
         </div>

         <BasicTabs />
         <div className="overview" >
            <p>Community Plan</p>
         </div>
         <div className="map">
            <p>Google Map</p>
         </div>


         <Footer />
      </>
   )
}
export default CommunityDetails;
