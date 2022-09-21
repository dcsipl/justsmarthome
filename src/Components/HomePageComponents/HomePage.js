import React from 'react';
import Header from '../CommonComponents/Header.js';
import '../CommonComponents/Header.css';
import HomePageSlider from "./HomePageSlider";
import "./HomePageSlider.css";
import AboutusReview from './AboutusReview';
//import './AboutusReview.css'
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';


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