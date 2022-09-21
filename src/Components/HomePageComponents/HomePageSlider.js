import React, { useState } from "react";
import community from '../../Justsmarthome.json'
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
        window.open("Community-1", "_self");
    }
    function ClickEvent2() {
        window.open("Community-2", "_self");
    }
    function ClickEvent3() {
        window.open("Community-3", "_self");
    }
    function ClickEvent4() {
        window.open("Community-4", "_self");
    }
    function ClickEvent5() {
        window.open("Community-5", "_self");
    }
    
    
    const arr3=[ClickEvent1,ClickEvent2,ClickEvent3,ClickEvent4,ClickEvent5]
    console.log(arr3)

    return (
        <>        
            <div className="imgcontainer" id="home">
                
               <img style={{
                    position: "absolute", 
                    width: "870px", 
                    height: "460px", 
                    left: "20px", 
                    top: "130px", 
                    borderRadius: "20px",
                    cursor:"pointer"}}
                    src={sliderImg} alt={name} onClick={arr3[index]} />
                    
          
                
                <p className="maindes">Description:</p>
                <div className="descrip">{mainDescr}</div>    
                <div className="ongoing">on going</div>
                <div className='lake'>{name}</div>
                <div className="firstbooking">
                    {booking1}<br />
                    <span>For Booking</span> {booking2}
                </div>
                <button onClick={arr3[index]} className="morebutt">MoreDetails...</button>
            </div>
            <div className="buttoncontainer">
                <a href="#"><div onClick={Prev} className="prev" style={{color:"white"}}> <AiOutlineLeftCircle /> </div></a>
                <a href="#"><div onClick={Next} className="next" style={{color:"white"}}> <AiOutlineRightCircle /> </div></a>
            </div>
           
           
        </>
    )
}


















