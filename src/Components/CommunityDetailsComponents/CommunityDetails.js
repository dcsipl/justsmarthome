import React from 'react';
import '../CommonComponents/Header.css';
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';
import BasicTabs from '../CommunityDetailsComponents/Tab';
import '../CommunityDetailsComponents/Tab.css';
import Logo1 from '../../Pictures/CommonImages/Logo.jpeg';
import Validation from '../CommonComponents/Validation.js';

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

        function changeHouse(event,key){
         (key===0)?window.open("/House-1", "_self"):
         (key===1)?window.open("/House-2", "_self"):
         (key===2)?window.open("/House-3", "_self"):
         (key===3)?window.open("/House-4", "_self"):
         (key===4)?window.open("/House-5", "_self"):
         (key===5)?window.open("/House-6", "_self"):
         (key===6)?window.open("/House-7", "_self"):
         (key===7)?window.open("/House-8", "_self"):
                   window.open("/House-9", "_self")
     }
     
   const [image, setImage] = useState('');
    
   console.log(props)
   const arr2=props.url[0].house.map((record1,key)=>
      <div>
         <p style={{position:"absolute",
                    width:"500px",
                    height:"20px",
                    left:"680px",
                    top:"80px",
                    fontSize:"35px",
                    fontFamily:"qwigley",
                    }}>
            {props.url[0].name}
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
                     left:"680px",
                     top:"150px",
                     border:"1px solid gray",
                     borderRadius:"10px",
                     cursor:"pointer"
                     }}
            src={record1.image} 
            onClick={event=>changeHouse(event,key)} key={key}/>
       <button style={{position:"absolute",width:"100px",
                        height:"20px",
                        left:"1000px",
                        top:"350px",
                        cursor:"pointer"}}
               onClick={event=>changeHouse(event,key)} key={key}>
               more details
      </button>
</div>);


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
          Community name : {props.url[0].name}
       </p>
       <h1 style={{color:"white"}}>jdfffffffffffffffffffffffffffffffk<br/>
       hjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvhbsjv<br/>
       hjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvhbsjv<br/>
       hjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvhbsjv<br/>
       hjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvhbsjv<br/></h1>
       <div style={{width:"630px",
                    height:"1000px",
                    display: "grid",
                    gap: "10px 50px",
                    gridTemplateColumns: "auto auto ",
                    paddingLeft:"10px",
                    
                    marginTop:"-20px",
                   overflowY:"auto",
                   overflowX:"hidden"}}>
            {props.url[0].house.map((record1,i)=>
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
                            cursor:"pointer"
                           }} 
                   src={record1.image} 
                   onClick={() => {setImage(arr2[i])}}
               />
            </div>)}
            <p>{image}</p>
       </div>
       {props.url[0].description.map((record,i)=>
        <div className="description"><span style={{fontSize:"30px",fontFamily:"qwigley"}}>Description:</span><br/>
            <li>{record.one}</li>
            <li>{record.two}</li>
            <li>{record.three}</li>
            <li>{record.four}</li></div>)}

         <div className="secondbooking">
            {props.url[0].booking1}<br />
            <span>For Booking</span> {props.url[0].booking2}
         </div>
         {props.url[0].nearby.map((near,i)=>
         <div className="nearby">Near by
            <ul >
               <li>{near.place1}<br />{near.km1}</li>
               <li>{near.place2}<br />{near.km2}</li>
               <li>{near.place3}<br />{near.km3}</li>
               <li>{near.place4}<br />{near.km4}</li>
              
            </ul>
         </div>)}
      
         <BasicTabs />
         <div className="features" ref={ServicesRef}>Features:</div>
         <ul className="points">
            {props.url[0].extraFeatures}</ul>
         <div className="overview" style={{backgroundImage: `url(${props.url[0].communityPlan})`,}} >
            <p>Community Plan</p>
         </div>
         <div className="map" style={{backgroundImage: `url(${ props.url[0].googlemap})`,}}>
            <p>Google Map</p>
         </div>
         <Footer />
        </>
    );

}
export default CommunityDetails;
