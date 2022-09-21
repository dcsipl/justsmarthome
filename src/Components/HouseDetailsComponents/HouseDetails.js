import React from 'react';
import '../CommonComponents/Header.css';
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';
import { useState,useRef } from 'react';
import Logo1 from '../../Pictures/CommonImages/Logo.jpeg';
import Validation from '../CommonComponents/Validation.js';
import community from '../../Justsmarthome.json';


export default function HouseDetails(props) {
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
                    <a href="#" className="review" onClick={Down} >{props.second}</a>
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
   
    const [image, setImage] = useState('')
    
  
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
                <p style={{width:"1000px"}}>Community name : {community.JustSmartCustomHomes[0].name} - {props.url1[0].name}</p>
                
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
            {props.url1[0].room.map((record1,i)=>
           
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
                <p> {props.url1[0].name}- Plan</p>

            </div>
          
          <div ref={ServicesRef}>
          <h4 style={{ position: "absolute", top: "825px", left: "300px", fontSize:"18px", }}>2 BHK</h4>  
           <img src={props.url1[0].twobhk} style={{ position:"absolute",
                                            width: "500px",
                                            height: "670px",
                                            top: "890px",
                                            left:" 90px"}}/>
                                            
          </div>
          <div>
          <h4 style={{ position: "absolute", top: "825px", left: "900px", fontSize:"18px", }}>3 BHK</h4>  
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