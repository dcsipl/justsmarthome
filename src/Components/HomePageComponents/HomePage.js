import React from 'react';
import Header from '../CommonComponents/Header.js';
import '../CommonComponents/Header.css';
import HomePageSlider from "./HomePageSlider";
import "./HomePageSlider.css";
import AboutusReview from './AboutusReview';
import './AboutusReview.css'
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';


export default function HomePage() {
    return (
        <>
            <Header second="Available" third="Completed Proj" fourth="Contact-us" fifth="Gallery" sixth="OurBusinessAssociates" secondid="readilyavailable" thirdid="completedproj" fourthid="contactus" />
            {/* <HomePageSlider /> */}
            <AboutusReview />
            <Footer />
        </>
    )
}