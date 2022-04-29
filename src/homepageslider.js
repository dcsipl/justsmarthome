import React, { useState } from "react";
import houses from './homepagehouses.js';
import "./homepageslider.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
export default function HomePageImageSliser() {
    const [index, setIndex] = useState(0);
    const { nam, image, text } = houses[index];
    var number;
    const checkNumber = (number) => {
        if (number > houses.lenth - 1) {
            return 0;
        }
        if (number < 0) {
            return houses.length - 1
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
        window.open("http://localhost:3000/b", "_self");
    }
    return (
        <>
            <div classname="imgcontainer">
                <img style={{
                    position: "absolute", width: "870px", height: "460px", left: "20px", top: "130px", borderRadius: "20px",
                    border: "solid grey"
                }} src={image} alt={nam} />
                <div className="ongoing">on going</div>

                <button onClick={ClickEvent1} className="morebutt">More Details...</button>
            </div>



            <div className="buttoncontainer">
                <div onClick={Prev} className="prev"> <AiOutlineLeftCircle /> </div>
                <div onClick={Next} className="next"> <AiOutlineRightCircle /> </div>
            </div>
        </>
    )
}