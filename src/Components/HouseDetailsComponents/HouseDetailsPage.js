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
    <Header second="Details" third="Plan-2BHK" fourth="Plan-3BHK" secondid="details" thirdid="plan2BHK" fourthid="plan3BHK"/>
    <HouseDetails url1={props.url1}/>
    <Footer/>
    </>
    )
}
