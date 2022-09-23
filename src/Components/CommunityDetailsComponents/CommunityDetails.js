import React from 'react';
import Header from '../CommonComponents/Header';
import '../CommonComponents/Header.css';
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';
import BasicTabs from '../CommunityDetailsComponents/Tab';
import '../CommunityDetailsComponents/Tab.css';
import './CommunityDetails.css'

import { useState } from 'react';
import { style } from '@mui/system';




 function CommunityDetails(props) {
   
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
     
   const [image, setImage] = useState(<> <p style={{position:"absolute",
   width:"500px",
   height:"20px",
   left:"680px",
   top:"110px",
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
   fontSize:"20px",
   }}>
{props.url[0].house[0].name}
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
src={props.url[0].house[0].image}/>
</>);
    
   console.log(props)
   const arr2=props.url[0].house.map((record1,key)=>
      <div>
         <p style={{position:"absolute",
                    width:"500px",
                    height:"20px",
                    left:"680px",
                    top:"110px",
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
                   fontSize:"20px",
                   }}>
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
       <Header second="Features" third="Near by Places" fourth="Google Map" secondid="features" thirdid="nearbyplaces" fourthid="googlemap"  />
       <p style={{position:"absolute",
                  width:"500px",
                  height:"20px",
                  left:"50px",
                  top:"100px",
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
            <div className='houses'>
               <p style={{fontFamily: 'Playfair Display',
                          fontSize: "20px",
                          width:"250px",
                          position:"relative",
                          left:"50px",
                          top:"-5px"}}>
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
       <div style={{width:"550px",height:"760px",borderRadius:"10px",backgroundColor:"#BCFBEC",position:"absolute",left:"675px",top:"400px"}}>
       </div> {props.url[0].description.map((record,i)=>
        <div className="description"><span style={{fontSize:"30px",fontFamily:"qwigley"}}>Description:</span><br/>
            <li>{record.one}</li>
            <li>{record.two}</li>
            <li>{record.three}</li>
            <li>{record.four}</li></div>)}

         <div className="secondbooking">
            {props.url[0].booking1}<br />
            <span>For Booking</span>{props.url[0].booking2}
         </div>
         {props.url[0].nearby.map((near,i)=>
         <div className="nearby" id="nearbyplaces">Near by
            <ul >
               <li>{near.place1}<br />{near.km1}</li>
               <li>{near.place2}<br />{near.km2}</li>
               <li>{near.place3}<br />{near.km3}</li>
               <li>{near.place4}<br />{near.km4}</li>
              
            </ul>
         </div>)}
      
         <BasicTabs />
      
         <div className="features" id="features">Features:</div>
         <ul className="points">
            {props.url[0].extraFeatures}</ul>
        <div className="overview" >
            <p>Community Plan</p>
            <img  src={props.url[0].communityPlan}/>
            </div>
         <div className="map" id="googlemap">
            <p>Google Map</p>
            <img  src={props.url[0].googlemap}/>
         </div>
            
        
         <Footer />
        </>
    );

}
export default CommunityDetails;
