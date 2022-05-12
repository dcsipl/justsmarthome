import React from 'react';
export default function Footer(props) {
    return (
        <><div className="footerTopBar"></div>
            <div className="footerRectangle">
                <div className="address">Address:
                    <p>
                        JustSmart Custom Homes,<br /> Edmond,<br /> OK.
                    </p>
                </div>
                <a href="http://localhost:3000" className="footerHome">Home</a>
                <a href="#" className="footerReview">Review</a>
                <a href="#" className="footerAvailable">ReadilyAvailable</a>
                <a href="#" className="footerCompleted">CompletedProj</a>
                <div className="smallRect">Our Business Associates:
                    <p>Filmore Designers Floor Gallery Lifestyle Lightings Richburgh Stones Sherwin WIlliams Trinity Bricks</p></div>
                <div className="contact">
                    Contact Us:
                    <p>Email: <br />raju@justsmartcustomhomes.com <br />Jay@Justsmartcustomhomes.com</p>
                </div>
                <div className="phone">
                    Phone:
                    <p>405-361-6198<br />650-888-0015</p></div>
            </div>
            <div className="footerBottomBar">
                Copyright © 2022 JustSmartCustom Homes. All Rights Reserved.
            </div>
        </>
    )
}