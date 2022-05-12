import React from 'react';
import Header from './header.js';
import './header.css';
import Footer from './footer.js';
import './footer.css';
import { useState } from 'react';
import Hall2 from "./housedetailsimages/hall 2.jpg";
import Kitchen2 from "./housedetailsimages/kitchen 2.jpg";
import Bathroom2 from "./housedetailsimages/bathroom 2.webp";

export default function HouseDetails7() {
    const [image, setImage] = useState(<><img src={Hall2} alt="" className="usestate1" />
    <h5>Hall - Size - 10 ft x 10 ft</h5></>)
    return (
        <>
            <h1>{image}</h1>
            <Header second="Details" third="Plan-2BHK" fourth="Plan-3BHK"/>
            <div className="community">
                <p>Community name : Canyon Lakes - Houses Name 7</p>
         
            </div>

            <div className="kitchen">

            </div>

            <a href="#"> <div className="hall2" onClick={() => setImage(<><img src={Hall2} alt="" className="setimage1" />
            <h5>Hall - Size - 10 ft x 10 ft</h5></>)}></div></a>
            <a href="#"><div className="kitchen2" onClick={() => setImage(<><img src={Kitchen2} alt="" className="setimage1" />
            <h5>Kitchen - Size - 10 ft x 10 ft</h5></>)}></div></a>
            <a href="#"><div className="bathroom2" onClick={() => setImage(<><img src={Bathroom2} alt="" className="setimage1" />
            <h5>Bathroom - Size - 10 ft x 10 ft</h5></>)}></div></a>
            <div className="booking">
                For Booking Raj 405-361-6198<br />
                <span>For Booking</span> Jay 650-888-0015
            </div>

            <div className="houseplan">
                <h5>Details....</h5>
                <p> Houses Name 7- Plan</p>

            </div>
            <div className="twobhk-2"><h4 style={{ position: "absolute", top: "-50px", left: "200px" }}>2 BHK</h4></div>
            <div className="threebhk-2"><h4 style={{ position: "absolute", top: "-60px", left: "200px" }}>3 BHK</h4></div>
            <Footer />
        </>
    )
}