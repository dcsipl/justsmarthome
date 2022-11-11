import React from 'react';
import Header from '../CommonComponents/Header';
import '../CommonComponents/Header.css';
import HouseDetails from './HouseDetails.js';
import './HouseDetails.css'
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';


export default function HouseDetailsPage(props) {
  return (
    <>
    <Header  second="Plan" third="Booking" fourth="Contact-us" fifth="Gallery" secondid="plan" thirdid="booking" fourthid="contactus"/>
    <HouseDetails url1={props.url1}/>
    <Footer/>
    </>
    )
}
