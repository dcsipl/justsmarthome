import React from 'react';
import './CommunityDetails.css'
import BasicTabs from './Tab.js';
import '../CommunityDetailsComponents/Tab.css';
import Card from '@mui/material/Card';
export default function OngoingCommunityDetails(props) {
   const ongoinghouseurl= ["OnGoingHouse-1","OnGoingHouse-2","OnGoingHouse-3","OnGoingHouse-4","OnGoingHouse-5","OnGoingHouse-6","OnGoingHouse-7","OnGoingHouse-8","OnGoingHouse-9","OnGoingHouse-10"]
   console.log(ongoinghouseurl)
              
              
 
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
                     <img className="housesimg" src={record1.image} onClick={()=>{window.open(ongoinghouseurl[i],"_self")}}  />
                     
                     
 <div className="descriptiontable">
 <table>
     <tbody>
         {record1.descriptions.map((datas) =>
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
</div>)}
               
            </div>

            <Card className="backgroundcolor"></Card>

<li className="mainhousename">{props.ongoingurl[0].name}</li>
<img className="mainhouseimg" src={props.ongoingurl[0].ongoinghouses[0].image}/>
            <div className="communitypagebooking">For Details:<br />
            <span>
               <table>
                  <tbody >
                     {props.ongoingurl[0].booking.map((book, i) =>
                        <tr>
                           <td style={{paddingRight:"10px"}}>{book.name}</td>
                           <td>{book.number}</td>
                        </tr>
                     )}
                  </tbody>
               </table>
               </span>
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
