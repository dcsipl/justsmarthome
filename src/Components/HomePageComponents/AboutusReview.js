import React from 'react';
import HouseIcon from '../../Pictures/CommonImages/houseicon.jpg';
import './AboutusReview.css';
import json from "../../JustsmartCustomHomes.json";

export default function AboutusReview() {
    const availableurl1= json.JustSmartCustomHomes.map((data,i)=>data.status2);
    console.log(availableurl1)
    const completedurl1= json.JustSmartCustomHomes.map((data,i)=>data.status3);
    console.log(completedurl1)
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
                                <img className="availableimg" src={community.availableImg} onClick={()=>{window.open(availableurl1[i],"_self")}} />
                                <h1 className="availablename">{community.name}</h1>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="aboutustitle">
                        About-us
                    </div>

                    <div className="aboutuscontentbox">
                        {json.JustSmartCustomHomes[0].aboutus.map((data) => <p className="aboutuscontent">{data.content}</p>)}
                    </div>

                    {/* <div className="reviewtitle" id="reviews">
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
                    </div> */}
                </div>
                <div className="completedhouses">
                    <img className="completedhouseicon" src={HouseIcon} alt="houseIcon" />
                    <p className="completedhousestitle" id="completedproj">
                        Completed Projects
                    </p>
                    <div className="completedimgcontainer">
                        {json.JustSmartCustomHomes.map((community, i) =>
                            <div key={i} className="completedimages">
                                <img className="completedimg" src={community.completedImg} onClick={()=>{window.open(completedurl1[i],"_self")}} />
                                <h1 className="completedname">{community.name}</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}