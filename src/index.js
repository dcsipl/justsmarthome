
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
        var  previousPageUrl= document.referrer;
        var splitUrl=previousPageUrl.split("/")
        const lastPath=splitUrl[splitUrl.length-1]
console.log(lastPath);

    let filename = window.location.href.split('/').pop();
    console.log("FILENAME",filename)

              const ongoingurls = community.JustSmartCustomHomes.filter(data=>data.status1 === filename);
              console.log("ONGOINGURLS",Object.values(ongoingurls))
              const availableurls = community.JustSmartCustomHomes.filter(data=>data.status2 === filename);
              console.log("AVAILABLEURLS",Object.values(availableurls))
              const completedurls = community.JustSmartCustomHomes.filter(data=>data.status3 === filename);
              console.log("COMPLETEDURLS",Object.values(completedurls))

              const ongoinghouseurl= ["OnGoingHouse-1","OnGoingHouse-2","OnGoingHouse-3","OnGoingHouse-4","OnGoingHouse-5","OnGoingHouse-6","OnGoingHouse-7","OnGoingHouse-8","OnGoingHouse-9","OnGoingHouse-10"]
              const availablehouseurl= ["AvailableHouse-1","AvailableHouse-2","AvailableHouse-3","AvailableHouse-4","AvailableHouse-5","AvailableHouse-6","AvailableHouse-7","AvailableHouse-8","AvailableHouse-9","AvailableHouse-10"]
              const completedhouseurl= ["CompletedHouse-1","CompletedHouse-2","CompletedHouse-3","CompletedHouse-4","CompletedHouse-5","CompletedHouse-6","CompletedHouse-7","CompletedHouse-8","CompletedHouse-9","CompletedHouse-10"]

              const communityname=community.JustSmartCustomHomes.map((record=>record.name))
              console.log("CNAME",communityname)
              
              const ongoinghouseurls=community.JustSmartCustomHomes.map(record=>record.ongoinghouses.filter(record=>record.houseType===filename))
              console.log("ONGOINGHOUSEURL",ongoinghouseurls)
              const availablehouseurls= community.JustSmartCustomHomes.map(record=>record.availablehouses.filter(record=>record.houseType===filename));
              console.log("AVAILABLEHOUSEURL",availablehouseurls)
              const completedhouseurls= community.JustSmartCustomHomes.map(record=>record.completedhouses.filter(record=>record.houseType===filename));
              console.log("COMPLETEDHOUSEURL",completedhouseurls)

                   const ongoingurl1= community.JustSmartCustomHomes.map((data,i)=>data.status1);
                   console.log(ongoingurl1)
                   const availableurl1= community.JustSmartCustomHomes.map((data,i)=>data.status2);
                   console.log(availableurl1)
                   const completedurl1= community.JustSmartCustomHomes.map((data,i)=>data.status3);
                   console.log(completedurl1)


                  
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
            {ongoinghouseurl.map(ongoinghousedetailspaths=>(
            <Route path={ongoinghousedetailspaths} element={
            lastPath==="OnGoingCommunity-1"?<OnGoingHouseDetailsPage cname={communityname[0]} ongoinghouseurls={ongoinghouseurls[0]}/>:
            lastPath==="OnGoingCommunity-2"?<OnGoingHouseDetailsPage cname={communityname[1]} ongoinghouseurls={ongoinghouseurls[1]}/>:
            lastPath==="OnGoingCommunity-3"?<OnGoingHouseDetailsPage cname={communityname[2]} ongoinghouseurls={ongoinghouseurls[2]}/>:
            <OnGoingHouseDetailsPage cname={communityname[3]} ongoinghouseurls={ongoinghouseurls[3]}/>
            }/>
            ))}
            {availablehouseurl.map(availablehousedetailspaths=>(
            <Route path={availablehousedetailspaths} element={
            lastPath==="AvailableCommunity-1"?<AvailableHouseDetailsPage cname={communityname[0]} availablehouseurls={availablehouseurls[0]}/>:
            lastPath==="AvailableCommunity-2"?<AvailableHouseDetailsPage cname={communityname[1]}availablehouseurls={availablehouseurls[1]}/>:
            lastPath==="AvailableCommunity-3"?<AvailableHouseDetailsPage cname={communityname[2]} availablehouseurls={availablehouseurls[2]}/>:
            <AvailableHouseDetailsPage cname={communityname[3]} availablehouseurls={availablehouseurls[3]}/>
        } />
            ))}
            {completedhouseurl.map(completedhousedetailspaths=>(
            <Route path={completedhousedetailspaths} element={
            lastPath==="CompletedCommunity-1"?<CompletedHouseDetailsPage cname={communityname[0]} completedhouseurls={completedhouseurls[0]}/>:
            lastPath==="CompletedCommunity-2"?<CompletedHouseDetailsPage cname={communityname[1]} completedhouseurls={completedhouseurls[1]}/>:
            lastPath==="CompletedCommunity-3"?<CompletedHouseDetailsPage cname={communityname[2]} completedhouseurls={completedhouseurls[2]}/>:
            <CompletedHouseDetailsPage cname={communityname[3]} completedhouseurls={completedhouseurls[3]}/>
        } />
            ))}
        </Routes>
    </Router>
)


}

ReactDom.render(<Main/>, document.getElementById('root'));







