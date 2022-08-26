import React from 'react';
import Header from './header.js';
import './header.css';
import Footer from './footer.js';
import './footer.css';
import { useState } from 'react';
import community from './justsmarthome.json';


export default function HouseDetails2() {
   
    const [image, setImage] = useState('')
    
   const house=community.JustSmartCustomHomes[0].house[1];
    console.log(house);
    const arr2=house.room.map((record1,i)=>
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
            <Header second="Details" third="Plan-2BHK" fourth="Plan-3BHK"/>
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
    top: '75px',
    left: '20px',
    fontFamily: 'Qwigley',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '40px',
    color: 'black'}}>
                <p>Community name : {community.JustSmartCustomHomes[0].name} - {house.name}</p>
                
            </div>
            <div style={{ 
            width:"300px",
            height:"540px",
            display: "flex",
            flexDirection:"column",
            paddingLeft:"950px",
            paddingTop:"-10px",
            overflowY:"auto",
            overflowX:"hidden"

          
            }}>
            {house.room.map((record1,i)=>
           
            <div>
               <p style={{fontFamily: 'Playfair Display',
                          fontSize: "20px",
                          width:"250px",
                          margin:"10px",
                          position:"relative",
                          left:"70px",
                          top:"15px"}}>
                  {record1.type}
               </p>
               <img style={{width: "290px",
                            height: "160px",
                            margin:"-20px",
                            border:"1px solid gray",
                            borderRadius:"10px",
                            cursor:"pointer",
                            
                           }} 
                   src={record1.image} 
                   onClick={() => {setImage(arr2[i])}}
               />
            </div>)}
            <p>{image}</p>
</div>
            <div style={{position: "absolute",
                         background:" #D8F0D0",
                         border: "solid grey",
                         width: "285px",
                         height: "80px",
                         top: "710px",
                         left: "595px",
                         borderRadius:" 10px",
                         fontFamily: 'qwigley',
                         fontSize: "30px",
                         paddingLeft:" 20px"}}>
                {community.JustSmartCustomHomes[0].booking1}<br />
                <span style={{color:"#D8F0D0"}}>For Booking</span> {community.JustSmartCustomHomes[0].booking2}
            </div>
            <div className="houseplan">
                <h5>Details....</h5>
                <p> {house.name}- Plan</p>

            </div>
          
          <div>
          <h4 style={{ position: "absolute", top: "825px", left: "300px", fontSize:"18px", }}>2 BHK</h4>  
           <img src={house.twobhk} style={{ position:"absolute",
                                            width: "500px",
                                            height: "670px",
                                            top: "890px",
                                            left:" 90px"}}/>
                                            
          </div>
          <div>
          <h4 style={{ position: "absolute", top: "825px", left: "900px", fontSize:"18px", }}>3 BHK</h4>  
           <img src={house.threebhk} style={{ position:"absolute",
                                            width: "500px",
                                            height: "670px",
                                            top: "890px",
                                            left:" 700px"}}/>
                                            
          </div>
            <Footer />
        </>
    )
}