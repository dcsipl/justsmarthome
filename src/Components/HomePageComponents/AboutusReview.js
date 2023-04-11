import React from 'react';
import HouseIcon from '../../Pictures/houseicon.jpg';
import './AboutusReview.css';
import json from "../../JustsmartCustomHomes.json";
import Card from '@mui/material/Card';
import Logo from "../../Pictures/Logo.jpeg"
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
                        {json.JustSmartCustomHomes.map((community, i) =>{
                        return(
                          community.availableImg &&   
                          <Card className='availableimages' key={i}>
                                <div className='cardheader'>
                                   <img src={Logo} className="cardlogo" alt="cardlogo"/>
                                     <p className='cardtitle'>{community.name}<br/>
                                     <span>Ocklahoma</span>
                                    </p>
                                </div>
      
                           <CardMedia
                             className='availableimg'
                             component="img"
                             image={community.availableImg}
                             onClick={()=>{window.open(availableurl1[i],"_self")}} 
                           />

                             <CardContent className='more'>
                             <Typography>
                              Click for more details...
                             </Typography>
                           </CardContent>
                         </Card>)}
                        )}
                    </div>
                </div>
                <div>
                    <div className="aboutustitle">
                        About-us
                    </div>

                    <div className="aboutuscontentbox">
                        {json.aboutus.map((data,i) => <p className="aboutuscontent" key={i}>{data.content}</p>)}
                    </div>
                </div>
                <div className="completedhouses">
                    <img className="completedhouseicon" src={HouseIcon} alt="houseIcon" />
                    <p className="completedhousestitle" id="completedproj">
                        Completed Projects
                    </p>
                    <div className="completedimgcontainer">
                    {json.JustSmartCustomHomes.map((community, i) =>{
                        return(
                          community.completedImg &&   
                            <Card className='completedimages' key={i}>
                                <div className='cardheader'>
                                    <img src={Logo} className="cardlogo"  alt="cardlogo"/>
                                    <p className='cardtitle'>{community.name}<br/>
                                    <span>Ocklahoma</span></p>
                                </div>

                           <CardMedia
                           className='completedimg'
                             component="img"
                             image={community.completedImg}
                             onClick={()=>{window.open(completedurl1[i],"_self")}} 
                           />
                          
                             <CardContent>
                             <Typography className='more'>
                              Click for more details...
                             </Typography>
                           </CardContent>
                         </Card>)}
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}