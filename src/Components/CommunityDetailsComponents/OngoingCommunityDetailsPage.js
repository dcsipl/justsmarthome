import React from 'react';
import Header from '../CommonComponents/Header';
import '../CommonComponents/Header.css';
import OngoingCommunityDetails from './OngoingCommunityDetails';
import './CommunityDetails.css'
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';

export default function OngoingCommunityDetailsPage(props){
    return(
        <>
        <Header  second="Features" third="Location" fourth="Contact-us" fifth="Gallery" secondid="features" thirdid="location" fourthid="contactus" />
        <OngoingCommunityDetails ongoingurl={props.ongoingurl}/>
        <Footer/>
        </>
    )
}