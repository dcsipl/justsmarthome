import React from 'react';
import {FaAddressCard} from "react-icons/fa"
import jsondata from '../../JustsmartCustomHomes.json'

export default function Footer() {
  return (
    <>
      <div className="footerTopBar"></div>
      <div className="footerMainBar">

        {jsondata.address.map((add,i) =>
          <div className="address" key={i}><FaAddressCard size={40}/>        
            <p>{add.line1}<br /> {add.line2}<br /> {add.line3}</p>
          </div>
        )}

          <div className="insideBox">
            <h1>Smart Step, Every Step</h1>
          </div>
          
        {jsondata.contactus.map((contact,i) =>
          <div key={i}>
            <div className="contact" id="contactus">
              Contact Us:
              <p>Email:<br />{contact.email1} <br />{contact.email2}</p>
            </div>
            <div className="phone">
              Phone:
              <p>{contact.phone1}<br />{contact.phone2}</p>
            </div>
          </div>
        )}

      </div>
      <div className="footerBottomBar">{jsondata.copyRight}</div>
    </>
  )
}