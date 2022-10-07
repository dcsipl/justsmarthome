import React, { useState,useEffect } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";//npm i react-icons
import communityDetails from '../../Justsmarthome.json';
import "./HomePageSlider.css";


export default function HomePageImageSlider() {         
    
    const[sliderImgIndex,setSliderImgIndex]=useState(0)
    useEffect(()=>{
       const interval=setTimeout(()=>{
                  autoPlay()
        },4000)
        return()=>clearTimeout(interval)
    },[sliderImgIndex])
    function autoPlay(){
       sliderImgIndex===communityDetails.JustSmartCustomHomes.length-1?
              setSliderImgIndex(0):setSliderImgIndex(sliderImgIndex+1)
        }
           
    function Prev(){
        sliderImgIndex===0?
           setSliderImgIndex(communityDetails.JustSmartCustomHomes.length-1)
      :
           setSliderImgIndex(sliderImgIndex-1)
        
   }
   function Next(){
               sliderImgIndex===communityDetails.JustSmartCustomHomes.length-1?
                   setSliderImgIndex(0)
               :
                   setSliderImgIndex(sliderImgIndex+1)
               
   }
    function ClickEvent1() {
        window.open("/Community-1", "_self");
    }
    function ClickEvent2() {
        window.open("/Community-2", "_self");
    }
    function ClickEvent3() {
        window.open("/Community-3", "_self");
    }
    function ClickEvent4() {
        window.open("/Community-4", "_self");
    }
    function ClickEvent5() {
        window.open("/Community-5", "_self");
    }


    const array = [ClickEvent1, ClickEvent2, ClickEvent3, ClickEvent4, ClickEvent5]
    return(
    communityDetails.JustSmartCustomHomes.map((data,index)=>{
        return (
        <>    

             <div key={index} className={index===sliderImgIndex?"sliderimages":"sliderimagesnone"}>       
                     <img className="sliderimg" src={data.sliderImg}  alt={data.name} onClick={array[index]}/>
                     <div className="ongoing">on going</div>
                     <div className="arrowcontainer">
                        <div  onClick={Prev}> <AiOutlineLeftCircle size={"50px"} /> </div>
                        <div  onClick={Next}> <AiOutlineRightCircle size={"50px"} /> </div>
                    </div>
                     <button  className="morebutton" onClick={array[index]}>MoreDetails...</button>
                     <div className="communame">{data.name}</div>
                     <div className="descriptioncontent">{data.mainDescr}</div>
                     <div className="booking">For Booking:</div>
                    <div className="bookingnum">
                        {data.booking1}<br />
                        {data.booking2}
                    </div>
            </div>
        </>
    )}))
    }

















