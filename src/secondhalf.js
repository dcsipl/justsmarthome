import React from 'react';
import HouseIcon from './pictures/houseicon.jpg';

export default function SecondHalf() {
    return (
        <>
            <div className="availablehouses">
                <p className="aaaaa">Readily Available</p>
                <img className="houseIcon" src={HouseIcon} alt="houseIcon" />
                <div className="home1" /><h1 style={{ backgroundColor: "gray", position: "absolute", top: "1085px", left: "50px", color: "white", fontSize: "20px" }}> Community - 5</h1>
                <div className="home2" /><h1 style={{ backgroundColor: "gray", position: "absolute", top: "865px", left: "50px", color: "white", fontSize: "20px" }}> Community - 4</h1><br />
                <div className="home3" /><h1 style={{ backgroundColor: "gray", position: "absolute", top: "210px", left: "50px", color: "white", fontSize: "20px" }}> Community - 1</h1><br />
                <div className="home4" /><h1 style={{ backgroundColor: "gray", position: "absolute", top: "420px", left: "50px", color: "white", fontSize: "20px" }}> Community - 2</h1><br />
                <div className="home5" /><h1 style={{ backgroundColor: "gray", position: "absolute", top: "650px", left: "50px", color: "white", fontSize: "20px" }}> Community - 3</h1>
            </div>

            <div className="aboutus">Aboutus<br />
                <div className="rect"><p>At JustSmart Custom Homes (JSCH), we believe that meticulous supervision is the only manner in which to build a truly custom home.<br />Creating exceptionally high-quality and distinctive custom homes is our passion. Unwavering commitment to you, our customer, is paramount. Our experienced team will work closely with you to ensure your vision is realized-and that the homebuilding experience is an enjoyable one. We are confident that you, like many of our other customers, will marvel at the level of service you will receive-even after moving into your new dream home.</p></div>
            </div>
            <div className="reviews">Reviews<br />

                <div className="revrect1">"Exceptional and on-time"<br />
                    <span>......................</span>-Arun
                    <img className="houseIcon" src={HouseIcon} alt="houseIcon1" />
                    <p>More details about the reviews</p>
                </div>
                <div className="revrect2">"Exceptional and on-time"<br />
                    <span>......................</span>-Arun
                    <img className="houseIcon" src={HouseIcon} alt="houseIcon2" />
                    <p>More details about the reviews</p></div>
            </div>

            <div className="availablhouses">
                <p> Completed Projects</p>
                <img className="houseIcon" src={HouseIcon} alt="houseIcon" />
                <div className="home1" /><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "210px", left: "20px" }}>Community - 1</h1><br />
                <div className="home2" /><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "420px", left: "20px" }}>Community - 2</h1><br />
                <div className="home3" /><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "650px", left: "20px" }}>Community - 3</h1><br />
                <div className="home4" /><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "865px", left: "20px" }}>Community - 4</h1><br />
                <div className="home5" /><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "1090px", left: "20px" }}>Community - 5</h1>
            </div>

        </>
    )
}