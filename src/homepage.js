import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import './header.css';
import HomePageSlider from "./homepageslider";
import "./homepageslider.css";
import SecondHalf from './secondhalf.js';
import './secondhalf.css';
import Footer from './footer.js';
import './footer.css';


export default function HomePage() {
    return (
        <>
            <Header second="Reviews" third="Readily Available" fourth="Completed Proj" scroll="Down"/>
            <HomePageSlider />
            <SecondHalf />
            <Footer />
        </>
    )
}