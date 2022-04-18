import React from 'react';
import Logo1 from './pictures/Logo.jpeg';





export default function Header(){
    return(
    <>
        <div className="rectangle">
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>
            <img src={Logo1} alt="s-logo"/>
            <p>Just Smart Custom Homes</p>
            <a href="http://localhost:3000" className="home">Home</a>
            <a href="#" className="review">Reviews</a>
            <a href="#" className="available">Readily Available</a>
            <a href="#" className="completed">Completed Proj</a>
            <label className='subscribe'>Subscribe for NewsLetter</label>
            <label className='email'>Email</label>
            <div className="box"></div>
            <button className="butt">ok</button>
          
            
        </div>
        </>
    )
}

