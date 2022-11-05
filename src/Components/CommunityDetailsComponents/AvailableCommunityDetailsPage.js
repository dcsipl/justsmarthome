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
        <Header second="Near by Places" third="Features" fourth="Location" secondid="nearbyplaces" thirdid="features" fourthid="location" />
        <AvailableCommunityDetails availableurl={props.availableurl}/>
        <Footer/>
        </>
    )
}