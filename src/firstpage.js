import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import './header.css';
import FirstHalf from './firsthalf.js';
import './firsthalf.css';
import SecondHalf from './secondhalf.js';
import './secondhalf.css';
import Footer from './footer.js';
import './footer.css';


export default function FirstPage(){
    return(
        <>
        <Header/>
        <FirstHalf/>
        <SecondHalf/>
        <Footer/>
        </>
    )
}