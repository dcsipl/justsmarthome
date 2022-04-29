import React from 'react';
import HomePageSlider from "./homepageslider"
import Rightrrow from './pictures/rightarrow.jpg';
export default function FirstHalf() {
    function ClickEvent1() {
        window.open("http://localhost:3000/b", "_self");
    }
    return (
        <>
            <HomePageSlider />
            <div className="mapp">
                <p>Location:</p>
                <div className="firstmap"></div>
                <div className='lake'>Canyon Lakes - Ohlahoma</div>
                <div className="firstbooking">
                    For Booking Raj 405-361-6198<br />
                    <span>For Booking</span> Jay 650-888-0015

                </div>
            </div>
        </>

    )
}


