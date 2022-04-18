import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import Header from './header.js';
// import FirstHalf from './firsthalf.js';
// import SecondHalf from './secondhalf.js';
//import SecondPage from './secondpage.js';
import ThirdPage from './thirdpage.js';
import Footer from './footer.js';
import './header.css';
// import './firsthalf.css';
// import './secondhalf.css';
//import './secondpage.css';
import './thirdpage.css';
import './footer.css';

export default function Main(){
    return(
    <>
       <Header/>
       {/* {/* <FirstHalf/>
       <SecondHalf/> */}
       {/* <SecondPage/>  */}
       <ThirdPage/>
       <Footer/>
    </>
    )
}



ReactDom.render(<Main/>,document.getElementById('root'));