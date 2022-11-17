
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";//npm i react-router-dom

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




function Main() {



    //Get the current page url path
    let currentpageurl = window.location.href.split('/').pop();
    console.log("FILENAME", currentpageurl)

    const ongoingurl1 = community.JustSmartCustomHomes.map((data, i) => data.status1);
    console.log(ongoingurl1)
    const availableurl1 = community.JustSmartCustomHomes.map((data, i) => data.status2);
    console.log(availableurl1)
    const completedurl1 = community.JustSmartCustomHomes.map((data, i) => data.status3);
    console.log(completedurl1)

    const ongoingurls = community.JustSmartCustomHomes.filter(data => data.status1 === currentpageurl);
    console.log("ONGOINGURLS", ongoingurls)
    const availableurls = community.JustSmartCustomHomes.filter(data => data.status2 === currentpageurl);
    console.log("AVAILABLEURLS", availableurls)
    const completedurls = community.JustSmartCustomHomes.filter(data => data.status3 === currentpageurl);
    console.log("COMPLETEDURLS", completedurls)

    //Get the previous page url path
    var previousPageUrl = document.referrer;
    var splitUrl = previousPageUrl.split("/")
    const lastPath = splitUrl[splitUrl.length - 1]
    console.log("LAST PATH URL", lastPath);

    const communityname = community.JustSmartCustomHomes.map((record => record.name))
    console.log("CNAME", communityname)


    const ongoinghouseurl = community.JustSmartCustomHomes.map((data, i) => data.ongoinghouses.map((data2, i) => data2.houseType))
    console.log("ongoinghouseurl", ongoinghouseurl)
    //Find which array is maximum length
    const maximumlengthofongoinghouseurl = ongoinghouseurl.map(a => a.length).indexOf(Math.max(...ongoinghouseurl.map(a => a.length)));
    console.log("maximumlengthofongoinghouseurl", maximumlengthofongoinghouseurl)
    const ongoinghouseurlss = ongoinghouseurl[maximumlengthofongoinghouseurl]
    console.log("ongoinghouseurlss", ongoinghouseurlss)

    const availablehouseurl = community.JustSmartCustomHomes.map((data, i) => data.availablehouses.map((data2, i) => data2.houseType))
    console.log("availablehouseurl", availablehouseurl)
    //Find which array is maximum length
    const maximumlengthofavailablehouseurl = availablehouseurl.map(a => a.length).indexOf(Math.max(...availablehouseurl.map(a => a.length)));
    console.log("maximumlengthofavailablehouseurl", maximumlengthofavailablehouseurl)
    const availablehouseurlss = availablehouseurl[maximumlengthofavailablehouseurl]
    console.log("availablehouseurlss", availablehouseurlss)

    const completedhouseurl = community.JustSmartCustomHomes.map((data, i) => data.completedhouses.map((data2, i) => data2.houseType))
    console.log("completedhouseurl", completedhouseurl)
    //Find which array is maximum length
    const maximumlengthofcompletedhouseurl = completedhouseurl.map(a => a.length).indexOf(Math.max(...completedhouseurl.map(a => a.length)));
    console.log("maximumlengthofcompletedhouseurl", maximumlengthofcompletedhouseurl)
    const completedhouseurlss = completedhouseurl[maximumlengthofcompletedhouseurl]
    console.log("completedhouseurlss", completedhouseurlss)


    const ongoinghouseurls = community.JustSmartCustomHomes.map(record => record.ongoinghouses.filter(record => record.houseType === currentpageurl))
    console.log("ONGOINGHOUSEURL", ongoinghouseurls)
    const availablehouseurls = community.JustSmartCustomHomes.map(record => record.availablehouses.filter(record => record.houseType === currentpageurl));
    console.log("AVAILABLEHOUSEURL", availablehouseurls)
    const completedhouseurls = community.JustSmartCustomHomes.map(record => record.completedhouses.filter(record => record.houseType === currentpageurl));
    console.log("COMPLETEDHOUSEURL", completedhouseurls)





    return (
        <Router>
            <Routes>
                <Route exact path="" element={<HomePage />} />
                <Route exact path="/Gallery" element={<GalleryPage />} />



                {ongoingurl1.map((ongoingcommunitydetailspaths, i) => (
                    <Route key={i} path={ongoingcommunitydetailspaths} element={<OngoingCommunityDetailsPage ongoingurl={ongoingurls} />} />
                ))}
                {availableurl1.map((availablecommunitydetailspaths, i) => (
                    <Route key={i} path={availablecommunitydetailspaths} element={<AvailableCommunityDetailsPage availableurl={availableurls} />} />
                ))}
                {completedurl1.map((completedcommunitydetailspaths, i) => (
                    <Route key={i} path={completedcommunitydetailspaths} element={<CompletedCommunityDetailsPage completedurl={completedurls} />} />
                ))}



                {ongoinghouseurlss.map((ongoinghousedetailspaths, i) => (
                    <Route key={i} path={ongoinghousedetailspaths} element={
                        lastPath === "OnGoingCommunity-1" ? <OnGoingHouseDetailsPage cname={communityname[0]} ongoinghouseurls={ongoinghouseurls[0]} /> :
                            lastPath === "OnGoingCommunity-2" ? <OnGoingHouseDetailsPage cname={communityname[1]} ongoinghouseurls={ongoinghouseurls[1]} /> :
                                lastPath === "OnGoingCommunity-3" ? <OnGoingHouseDetailsPage cname={communityname[2]} ongoinghouseurls={ongoinghouseurls[2]} /> :
                                    <OnGoingHouseDetailsPage cname={communityname[3]} ongoinghouseurls={ongoinghouseurls[3]} />
                    } />
                ))}
                {availablehouseurlss.map((availablehousedetailspaths, i) => (
                    <Route key={i} path={availablehousedetailspaths} element={
                        lastPath === "AvailableCommunity-1" ? <AvailableHouseDetailsPage cname={communityname[0]} availablehouseurls={availablehouseurls[0]} /> :
                            lastPath === "AvailableCommunity-2" ? <AvailableHouseDetailsPage cname={communityname[1]} availablehouseurls={availablehouseurls[1]} /> :
                                lastPath === "AvailableCommunity-3" ? <AvailableHouseDetailsPage cname={communityname[2]} availablehouseurls={availablehouseurls[2]} /> :
                                    <AvailableHouseDetailsPage cname={communityname[3]} availablehouseurls={availablehouseurls[3]} />
                    } />
                ))}
                {completedhouseurlss.map((completedhousedetailspaths, i) => (
                    <Route key={i} path={completedhousedetailspaths} element={
                        lastPath === "CompletedCommunity-1" ? <CompletedHouseDetailsPage cname={communityname[0]} completedhouseurls={completedhouseurls[0]} /> :
                            lastPath === "CompletedCommunity-2" ? <CompletedHouseDetailsPage cname={communityname[1]} completedhouseurls={completedhouseurls[1]} /> :
                                lastPath === "CompletedCommunity-3" ? <CompletedHouseDetailsPage cname={communityname[2]} completedhouseurls={completedhouseurls[2]} /> :
                                    <CompletedHouseDetailsPage cname={communityname[3]} completedhouseurls={completedhouseurls[3]} />
                    } />
                ))}
            </Routes>
        </Router>
    )


}

ReactDom.render(<Main />, document.getElementById('root'));







