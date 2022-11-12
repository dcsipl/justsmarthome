import React from 'react';
import Header from '../CommonComponents/Header';
import '../CommonComponents/Header.css';
import AvailableHouseDetails from './AvailableHouseDetails.js';
import './HouseDetails.css'
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';


export default function AvailableHouseDetailsPage(props) {
  return (
    <>
    <Header  second="Plan" third="Booking" fourth="Contact-us" fifth="Gallery" secondid="plan" thirdid="booking" fourthid="contactus"/>
    <AvailableHouseDetails availablehouseurls={props.availablehouseurls}/>
    <Footer/>
    </>
    )
}
