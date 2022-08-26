import React from 'react';
import community from './justsmarthome.json'
export default function Footer(props) {
    return (
        <><div className="footerTopBar"></div>
            <div className="footerRectangle">
            {community.JustSmartCustomHomes[0].address.map((add)=>
            <div className="address">Address:
            <p>
               {add.line1}<br/> {add.line2}<br/> {add.line3}
            </p>
        </div>
            )}
                
                <a href="http://localhost:3000" className="footerHome">Home</a>
                <a href="http://localhost:3000" className="footerReview">Review</a>
                <a href="http://localhost:3000" className="footerAvailable">ReadilyAvailable</a>
                <a href="http://localhost:3000" className="footerCompleted">CompletedProj</a>
                
                <div className="smallRect">OurBusinessAssociates:
                {community.JustSmartCustomHomes[0].businessAsso.map((associate)=>
                <ul>
                    
                    <li><a href={associate.link}>{associate.name}</a></li>
                  
                </ul>)}

                </div>
                {community.JustSmartCustomHomes[0].contactus.map((contact)=>
                <div>
                <div className="contact">
                    Contact Us:
                    <p>Email: <br />{contact.email1} <br />{contact.email2}</p>
                </div>
                <div className="phone">
                    Phone:
                    <p>{contact.phone1}<br />{contact.phone2}</p></div>
                </div>)}
            </div>
            <div className="footerBottomBar">
               {community.JustSmartCustomHomes[0].copyRight}
            </div>
        </>
    )
}