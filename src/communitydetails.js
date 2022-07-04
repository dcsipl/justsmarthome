import React from 'react';
import Header from './header.js';
import './header.css';
import Footer from './footer.js';
import './footer.css';
import BasicTabs from './tab.js';
import './tab.css';
import Logo1 from './pictures/Logo.jpeg';
import Validation from './validation.js';
import community from './justsmarthome.json'

import { useState,useRef } from 'react';




 function CommunityDetails(props) {
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
   const arr3=[ClickEvent1,ClickEvent2,ClickEvent3,ClickEvent4,ClickEvent5]
   const [image, setImage] = useState('');
    
   console.log(props)
   const arr2=props.community.house.map((record1,i)=>
      <div>
         <p style={{position:"absolute",
                    width:"500px",
                    height:"20px",
                    left:"680px",
                    top:"80px",
                    fontSize:"35px",
                    fontFamily:"qwigley"}}>
            {props.community.name}
       </p>
       <li style={{position:"absolute",
                   width:"500px",
                   height:"20px",
                   left:"900px",
                   top:"120px",
                   fontSize:"20px"}}>
           {record1.name}
       </li>
       <img  style={{position:"absolute",
                     width:"540px",
                     height:"250px",
                     left:"660px",
                     top:"150px",
                     border:"1px solid gray",
                     borderRadius:"10px"}}
            src={record1.image} 
            onClick={arr3[i]}/>
       <button style={{position:"absolute",width:"100px",
                        height:"20px",
                        left:"1000px",
                        top:"350px"}}
               onClick={arr3[i]}>
               more details
      </button>
</div>);
function ClickEvent1() {
   window.open("http://localhost:3000/house1details", "_self");
}


   return (
       <>
       <Header second="Features" third="Community Plan" fourth="Google Map"  />
       <p style={{position:"absolute",
                  width:"500px",
                  height:"20px",
                  left:"50px",
                  top:"70px",
                  fontSize:"40px",
                  fontFamily:"qwigley"}}>
          Community name : {props.community.name}
       </p>
       <div style={{width:"630px",
                    height:"1000px",
                    display: "grid",
                    gap: "10px 50px",
                    gridTemplateColumns: "auto auto ",
                    paddingLeft:"10px",
                    paddingTop:"110px",
                    overflowX:"hidden",
                    overflowY:"scroll",}}>
            {props.community.house.map((record1,i)=>
            <div >
               <p style={{fontFamily: 'Playfair Display',
                          fontSize: "20px",
                          width:"250px",
                          position:"relative",
                          left:"50px",
                          top:"15px"}}>
                  {record1.name}
               </p>
               <img style={{width: "270px",
                            height: "200px",
                            border:"1px solid gray",
                            borderRadius:"10px",
                           }} 
                   src={record1.image} 
                   onClick={() => {setImage(arr2[i])}}
               />
            </div>)}
            <p>{image}</p>
       </div>
   
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
         <div className="features" ref={ServicesRef}>Features:</div>
         <ul className="points">
            {community.JustSmartCustomHomes[0].extraFeatures}</ul>
         <div className="overview" style={{backgroundImage: `url(${community.JustSmartCustomHomes[0].communityPlan})`,}} >
            <p>Community Plan</p>
         </div>
         <div className="map" style={{backgroundImage: `url(${community.JustSmartCustomHomes[0].googlemap})`,}}>
            <p>Google Map</p>
         </div>
         <Footer />
        </>
    );

}
export default CommunityDetails;
