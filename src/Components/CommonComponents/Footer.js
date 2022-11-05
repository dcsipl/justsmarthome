import React from 'react';
import {FaAddressCard} from "react-icons/fa"
import {TiLocation} from "react-icons/ti"
import jsondata from '../../JustsmartCustomHomes.json'

export default function Footer() {
  return (
    <>
      <div className="footerTopBar"></div>
      <div className="footerMainBar">
        {jsondata.JustSmartCustomHomes[0].address.map((add) =>
          <div className="address"><FaAddressCard size={40}/>
          {/* <TiLocation/> */}
            <p>{add.line1}<br /> {add.line2}<br /> {add.line3}</p>
          </div>)}

        <a href="/" className="footerHome">Home</a>
        <a href="/gallery" className="footerGallery">Gallery</a>
        <a href="/" className="footerAvailable">Readily Available</a>
        <a href="/" className="footerCompleted">Completed Proj</a>

        <div className="insideBox">
          <h1>Smart Step, Every Step.</h1>
        </div>
        {jsondata.JustSmartCustomHomes[0].contactus.map((contact) =>
          <div>
            <div className="contact" id="contactus">
              Contact Us:
              <p>Email: <br />{contact.email1} <br />{contact.email2}</p>
            </div>
            <div className="phone">
              Phone:
              <p>{contact.phone1}<br />{contact.phone2}</p>
            </div>
          </div>)}
      </div>
      <div className="footerBottomBar">
        {jsondata.JustSmartCustomHomes[0].copyRight}
      </div>
    </>
  )
}