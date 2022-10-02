import React from 'react';
import Header from '../CommonComponents/Header';
import '../CommonComponents/Header.css';
import CommunityDetails from './CommunityDetails';
import './CommunityDetails.css'
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';

export default function CommunityDetailsPage(props){
    return(
        <>
        <Header second="Features" third="Near by Places" fourth="Location" secondid="features" thirdid="nearbyplaces" fourthid="location" />
        <CommunityDetails url={props.url}/>
        <Footer/>
        </>
    )
}