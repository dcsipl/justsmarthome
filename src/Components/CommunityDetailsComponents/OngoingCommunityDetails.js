import React from 'react';
import { useState } from 'react';
import './CommunityDetails.css'
import BasicTabs from './Tab.js';
import '../CommunityDetailsComponents/Tab.css';

export default function OngoingCommunityDetails(props) {
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
               <div className="backgroundcolor"></div>

         <li className="mainhousename">{props.ongoingurl[0].ongoinghouses[0].name}</li>
         <img className="mainhouseimg" src={props.ongoingurl[0].ongoinghouses[0].image}/> 
         <div className="description"><span>Description:</span><br/>
         <b>Elemntary:</b> Spring Creek <b> Middle:</b>  Deer Creek 
         <b> High:</b>  Deer Creek 
         <b> School Dist:</b> Deer Creek<br/>
         {props.ongoingurl[0].ongoinghouses[0].description}
         </div>

      </>);

   const array = props.ongoingurl[0].ongoinghouses.map((data, key) =>
      <div>
                  <div className="backgroundcolor"></div>

         <li className="mainhousename">{data.name}</li>
         <img className='mainhouseimg' src={data.image} onClick={event => changeHouse(event, key)} key={key} />
         <button className="moredetailsbutton" onClick={event => changeHouse(event, key)} key={key}>
            more details
         </button>

         <div className="description"><span>Description:</span><br/>
         <b>Elemntary:</b> Spring Creek <b> Middle:</b>  Deer Creek 
         <b> High:</b>  Deer Creek 
         <b> School Dist:</b> Deer Creek<br/>
            <div>
            {data.description}
            </div>
         
         </div>
      </div>);


   return (
      <>
      <div className="wholedivision">
         <p className="communityname">Community name : {props.ongoingurl[0].name}
         </p>
         <div className='communitydescription'>{props.ongoingurl[0].mainDescr}</div>
         
         <div className="housescontainer">
            {props.ongoingurl[0].ongoinghouses.map((record1, i) =>
               <div className='houses'>
                  <p className="housesname">{record1.name}</p>
                  <img className="housesimg" src={record1.image} onClick={() => { setImage(array[i]) }} />
               </div>)}
            <p>{image}</p>
         </div>
         

         <div className="communitypagebooking">For Details:<br/>
         <span>{props.ongoingurl[0].booking1}<br />
            {props.ongoingurl[0].booking2}</span>
         </div>
         {props.ongoingurl[0].nearby.map((near, i) =>
            <div className="nearby" id="nearbyplaces" key={i}>Near by
               <ul>
                  <li>{near.place1}<br />{near.km1}</li>
                  <li>{near.place2}<br />{near.km2}</li>
                  <li>{near.place3}<br />{near.km3}</li>
                  <li>{near.place4}<br />{near.km4}</li>
               </ul>
            </div>)}
         <BasicTabs tabs={props.ongoingurl[0].tabs} />


         <div className="features" id="features">
            Features:
            <div className="points">{props.ongoingurl[0].extraFeatures}</div>
         </div>
         <div className="overview" >
            <p>Community Plan</p>
            <img src={props.ongoingurl[0].communityPlan} />
         </div>
         <div className="location" id="location">
            <p>Location</p>
            <img src={props.ongoingurl[0].location} />
         </div>
         </div>
    </>
   );

}
