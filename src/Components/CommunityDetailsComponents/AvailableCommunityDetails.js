import React from 'react';
import './CommunityDetails.css'
import BasicTabs from './Tab.js';
import '../CommunityDetailsComponents/Tab.css';
import Card from '@mui/material/Card';
export default function AvailableCommunityDetails(props) {
   const availablehouseurl= ["AvailableHouse-1","AvailableHouse-2","AvailableHouse-3","AvailableHouse-4","AvailableHouse-5","AvailableHouse-6","AvailableHouse-7","AvailableHouse-8","AvailableHouse-9","AvailableHouse-10"]
   console.log(availablehouseurl)

           

   return (
      <>
      <div className="wholedivision">
         <p className="communityname">Community name : {props.availableurl[0].name}
         </p>
         <div className='communitydescription'>{props.availableurl[0].mainDescr}</div>
         
         <div className="housescontainer">
            {props.availableurl[0].availablehouses.map((record1, i) =>
               <div className='houses'>
                  <p className="housesname">{record1.name}</p>
                  <img className="housesimg" src={record1.image} onClick={()=>{window.open(availablehouseurl[i],"_self")}}  />
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

         <li className="mainhousename">{props.availableurl[0].name}</li>
         <img className="mainhouseimg" src={props.availableurl[0].availablehouses[0].image} />
         <div className="communitypagebooking">For Details:<br />
         <span>
               <table>
                  <tbody>
                     {props.availableurl[0].booking.map((book, i) =>
                        <tr>
                           <td style={{paddingRight:"10px"}}>{book.name}</td>
                           <td>{book.number}</td>
                        </tr>
                     )}
                  </tbody>
               </table>
               </span>
            </div>
         {props.availableurl[0].nearby.map((near, i) =>
            <div className="nearby" id="nearbyplaces" key={i}>Near by
               <ul>
                  <li>{near.place1}<br />{near.km1}</li>
                  <li>{near.place2}<br />{near.km2}</li>
                  <li>{near.place3}<br />{near.km3}</li>
                  <li>{near.place4}<br />{near.km4}</li>
               </ul>
            </div>)}
         <BasicTabs tabs={props.availableurl[0].tabs} />


         <div className="features" id="features">
            Features:
            <div className="points">{props.availableurl[0].extraFeatures}</div>
         </div>
         <div className="overview" >
            <p>Community Plan</p>
            <img src={props.availableurl[0].communityPlan} />
         </div>
         <div className="location" id="location">
            <p>Location</p>
            <img src={props.availableurl[0].location} />
         </div>
         </div>
    </>
   );

}
