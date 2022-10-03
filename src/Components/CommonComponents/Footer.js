import React from 'react';
import jsondata from '../../Justsmarthome.json'

export default function Footer() {
  return (
    <>
      <div className="footerTopBar"></div>
      <div className="footerMainBar">
        {jsondata.JustSmartCustomHomes[0].address.map((add) =>
          <div className="address">Address:
            <p>{add.line1}<br /> {add.line2}<br /> {add.line3}</p>
          </div>)}

        <a href="/" className="footerHome">Home</a>
        <a href="/gallery" className="footerGallery">Gallery</a>
        <a href="/" className="footerAvailable">Readily Available</a>
        <a href="/" className="footerCompleted">Completed Proj</a>

        <div className="insideBox">
          <p>OurBusinessAssociates:</p><br />
          {jsondata.JustSmartCustomHomes[0].businessAsso.map((associate) =>
            <ul>
              <li><a href={associate.link}>{associate.name}</a></li>
            </ul>)}
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