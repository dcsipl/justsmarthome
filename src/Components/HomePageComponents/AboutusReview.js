import React from 'react';
import HouseIcon from '../../Pictures/CommonImages/houseicon.jpg';
import './AboutusReview.css';
import json from "../../JustsmartCustomHomes.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
                         Available Projects
                    </p>
                    
                    <div className="availableimgcontainer">
                        {json.JustSmartCustomHomes.map((community, i) =>
                            <Card className='availableimages'>
                           <CardMedia
                           className='availableimg'
                             component="img"
                             image={community.availableImg}
                             onClick={()=>{window.open(availableurl1[i],"_self")}} 
                           />
                          
                             <CardContent>
                             <Typography gutterBottom variant="h6" color="gray" fontWeight="800"fontFamily="georgia" display="flex" justifyContent="center" component="div">
                              {community.name}
                             </Typography>
                           </CardContent>
                         </Card>
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
                            <Card className='completedimages'>
                           <CardMedia
                           className='completedimg'
                             component="img"
                             image={community.completedImg}
                             onClick={()=>{window.open(completedurl1[i],"_self")}} 
                           />
                          
                             <CardContent>
                             <Typography gutterBottom variant="h6" color="gray" fontWeight="800"fontFamily="georgia" display="flex" justifyContent="center" component="div">
                              {community.name}
                             </Typography>
                           </CardContent>
                         </Card>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}