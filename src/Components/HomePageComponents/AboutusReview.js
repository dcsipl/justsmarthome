import React from 'react';
import HouseIcon from '../../Pictures/CommonImages/houseicon.jpg';
import './AboutusReview.css';
import json from "../../Justsmarthome.json";

export default function AboutusReview() {
    function ClickEvent1() {
        window.open("/Community-1", "_self");
    }
    function ClickEvent2() {
        window.open("/Community-2", "_self");
    }
    function ClickEvent3() {
        window.open("/Community-3", "_self");
    }
    function ClickEvent4() {
        window.open("/Community-4", "_self");
    }
    function ClickEvent5() {
        window.open("/Community-5", "_self");
    }


    const array = [ClickEvent1, ClickEvent2, ClickEvent3, ClickEvent4, ClickEvent5]
    console.log(array)
    return (
        <>
            <div className="secondhalfcontainer">
                <div className="availablehouses">
                    <img className="availablehouseicon" src={HouseIcon} alt="houseIcon" />
                    <p className="availablehousestitle" id="readilyavailable">
                        Readily Available
                    </p>
                    <div className="availableimgcontainer">
                        {json.JustSmartCustomHomes.map((community, i) =>
                            <div key={i} className="availableimages">
                                <img className="availableimg" src={community.availableImg} onClick={array[i]} />
                                <h1 className="availablename">{community.name}</h1>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="aboutustitle">
                        Aboutus
                    </div>
                    {json.JustSmartCustomHomes.map((community, i) =>
                        <div key={i}>
                            <div className="aboutuscontentbox">
                                <p className="aboutuscontent">
                                    {community.aboutuscontentone}<br />{community.aboutuscontenttwo}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="reviewtitle" id="reviews">
                        Reviews
                    </div>

                    <div className="reviewcontentbox1">
                        "Exceptional and on-time"<br />
                        <span>-Arun</span>
                        <img className="reviewhouseicon1" src={HouseIcon} alt="houseIcon1" />
                        <p className="reviewcontent1">More details about the reviews</p>
                    </div>
                    <div className="reviewcontentbox2">
                        "Exceptional and on-time"<br />
                        <span>-Arun</span>
                        <img className="reviewhouseicon2" src={HouseIcon} alt="houseIcon1" />
                        <p className="reviewcontent2">More details about the reviews</p>
                    </div>
                </div>
                <div className="completedhouses">
                    <img className="completedhouseicon" src={HouseIcon} alt="houseIcon" />
                    <p className="completedhousestitle" id="completedproj">
                        Completed Projects
                    </p>
                    <div className="completedimgcontainer">
                        {json.JustSmartCustomHomes.map((community, i) =>
                            <div key={i} className="completedimages">
                                <img className="completedimg" src={community.completedImg} onClick={array[i]} />
                                <h1 className="completedname">{community.name}</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}