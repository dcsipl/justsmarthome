import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import FirstHalf from './firsthalf.js';
import SecondHalf from './secondhalf.js';
import SecondPage from './secondpage.js';
import Footer from './footer.js';
import './header.css';
import './firsthalf.css';
import './secondhalf.css';
import './footer.css'

export default function Main(){
    return(
    <>
       <Header/>
       <FirstHalf/>
       <SecondHalf/>
       <Footer/>
    </>
    )
}



ReactDom.render(<Main/>,document.getElementById('root'));
