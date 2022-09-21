import React from 'react';
import HouseIcon from '../../Pictures/CommonImages/houseicon.jpg';
//import './AboutusReview.css'

import community from "../../Justsmarthome.json";
export default function AboutusReview() {
    function ClickEvent1() {
        window.open("http://localhost:3000/Community-1", "_self");
    }
    function ClickEvent2() {
        window.open("http://localhost:3000/Community-2", "_self");
    }
    function ClickEvent3() {
        window.open("http://localhost:3000/Community-3", "_self");
    }
    function ClickEvent4() {
        window.open("http://localhost:3000/Community-4", "_self");
    }
    function ClickEvent5() {
        window.open("http://localhost:3000/Community-5", "_self");
    }
    
    
    const arr3=[ClickEvent1,ClickEvent2,ClickEvent3,ClickEvent4,ClickEvent5]
    console.log(arr3)
    return (
     
       
            <> 
            <div style={{ display:"flex",width:"100%",position:"relative",top:"580px",height:"auto"}} >
            <div className="availablehouses">
            <img className="houseIcon" src={HouseIcon} alt="houseIcon" style={{height: "90px",width: "80px"}}/>
                        <p className="type" 
                           style={{fontFamily: 'Qwigley',
                                   fontSize: "48px",
                                   color: "#000000",
                                   left:" 90px",
                                   top: "-20px",
                                   position:"absolute"}} id="readilyavailable">
                          Readily Available
                        </p>
                        <div style={{width:"390px",height:"1130px",position:"relative",overflowX:"hidden",overflowY:"auto"}}>
                        {community.JustSmartCustomHomes.map((record, i) =>
                        <div key={i} style={{paddingLeft:"10px",paddingTop:"20px"}} >                    
                             <img  src={record.availableImg} onClick={arr3[i]} style={{height: "200px",width: "350px",borderRadius:"5px",position:"relative"}} />
                             <h1 style={{width: "190px", backgroundColor: "gray", color: "white", fontSize: "20px",borderRadius:"5px",padding:"5px",position:"relative",marginTop:"-45px",marginLeft:"70px"}}>{record.name}</h1>                
                        </div>
                        )}
                        </div> 
                        </div>
                        <div>
                        <div className="aboutus" 
                             style={{position: "absolute",
                                     left: "405px",
                                     top: "30px",
                                     fontFamily: 'Qwigley',
                                     fontSize: "48px",
                                     color: "#000000"}}>
                             Aboutus
                        </div>
                        {community.JustSmartCustomHomes.map((record, i) =>
                        <div key={i}>    
                        <div className="rect" 
                             style={{ position: "absolute",
                                      width: "450px",
                                      height: "640px",
                                      left: "395px",
                                      top: "95px",
                                      background: "rgba(248, 197, 197, 0.22)",}}>
                        <p style={{fontFamily: 'Qwigley',
                                   fontSize: "35px",
                                   textIndent: "50px",
                                   margin: "20px",}}>
                        {record.aboutus}
                        </p>
                        </div>
                        </div> 
                        )}
                        <div className="reviews" 
                             style={{ position: "absolute",
                                      left: "420px",
                                      top: "780px",
                                      fontFamily: 'Qwigley',
                                      fontSize:"50px"}} id="reviews">
                            Reviews
                        </div>
        
                        <div className="revrect1" 
                             style={{position: "absolute",
                                     width:" 270px",
                                     height: "110px",
                                     left: "410px",
                                     top: "850px",
                                     paddingLeft: "130px",
                                     paddingTop: "20px",
                                     fontFamily: 'Qwigley',
                                     fontSize: "33px",
                                     background: "lightgreen"}}>
                             "Exceptional and on-time"<br />
                            <span style={{color:"lightgreen"}}>......................</span>-Arun
                            <img className="houseIcon"
                                 src={HouseIcon} 
                                 alt="houseIcon1" 
                                 style={{ position: "absolute",
                                          left: "10px",
                                          top:"5px",
                                          height: "80px"}}/>
                            <p style={{position:"absolute",left:"10px",top:"70px",fontSize:"25px"}}>More details about the reviews</p>
                        </div>
                        <div className="revrect2" 
                             style={{position: "absolute",
                                     width:" 270px",
                                     height: "110px",
                                     left: "410px",
                                     top: "1000px",
                                     paddingLeft: "130px",
                                     paddingTop: "20px",
                                     fontFamily: 'Qwigley',
                                     fontSize: "33px",
                                     background: "lightgreen"}}>
                             "Exceptional and on-time"<br />
                            <span style={{color:"lightgreen"}}>......................</span>-Arun
                            <img className="houseIcon" 
                                 src={HouseIcon}
                                 alt="houseIcon2"  
                                 style={{ position: "absolute",
                                          left: "10px",
                                          top:"5px",
                                          height: "80px"}} />
                            <p style={{position:"absolute",left:"10px",top:"70px",fontSize:"25px"}}>More details about the reviews</p>
                        </div>
                        </div>
                     <div className="completedhouses">
                     <img className="houseIcon" src={HouseIcon} alt="houseIcon"  style={{position:"relative",left:"470px",height: "90px",width: "80px"}}/>
                     <p style={{fontFamily: 'Qwigley',
                                fontSize: "48px",
                                color: "#000000",
                                left:" 950px",
                                top: "-20px",
                                position:"absolute"}} id="completedproj"> 
                        Completed Projects
                    </p>
                    <div style={{left:"858px",width:"390px",height:"1130px",position:"absolute",overflowX:"hidden",overflowY:"auto"}}>
                     {community.JustSmartCustomHomes.map((record, i) =>
                        <div key={i} style={{paddingLeft:"10px",paddingTop:"20px"}}>    
                       <img  src={record.completedImg} onClick={arr3[i]} style={{height: "200px",width: "350px",borderRadius:"5px",position:"relative"}} />
                       <h1 style={{width: "190px", backgroundColor: "gray", color: "white", fontSize: "20px",borderRadius:"5px",padding:"5px",position:"relative",marginTop:"-45px",marginLeft:"70px"}}>{record.name}</h1>                
                      </div>
                        )}
                     </div>
                     </div>
                  </div>
                 </>
             )
}