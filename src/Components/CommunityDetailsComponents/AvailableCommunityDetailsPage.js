import React from 'react';
import Header from '../CommonComponents/Header';
import '../CommonComponents/Header.css';
import AvailableCommunityDetails from './AvailableCommunityDetails';
import './CommunityDetails.css'
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';

export default function AvailableCommunityDetailsPage(props){
    return(
        <>
        <Header  second="Features" third="Location" fourth="Contact-us" fifth="Gallery" secondid="features" thirdid="location" fourthid="contactus" />
        <AvailableCommunityDetails availableurl={props.availableurl}/>
        <Footer/>
        </>
    )
}