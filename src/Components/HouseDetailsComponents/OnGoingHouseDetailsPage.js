import React from 'react';
import Header from '../CommonComponents/Header';
import '../CommonComponents/Header.css';
import OnGoingHouseDetails from './OnGoingHouseDetails.js';
import './HouseDetails.css'
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';


export default function OnGoingHouseDetailsPage(props) {
  return (
    <>
    <Header  second="Plan" third="Booking" fourth="Contact-us" fifth="Gallery" secondid="plan" thirdid="booking" fourthid="contactus"/>
    <OnGoingHouseDetails cname={props.cname} ongoinghouseurls={props.ongoinghouseurls}/>
    <Footer/>
    </>
    )
}
