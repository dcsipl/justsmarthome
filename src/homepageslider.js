import React, { useState } from "react";
import community from './justsmarthome.json'

import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
export default function HomePageImageSlider() {
    const [index, setIndex] = useState(0);
    const { name, sliderImg,location, locname,booking1,booking2,mainDescr} = community.JustSmartCustomHomes[index];
    var number;
    const checkNumber = (number) => {
        if (number > community.JustSmartCustomHomes.lenth - 1) {
            return 0;
        }
        if (number < 0) {
            return community.JustSmartCustomHomes.length - 1
        }
        return number;
    }
    function Prev() {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }
    function Next() {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }
    function ClickEvent1() {
        window.open("http://localhost:3000/communitydetails", "_self");
    }
    return (
        <>
        
            <div className="imgcontainer">
                <a href="#"><img style={{
                    position: "absolute", 
                    width: "870px", 
                    height: "460px", 
                    left: "20px", 
                    top: "130px", 
                    borderRadius: "20px"}}
                    src={sliderImg} alt={name} onClick={ClickEvent1} />
                </a>
                <p className="loc">Location:</p>
                <img className="location"src={location}/>    
                <div className="ongoing">on going</div>
                <div className='lake'>{locname}</div>
                <div className="firstbooking">
                    {booking1}<br />
                    <span>For Booking</span> {booking2}
                </div>
                <button onClick={ClickEvent1} className="morebutt">MoreDetails...</button>
            </div>
            <div className="buttoncontainer">
                <a href="#"><div onClick={Prev} className="prev" style={{color:"white"}}> <AiOutlineLeftCircle /> </div></a>
                <a href="#"><div onClick={Next} className="next" style={{color:"white"}}> <AiOutlineRightCircle /> </div></a>
            </div>
            <div className="descrp">{mainDescr}</div>
           
        </>
    )
}


















