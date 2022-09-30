import React from 'react';
import { useState } from 'react';
import './CommunityDetails.css'
import BasicTabs from './Tab.js';
import '../CommunityDetailsComponents/Tab.css';

export default function CommunityDetails(props) {
   function changeHouse(event, key) {
      (key === 0) ? window.open("/House-1", "_self") :
         (key === 1) ? window.open("/House-2", "_self") :
            (key === 2) ? window.open("/House-3", "_self") :
               (key === 3) ? window.open("/House-4", "_self") :
                  (key === 4) ? window.open("/House-5", "_self") :
                     (key === 5) ? window.open("/House-6", "_self") :
                        (key === 6) ? window.open("/House-7", "_self") :
                           (key === 7) ? window.open("/House-8", "_self") :
                              window.open("/House-9", "_self")
   }

   const [image, setImage] = useState(
      <>
         <p className="maincommunityname">{props.url[0].name}</p>
         <li className="mainhousename">{props.url[0].house[0].name}</li>
         <img className="mainhouseimg" src={props.url[0].house[0].image} />
      </>);

   const array = props.url[0].house.map((data, key) =>
      <div>
         <p className="maincommunityname">{props.url[0].name}</p>
         <li className="mainhousename">{data.name}</li>
         <img className='mainhouseimg' src={data.image} onClick={event => changeHouse(event, key)} key={key} />
         <button className="moredetailsbutton" onClick={event => changeHouse(event, key)} key={key}>
            more details
         </button>
      </div>);


   return (
      <>
         <p className="communityname">Community name : {props.url[0].name}
         </p>
         <h1 style={{ color: "white" }}>
            jdfffffffffffffffffffffffffffffffk<br />
            hjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvhbsjv<br />
            hjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvhbsjv<br />
            hjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvhbsjv<br />
            hjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvhbsjv<br />
         </h1>
         <div className="housescontainer">
            {props.url[0].house.map((record1, i) =>
               <div className='houses'>
                  <p className="housesname">{record1.name}</p>
                  <img className="housesimg" src={record1.image} onClick={() => { setImage(array[i]) }} />
               </div>)}
            <p>{image}</p>
         </div>
         <div className="backgroundcolor"></div>
         {props.url[0].description.map((descr, i) =>
            <div className="description">Description:<br />
               <ul>
                  <li>{descr.one}</li>
                  <li>{descr.two}</li>
                  <li>{descr.three}</li>
                  <li>{descr.four}</li>
               </ul>
            </div>)}

         <div className="communitypagebooking">For Booking:
            {props.url[0].booking1}<br />
            <span>{props.url[0].booking2}</span>
         </div>
         {props.url[0].nearby.map((near, i) =>
            <div className="nearby" id="nearbyplaces" key={i}>Near by
               <ul>
                  <li>{near.place1}<br />{near.km1}</li>
                  <li>{near.place2}<br />{near.km2}</li>
                  <li>{near.place3}<br />{near.km3}</li>
                  <li>{near.place4}<br />{near.km4}</li>
               </ul>
            </div>)}
         <BasicTabs tabs={props.url[0].tabs} />


         <div className="features" id="features">
            Features:
            <div className="points">{props.url[0].extraFeatures}</div>
         </div>
         <div className="overview" >
            <p>Community Plan</p>
            <img src={props.url[0].communityPlan} />
         </div>
         <div className="map" id="googlemap">
            <p>Google Map</p>
            <img src={props.url[0].googlemap} />
         </div>
    </>
   );

}
