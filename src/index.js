
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";//npm i react-router-dom

import HomePage from './Components/HomePageComponents/HomePage.js';
import OngoingCommunityDetailsPage from './Components/CommunityDetailsComponents/OngoingCommunityDetailsPage';
import AvailableCommunityDetailsPage from './Components/CommunityDetailsComponents/AvailableCommunityDetailsPage';
import CompletedCommunityDetailsPage from './Components/CommunityDetailsComponents/CompletedCommunityDetailsPage';
import OnGoingHouseDetailsPage from './Components/HouseDetailsComponents/OnGoingHouseDetailsPage.js';
import AvailableHouseDetailsPage from './Components/HouseDetailsComponents/AvailableHouseDetailsPage';
import CompletedHouseDetailsPage from './Components/HouseDetailsComponents/CompletedHouseDetailsPage';


import './Components/CommunityDetailsComponents/CommunityDetails.css';
import './Components/HouseDetailsComponents/HouseDetails.css';
import './index.css';

import community from "./JustsmartCustomHomes.json";
import GalleryPage from './Components/GalleryComponent/GalleryPage.js';

console.log(community);




    function Main(){
    let filename = window.location.href.split('/').pop();
    console.log("FILENAME",filename)
              const ongoingurls = community.JustSmartCustomHomes.filter(data=>data.status1 === filename);
              console.log("ONGOINGURLS",Object.values(ongoingurls))
              const availableurls = community.JustSmartCustomHomes.filter(data=>data.status2 === filename);
              console.log("AVAILABLEURLS",Object.values(availableurls))
              const completedurls = community.JustSmartCustomHomes.filter(data=>data.status3 === filename);
              console.log("COMPLETEDURLS",Object.values(completedurls))

              const ongoinghouseurls= community.JustSmartCustomHomes[0].ongoinghouses.filter((record,i)=>record.houseType===filename);
              console.log("ONGOINGHOUSEURL",ongoinghouseurls)
              const availablehouseurls= community.JustSmartCustomHomes[0].availablehouses.filter((record,i)=>record.houseType===filename);
              console.log("AVAILABLEHOUSEURL",availablehouseurls)
              const completedhouseurls= community.JustSmartCustomHomes[0].completedhouses.filter((record,i)=>record.houseType===filename);
              console.log("COMPLETEDHOUSEURL",completedhouseurls)
                   
                   const ongoingurl1= community.JustSmartCustomHomes.map((data,i)=>data.status1);
                   console.log(ongoingurl1)
                   const availableurl1= community.JustSmartCustomHomes.map((data,i)=>data.status2);
                   console.log(availableurl1)
                   const completedurl1= community.JustSmartCustomHomes.map((data,i)=>data.status3);
                   console.log(completedurl1)


                   const ongoinghouseurl1= community.JustSmartCustomHomes[0].ongoinghouses.map((record,i)=>record.houseType);
                   console.log(ongoinghouseurl1)
                   const availablehouseurl1= community.JustSmartCustomHomes[0].availablehouses.map((record,i)=>record.houseType);
                   console.log(availablehouseurl1)
                   const completedhouseurl1= community.JustSmartCustomHomes[0].completedhouses.map((record,i)=>record.houseType);
                   console.log(completedhouseurl1)
                  
return(
    <Router>
        <Routes>
            <Route exact path="" element={<HomePage />} />
            <Route exact path="/Gallery" element={<GalleryPage/>} />



            {ongoingurl1.map(ongoingcommunitydetailspaths=>(
            <Route path={ongoingcommunitydetailspaths} element={<OngoingCommunityDetailsPage ongoingurl={ongoingurls}/>}/>
            ))}
             {availableurl1.map(availablecommunitydetailspaths=>(
            <Route path={availablecommunitydetailspaths} element={<AvailableCommunityDetailsPage availableurl={availableurls}/>}/>
            ))}
             {completedurl1.map(completedcommunitydetailspaths=>(
            <Route path={completedcommunitydetailspaths} element={<CompletedCommunityDetailsPage completedurl={completedurls}/>}/>



            ))}
            {ongoinghouseurl1.map(ongoinghousedetailspaths=>(
            <Route path={ongoinghousedetailspaths} element={<OnGoingHouseDetailsPage ongoinghouseurls={ongoinghouseurls}/>} />
            ))}
            {availablehouseurl1.map(availablehousedetailspaths=>(
            <Route path={availablehousedetailspaths} element={<AvailableHouseDetailsPage availablehouseurls={availablehouseurls}/>} />
            ))}
            {completedhouseurl1.map(completedhousedetailspaths=>(
            <Route path={completedhousedetailspaths} element={<CompletedHouseDetailsPage completedhouseurls={completedhouseurls}/>} />
            ))}
        </Routes>
    </Router>
)


}

ReactDom.render(<Main/>, document.getElementById('root'));







