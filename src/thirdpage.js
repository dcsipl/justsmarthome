import React from 'react';

export default  function ThirdPage(){
    // function ClickEvent(){
    //     window.open("https://www.google.com","_self");
    // }
    return(
<>
<div className="community">
   <p>Community name : Canyon Lakes - Houses Name</p>
   <h5>Kitchen - Size - 10 ft x 10 ft</h5> 
</div>

<div className="kitchen">
    {/* <button onClick={ClickEvent}>clickme</button> */}
    </div>

<div className="hall-1"></div>
<div className="kitchen-1"></div>
<div className="bathroom-1"></div>

<div className="booking">
           For Booking Raj 405-361-6198<br/>
        <span>For Booking</span> Jay 650-888-0015
        </div>
       
        <div className="houseplan">
        <h5>Details....</h5>
        <p> Houses Name - Plan</p>
    
</div>
<div className="twobhk-1"><h4 style={{position:"absolute",top:"-80px",left:"200px"}}>2 BHK</h4></div>
<div className="threebhk-1"><h4 style={{position:"absolute",top:"-80px",left:"200px"}}>3 BHK</h4></div>
</>
    )
}