import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import './header.css';
import HomePageSlider from "./homepageslider";
import "./homepageslider.css";
import AboutusReview from './aboutusreview.js';
import './aboutusreview.css';
import Footer from './footer.js';
import './footer.css';


export default function HomePage() {
    return (
        <>
            <Header second="Reviews" third="Readily Available" fourth="Completed Proj" scroll="Down"/>
            <HomePageSlider />
            <AboutusReview />
            <Footer />
        </>
    )
}