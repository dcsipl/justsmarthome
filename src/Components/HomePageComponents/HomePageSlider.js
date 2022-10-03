import React, { useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";//npm i react-icons
import communityDetails from '../../Justsmarthome.json'

export default function HomePageImageSlider() {
    const [index, setIndex] = useState(0);
    const { name, sliderImg, booking1, booking2, mainDescr } = communityDetails.JustSmartCustomHomes[index];
    function CheckNumber(number) {
        if (number > communityDetails.JustSmartCustomHomes.lenth - 1) {
            return 0;
        }
        if (number < 0) {
            return communityDetails.JustSmartCustomHomes.length - 1
        }
        return number;
    }
    function Prev() {
        setIndex((index) => {
            let newIndex = index - 1;
            return CheckNumber(newIndex)
        })
    }
    function Next() {
        setIndex((index) => {
            let newIndex = index + 1;
            return CheckNumber(newIndex)
        })
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
    return (
        <>
            <div className="slider">
                <img src={sliderImg} alt={name} onClick={array[index]} />
                <div className="ongoing">on going</div>
                <button onClick={array[index]} className="morebutton">MoreDetails...</button>
                <div className="arrowContainer">
                    <div onClick={Prev} className="prev"> <AiOutlineLeftCircle size={"50px"} /> </div>
                    <div onClick={Next} className="next"> <AiOutlineRightCircle size={"50px"} /> </div>
                </div>
                <div className='communityName'>{name}</div>
                <div className="descriptionContent">{mainDescr}</div>
                <div className="booking">For Booking:</div>
                    <div className="bookingnum">
                        {booking1}<br />
                        {booking2}
                    </div>
            </div>
        </>
    )
}


















