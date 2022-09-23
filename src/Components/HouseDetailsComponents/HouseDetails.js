import React from 'react';
import Header from '../CommonComponents/Header';
import '../CommonComponents/Header.css';
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';
import { useState,useRef } from 'react';
import Logo1 from '../../Pictures/CommonImages/Logo.jpeg';
import Validation from '../CommonComponents/Validation.js';
import community from '../../Justsmarthome.json';


export default function HouseDetails(props) {
  
   
   
    
    const [image, setImage] = useState(<><p style={{position:"absolute",
    width:"500px",
    height:"20px",
    left:"400px",
    top:"140px",
    fontSize:"20px"}}>{ props.url1[0].room[0].type}-{props.url1[0].room[0].measurement.totalArea}</p>
    <img  style={{position:"absolute",
                     width:"840px",
                     height:"470px",
                     left:"30px",
                     top:"190px",
                     border:"1px solid gray",
                     borderRadius:"25px"}}
            src={props.url1[0].room[0].image} 
            /></>)
 
    const arr2=props.url1[0].room.map((record1,i)=>
      <div>
         
       <p style={{position:"absolute",
                   width:"500px",
                   height:"20px",
                   left:"400px",
                   top:"140px",
                   fontSize:"20px"}}>
           {record1.type}-{record1.measurement.totalArea}
       </p>
       <img  style={{position:"absolute",
                     width:"840px",
                     height:"470px",
                     left:"30px",
                     top:"190px",
                     border:"1px solid gray",
                     borderRadius:"25px"}}
            src={record1.image} 
            />
</div>);
    return (
        <>
            <Header second="Details" third="Plan-2BHK" fourth="Plan-3BHK" secondid="details" thirdid="plan2BHK" fourthid="plan3BHK"/>
           <h1 style={{color:"white"}}>
            some text for plays scroll in  down
            some text for plays scroll in  down
            some text for plays scroll in  down
            some text for plays scroll in  down
            some text for plays scroll in  down
            some text for plays scroll in  down
       

           </h1>
           <div style={{ position:" absolute",
    width: '600px',
    top: '105px',
    left: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '28px',
    color: 'black'}}>
                <p style={{width:"1000px"}}>Community name : {community.JustSmartCustomHomes[0].name} - {props.url1[0].name}</p>
                
            </div>
            <div  style={{ 
           
            height:"600px",
            display: "flex",
            flexDirection:"column",
            paddingLeft:"950px",
            paddingTop:"-10px",
            overflowY:"auto",
            overflowX:"hidden"

          
            }}>
            {props.url1[0].room.map((record1,i)=>
           
            <div >
               <p style={{fontFamily: 'Playfair Display',
                          fontSize: "20px",
                          width:"250px",
                          margin:"10px",
                          position:"relative",
                          left:"75px",
                          top:"15px"}}>
                  {record1.type}
               </p>
               <img style={{width: "290px",
                            height: "160px",
                            margin:"-10px",
                            border:"1px solid gray",
                            borderRadius:"10px",
                            cursor:"pointer",
                            position:"relative",
                            top:"20px"
                           }} 
                   src={record1.image} 
                   onClick={() => {setImage(arr2[i])}}
               />
            </div>)}
            <p>{image}</p>
</div>
            <div style={{position: "absolute",
                         background:" #D8F0D0",
                         border: "1px solid grey",
                         width: "310px",
                         height: "80px",
                         top: "710px",
                         left: "565px",
                         borderRadius:" 10px",
                         fontSize: "22px",
                         padding:" 10px"}}>
                {community.JustSmartCustomHomes[0].booking1}<br />
                <span style={{color:"#D8F0D0"}}>For Booking </span>{community.JustSmartCustomHomes[0].booking2}
            </div>
            <div className="houseplan">
                <h5 id="details">Details....</h5>
                <p> {props.url1[0].name} - Plan:</p>

            </div>
          
          <div>
          <h4 style={{ position: "absolute", top: "825px", left: "300px", fontSize:"18px", }} id="plan2BHK">2 BHK</h4>  
           <img src={props.url1[0].twobhk} style={{ position:"absolute",
                                            width: "500px",
                                            height: "670px",
                                            top: "890px",
                                            left:" 90px"}}/>
                                            
          </div>
          <div>
          <h4 style={{ position: "absolute", top: "825px", left: "900px", fontSize:"18px", }} id="plan3BHK">3 BHK</h4>  
           <img src={props.url1[0].threebhk} style={{ position:"absolute",
                                            width: "500px",
                                            height: "670px",
                                            top: "890px",
                                            left:" 700px"}}/>
                                            
          </div>
            <Footer />
        </>
    )
}