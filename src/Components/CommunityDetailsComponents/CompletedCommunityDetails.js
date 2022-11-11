import React from 'react';
import { useState } from 'react';
import './CommunityDetails.css'
import BasicTabs from './Tab.js';
import '../CommunityDetailsComponents/Tab.css';
import Card from '@mui/material/Card';

export default function CompletedCommunityDetails(props) {
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
               <Card className="backgroundcolor"></Card>

         <li className="mainhousename">{props.completedurl[0].completedhouses[0].name}</li>
         <img className="mainhouseimg" src={props.completedurl[0].completedhouses[0].image} onClick={()=>{window.open("/House-1","_self")}}/> 
         <button className="moredetailsbutton" onClick={()=>{window.open("/House-1","_self")}}>
            More details
         </button>
         <div className="description"><span>Description:</span><br />
         <b>Elemntary:</b> Spring Creek ,  <b> Middle:</b>  Deer Creek , <b> High:</b>  Deer Creek , <b> School Dist:</b> Deer Creek<br />
            <div className="descriptiontable">
                <table>
                    <tbody>
            {props.completedurl[0].completedhouses[0].descriptions.map((datas)=>
             <div className="tablebody">
             <tr className="firstrow">
                 <td >{datas.descriptitle1}:</td>
                 <td >{datas.descripcontent1}</td>
             </tr>
             <tr className="secondtrow">
                 <td >{datas.descriptitle2}:</td>
                 <td>{datas.descripcontent2}</td>
             </tr>
             <tr className="thirdrow">
                 <td>{datas.descriptitle3}:</td>
                 <td>{datas.descripcontent3}</td>
             </tr>
         </div>
            )}
              </tbody>
                </table>
            </div>

         </div>

      </>);

   const array = props.completedurl[0].completedhouses.map((data, key) =>
      <div>
         <Card className="backgroundcolor"></Card>

         <li className="mainhousename">{data.name}</li>
         <img className='mainhouseimg' src={data.image} onClick={event => changeHouse(event, key)} key={key} />
         <button className="moredetailsbutton" onClick={event => changeHouse(event, key)} key={key}>
            more details
         </button>

         <div className="description"><span>Description:</span><br />
            <b>Elemntary:</b> Spring Creek ,  <b> Middle:</b>  Deer Creek , <b> High:</b>  Deer Creek , <b> School Dist:</b> Deer Creek<br />
            <div className="descriptiontable">
                <table>
                    <tbody>
                        {data.descriptions.map((datas) =>
                            <div className="tablebody">
                                <tr className="firstrow">
                                    <td >{datas.descriptitle1}:</td>
                                    <td >{datas.descripcontent1}</td>
                                </tr>
                                <tr className="secondrow">
                                    <td >{datas.descriptitle2}:</td>
                                    <td>{datas.descripcontent2}</td>
                                </tr>
                                <tr className="thirdrow">
                                    <td>{datas.descriptitle3}:</td>
                                    <td>{datas.descripcontent3}</td>
                                </tr>
                            </div>
                        )}
                    </tbody>
                </table>
            </div>

         </div>
      </div>);


   return (
      <>
      <div className="wholedivision">
         <p className="communityname">Community name : {props.completedurl[0].name}
         </p>
         <div className='communitydescription'>{props.completedurl[0].mainDescr}</div>
         
         <div className="housescontainer">
            {props.completedurl[0].completedhouses.map((record1, i) =>
               <div className='houses'>
                  <p className="housesname">{record1.name}</p>
                  <img className="housesimg" src={record1.image} onClick={() => { setImage(array[i]) }} />
               </div>)}
            <p>{image}</p>
         </div>
         

         <div className="communitypagebooking">For Details:<br />
         <span>
               <table>
                  <tbody>
                     {props.completedurl[0].booking.map((book, i) =>
                        <tr>
                           <td style={{paddingRight:"10px"}}>{book.name}</td>
                           <td>{book.number}</td>
                        </tr>
                     )}
                  </tbody>
               </table>
               </span>
            </div>
         {props.completedurl[0].nearby.map((near, i) =>
            <div className="nearby" id="nearbyplaces" key={i}>Near by
               <ul>
                  <li>{near.place1}<br />{near.km1}</li>
                  <li>{near.place2}<br />{near.km2}</li>
                  <li>{near.place3}<br />{near.km3}</li>
                  <li>{near.place4}<br />{near.km4}</li>
               </ul>
            </div>)}
         <BasicTabs tabs={props.completedurl[0].tabs} />


         <div className="features" id="features">
            Features:
            <div className="points">{props.completedurl[0].extraFeatures}</div>
         </div>
         <div className="overview" >
            <p>Community Plan</p>
            <img src={props.completedurl[0].communityPlan} />
         </div>
         <div className="location" id="location">
            <p>Location</p>
            <img src={props.completedurl[0].location} />
         </div>
         </div>
    </>
   );

}
