import React from 'react';
import HouseIcon from './pictures/houseicon.jpg';

import community from "./justsmarthome.json";
export default function AboutusReview() {
    function ClickEvent1() {
        window.open("http://localhost:3000/community1details", "_self");
    }
    function ClickEvent2() {
        window.open("http://localhost:3000/community2details", "_self");
    }
    function ClickEvent3() {
        window.open("http://localhost:3000/community3details", "_self");
    }
    function ClickEvent4() {
        window.open("http://localhost:3000/community4details", "_self");
    }
    function ClickEvent5() {
        window.open("http://localhost:3000/community5details", "_self");
    }
    
    
    const arr3=[ClickEvent1,ClickEvent2,ClickEvent3,ClickEvent4,ClickEvent5]
    console.log(arr3)
    return (
     
            /* <div className="availablehouses">
                <p className="aaaaa">Readily Available</p>
                <img className="houseIcon" src={HouseIcon} alt="houseIcon" />
                <div className="home1" /><h1 style={{ backgroundColor: "gray", position: "absolute", top: "1090px", left: "50px", color: "white", fontSize: "20px" }}> Community - 5</h1><br />
                <div className="home2" /><h1 style={{ backgroundColor: "gray", position: "absolute", top: "865px", left: "50px", color: "white", fontSize: "20px" }}> Community - 4</h1><br />
                <div className="home3" onClick={ClickEvent1}/><h1 style={{ backgroundColor: "gray", position: "absolute", top: "210px", left: "50px", color: "white", fontSize: "20px" }}> Community - 1</h1><br />
                <div className="home4" /><h1 style={{ backgroundColor: "gray", position: "absolute", top: "420px", left: "50px", color: "white", fontSize: "20px" }}> Community - 2</h1><br />
                <div className="home5" /><h1 style={{ backgroundColor: "gray", position: "absolute", top: "650px", left: "50px", color: "white", fontSize: "20px" }}> Community - 3</h1>
            </div>

            <div className="aboutus">Aboutus<br />
                <div className="rect"><p>At JustSmart Custom Homes (JSCH), we believe that meticulous supervision is the only manner in which to build a truly custom home.<br/>Creating exceptionally high-quality and distinctive custom homes is our passion. Unwavering commitment to you, our customer, is paramount. Our experienced team will work closely with you to ensure your vision is realized-and that the homebuilding experience is an enjoyable one. We are confident that you, like many of our other customers, will marvel at the level of service you will receive-even after moving into your new dream home.</p></div>
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

            <div className="completedhouses">
                <p> Completed Projects</p>
                <img className="houseIcon" src={HouseIcon} alt="houseIcon" />
                <div className="home1" onClick={ClickEvent1}/><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "210px", left: "20px" }}>Community - 1</h1><br />
                <div className="home2" /><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "420px", left: "20px" }}>Community - 2</h1><br />
                <div className="home3" /><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "650px", left: "20px" }}>Community - 3</h1><br />
                <div className="home4" /><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "865px", left: "20px" }}>Community - 4</h1><br />
                <div className="home5" /><h1 style={{ backgroundColor: "gray", color: "white", position: "absolute", fontSize: "20px", top: "1090px", left: "20px" }}>Community - 5</h1>
            </div>
            */
            <>
            <div className="availablehouses">
                <p className="type">Readily Available</p>
                <img className="houseIcon" src={HouseIcon} alt="houseIcon" />
                </div>
                <div className="aboutus">Aboutus</div>
                <div className="reviews">Reviews<br/>
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
             <div className="completedhouses">
             <p> Completed Projects</p>
             <img className="houseIcon" src={HouseIcon} alt="houseIcon" />
             </div>
            {community.JustSmartCustomHomes.map((record, i) =>
                <div key={i} style={{padding:"50px",fontSize:"30px"}}>                    
                                       
                <img style={{position:"relative",cursor:"pointer",borderRadius:"10px", width: "350px",height: "200px",top:"700px",left:"10px",margin:"-60px"}} src={record.availableImg} onClick={arr3[i]}/>
                <h1 style={{width: "190px", backgroundColor: "gray", color: "white", position: "relative", fontSize: "20px",margin:"-80px",borderRadius:"5px",padding:"5px",top:"795px",left:"120px"}}>{record.name}</h1>
                <div className="rect"><p>{record.aboutus}</p></div> 
                 <img style={{position:"relative",cursor:"pointer",borderRadius:"10px", width: "350px",height: "200px",top:"640px",left:"780px",margin:"40px"}} src={record.completedImg} onClick={arr3[i]}/>
                 <h1 style={{width: "190px", backgroundColor: "gray", color: "white", position: "relative", fontSize: "20px",margin:"-80px",borderRadius:"5px",padding:"5px",top:"635px",left:"1000px"}}>{record.name}</h1>
                
                </div>
                
                )}
                
            </>
      
    )
}