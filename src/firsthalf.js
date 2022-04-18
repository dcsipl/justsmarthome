import React from 'react';
import Rightrrow from './pictures/rightarrow.jpg';
export default function FirstHalf(){
    function ClickEvent1(){
        window.open("http://localhost:3000/b","_self");
    }
return(
    <><div className="homepic">
        <img src={Rightrrow} style={{position:"absolute",width:"20px",left:"850px",top:"200px"}}/>
        <div className="ongoing">on going</div>
        <button onClick={ClickEvent1} className="more">More Details...</button>
        <p>Location:</p>
        <div className="firstmap"></div>
        <div className='lake'>Canyon Lakes - Ohlahoma</div>
        <div className="firstbooking">
           For Booking Raj 405-361-6198<br/>
        <span>For Booking</span> Jay 650-888-0015
        </div>
      
        </div>
        </>
    
)
}


