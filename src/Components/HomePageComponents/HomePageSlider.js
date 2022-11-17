import React, { useState,useEffect } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";//npm i react-icons
import communityDetails from '../../JustsmartCustomHomes.json';
import "./HomePageSlider.css";


export default function HomePageImageSlider() {         
    
    const[sliderImgIndex,setSliderImgIndex]=useState(0)
    useEffect(()=>{
       const interval=setTimeout(()=>{
                  autoPlay()
        },5000)
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

   const [slideIndex, setSlideIndex] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            slideIndex === communityDetails.slides.length - 1 ?
                setSlideIndex(0) 
                : 
                setSlideIndex(slideIndex + 1)
        }, 4000)
    })

    const ongoingurl1= communityDetails.JustSmartCustomHomes.map((data,i)=>data.status1);
    console.log(ongoingurl1)
    return(
    communityDetails.JustSmartCustomHomes.map((data,index)=>{
        return (
        <>    

             <div key={index} className={index===sliderImgIndex?"sliderimages":"sliderimagesnone"}>       
                     <img className="sliderimg" src={data.sliderImg}  alt={data.name} onClick={()=>{window.open(ongoingurl1[index],"_self")}}/>
                     <div className="ongoing">on going</div>
                     <div className="arrowcontainer">
                        <div  onClick={Prev}> <AiOutlineLeftCircle size={"50px"} /> </div>
                        <div  onClick={Next}> <AiOutlineRightCircle size={"50px"} /> </div>
                    </div>
                     <button  className="morebutton" onClick={()=>{window.open(ongoingurl1[index],"_self")}}>MoreDetails...</button>
                     <div className="communame">{data.name}</div>
                     <div className="descriptioncontent">{data.mainDescr}</div>
                     {/* <div className="booking">For Booking:</div>
                    <div className="bookingnum">
                        {data.booking1}<br />
                        {data.booking2}
                    </div> */}
                {communityDetails.slides.map((data, index) => {
                    return (<>
                        <div key={index} className={index === slideIndex ? "myslides fade" : "myslidesnone"}>
                            <img className="slideimg" src={data.image} alt="....." />
                        </div>

                        <div key={index} className={index === slideIndex ? "dots activeee" : "dots"}>

                        </div>
                    </>)
                })}
            </div>
        </>
    )}))
    }

















