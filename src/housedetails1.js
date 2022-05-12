import React from 'react';
import Header from './header.js';
import './header.css';
import Footer from './footer.js';
import './footer.css';
import { useState ,useRef} from 'react';
import Logo1 from './pictures/Logo.jpeg';
import Validation from './validation.js';
import Hall from "./housedetailsimages/hall 1.webp";
import Kitchen from "./housedetailsimages/kitchen 1.jpg";
import Bathroom from "./housedetailsimages/bathroom 1.webp";

export default function HouseDetails1() {
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
                    <a href="#" className="review" >{props.second}</a>
                    <a href="#" className="available" onClick={Down}>{props.third}</a>
                    <a href="#" className="completed" onClick={Down}>{props.fourth}</a>
                    <form className="form">
                    <label className='subscribe'>Subscribe for NewsLetter</label>
                    <label className='email'>Email</label>
                    <input type="text"  className="box" name="gmail" placeholder="enter the email"value={values.gmail} onChange={HandleChange}/>
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
    const [image, setImage] = useState(<>
    <img src={Hall} alt="" className="usestate1" />
    <h5>Hall - Size - 10 ft x 10 ft</h5>
    </>)
    return (
        <>
            <h1>{image}</h1>i
            <Header second="Details" third="Plan-2BHK" fourth="Plan-3BHK" />
            <div className="community">
                <p>Community name : Canyon Lakes - Houses Name 1</p>
                
            </div>

            <div className="kitchen">

            </div>

            <a href="#"><div className="hall1" onClick={() => setImage(<><img src={Hall} alt="" className="setimage1" />
            <h5>Hall - Size - 10 ft x 10 ft</h5></>)}></div></a>
            <a href="#"> <div className="kitchen1" onClick={() => setImage(<><img src={Kitchen} alt="" className="setimage1" />
            <h5>Kitchen - Size - 10 ft x 10 ft</h5></>)}></div></a>
            <a href="#"> <div className="bathroom1" onClick={() => setImage(<><img src={Bathroom} alt="" className="setimage1" />
            <h5>Bathroom - Size - 10 ft x 10 ft</h5></>)}></div></a>

            <div className="booking">
                For Booking Raj 405-361-6198<br />
                <span>For Booking</span> Jay 650-888-0015
            </div>

            <div className="houseplan">
                <h5>Details....</h5>
                <p> Houses Name 1 - Plan</p>

            </div>
            <div className="twobhk-1" ref={ServicesRef}><h4 style={{ position: "absolute", top: "-50px", left: "200px" }}>2 BHK</h4></div>
            <div className="threebhk-1"><h4 style={{ position: "absolute", top: "-60px", left: "200px" }}>3 BHK</h4></div>
            <Footer />
        </>
    )
}