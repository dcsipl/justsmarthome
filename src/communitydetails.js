import React from 'react';
import Header from './header.js';
import './header.css';
import BasicTabs from './tab.js';
import Footer from './footer.js';
import './footer.css';
import './tab.css';
import Logo1 from './pictures/Logo.jpeg';
import Validation from './validation.js';

// import Pic1 from "./pictures/availablehome-1.jpg";
// import Pic2 from "./pictures/availablehome-2.jpg";
// import Pic3 from "./pictures/availablehome-3.jpg";
// import Pic4 from "./pictures/availablehome-4.jpg";
// import Pic5 from "./pictures/availablehome-5.jpg";
import community from './justsmarthome.json'

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
             <div className="headermainbar">
                 <div className="headerbottombar1"></div>
                 <div className="headerbottombar2"></div>
                 <img src={Logo1} alt="s-logo" />
                 <p>Just Smart Custom Homes</p>
                 <a href="http://localhost:3000" className="home">Home</a>
                 <a href="#" className="review" onClick={Down}>{props.second}</a>
                 <a href="#" className="available" onClick={Down}>{props.third}</a>
                 <a href="#" className="completed" onClick={Down}>{props.fourth}</a>
                 <form className="form">
                 <label className='subscribe'>Subscribe for NewsLetter</label>
                 <label className='email'>Email</label>
                 <input type="text"  className="box" name="gmail" placeholder="Enter the email"value={values.gmail} onChange={HandleChange}/>
                 {
                     error.gmail && <p className="error"style={{position:"absolute",width:"305px",color:"red",fontSize:"15px",left:"1020px",top:"50px"}}>{error.gmail}</p>
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
      window.open("http://localhost:3000/house1details", "_self");
   }
   function ClickEvent2() {
      window.open("http://localhost:3000/house2details", "_self");
   }
   function ClickEvent3() {
      window.open("http://localhost:3000/house3details", "_self");
   }
   function ClickEvent4() {
      window.open("http://localhost:3000/house4details", "_self");
   }
   function ClickEvent5() {
      window.open("http://localhost:3000/house5details", "_self");
   }
   function ClickEvent6() {
      window.open("http://localhost:3000/house6details", "_self");
   }
   function ClickEvent7() {
      window.open("http://localhost:3000/house7details", "_self");
   }
   function ClickEvent8() {
      window.open("http://localhost:3000/house8details", "_self");
   }
   const [image, setImage] = useState(<div className="rhsimage">
      <img src={community.JustSmartCustomHomes[0].house[0].image} alt="" className="usestate" />
      <div className="details">
         <p>Canyon Lakes : <li>{community.JustSmartCustomHomes[0].house[0].name}</li></p>
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
         <a href="#"><div className="home1" style={{backgroundImage: `url(${community.JustSmartCustomHomes[0].house[0].image})`,}} onClick={() => setImage(<div className="rhsimage">
            <img src={community.JustSmartCustomHomes[0].house[0].image} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>{community.JustSmartCustomHomes[0].house[0].name}</li></p>
               <button onClick={ClickEvent1}>More Details</button>
            </div>
         </div>)}><li>{community.JustSmartCustomHomes[0].house[0].name}</li></div></a>
         <a href="#"><div className="home2" style={{backgroundImage: `url(${community.JustSmartCustomHomes[1].house[0].image})`,}} onClick={() => setImage(<div className="rhsimage">
            <img src={community.JustSmartCustomHomes[1].house[0].image} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>{community.JustSmartCustomHomes[1].house[0].name}</li></p>
               <button onClick={ClickEvent2}>More Details</button>
            </div>
         </div>)}><li>{community.JustSmartCustomHomes[1].house[0].name}</li></div></a>
         <a href="#"><div className="home3" style={{backgroundImage: `url(${community.JustSmartCustomHomes[2].house[0].image})`,}} onClick={() => setImage(<div className="rhsimage">
            <img src={community.JustSmartCustomHomes[2].house[0].image} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>{community.JustSmartCustomHomes[2].house[0].name}</li></p>
               <button onClick={ClickEvent3}>More Details</button>
            </div>
         </div>)}><li>{community.JustSmartCustomHomes[2].house[0].name}</li></div></a>
         <a href="#"><div className="home4" style={{backgroundImage: `url(${community.JustSmartCustomHomes[3].house[0].image})`,}} onClick={() => setImage(<div className="rhsimage">
            <img src={community.JustSmartCustomHomes[3].house[0].image} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>{community.JustSmartCustomHomes[3].house[0].name}</li></p>
               <button onClick={ClickEvent4}>More Details</button>
            </div>
         </div>)}><li>{community.JustSmartCustomHomes[3].house[0].name}</li></div></a>
         <a href="#"><div className="home5" style={{backgroundImage: `url(${community.JustSmartCustomHomes[4].house[0].image})`,}} onClick={() => setImage(<div className="rhsimage">
            <img src={community.JustSmartCustomHomes[4].house[0].image} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>{community.JustSmartCustomHomes[4].house[0].name}</li></p>
               <button onClick={ClickEvent5}>More Details</button>
            </div>
         </div>)}><li>{community.JustSmartCustomHomes[4].house[0].name}</li></div></a>
         <a href="#"><div className="home6" style={{backgroundImage:`url(${community.JustSmartCustomHomes[0].house[0].image})`,}} onClick={() => setImage(<div className="rhsimage">
            <img src={community.JustSmartCustomHomes[0].house[0].image} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>{community.JustSmartCustomHomes[0].house[0].name}</li></p>
               <button onClick={ClickEvent6}>More Details</button>
            </div>
         </div>)}><li>{community.JustSmartCustomHomes[0].house[0].name}</li></div></a>
         <a href="#"><div className="home7" style={{backgroundImage:`url(${community.JustSmartCustomHomes[1].house[0].image})`,}} onClick={() => setImage(<div className="rhsimage">
            <img src={community.JustSmartCustomHomes[1].house[0].image} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>{community.JustSmartCustomHomes[1].house[0].name}</li></p>
               <button onClick={ClickEvent7}>More Details</button>
            </div>
         </div>)}><li>{community.JustSmartCustomHomes[1].house[0].name}</li></div></a>
         <a href="#"><div className="home8" style={{backgroundImage:`url(${community.JustSmartCustomHomes[2].house[0].image})`,}} onClick={() => setImage(<div className="rhsimage">
            <img src={community.JustSmartCustomHomes[2].house[0].image} alt="" className="usestate" />
            <div className="details">
               <p>Canyon Lakes : <li>{community.JustSmartCustomHomes[2].house[0].name}</li></p>
               <button onClick={ClickEvent8}>More Details</button>
            </div>
         </div>)}><li>{community.JustSmartCustomHomes[2].house[0].name}</li></div></a>
         <div className="arrow2"></div>
         <div className="features" ref={ServicesRef}>Features:</div>
         <ul className="points">
            {community.JustSmartCustomHomes[0].extraFeatures}</ul>

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
         <div className="overview" style={{backgroundImage: `url(${community.JustSmartCustomHomes[0].communityPlan})`,}} >
            <p>Community Plan</p>
         </div>
         <div className="map" style={{backgroundImage: `url(${community.JustSmartCustomHomes[0].googlemap})`,}}>
            <p>Google Map</p>
         </div>


         <Footer />
         
      </>
   )
}
export default CommunityDetails;
