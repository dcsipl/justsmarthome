import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import HomePage from './Components/HomePageComponents/HomePage.js';
import CommunityDetails from './Components/CommunityDetailsComponents/CommunityDetails';
import HouseDetails from './Components/HouseDetailsComponents/HouseDetails';



import './Components/CommunityDetailsComponents/CommunityDetails.css';
import './Components/HouseDetailsComponents/HouseDetails.css';

import community from "./Justsmarthome.json";

console.log(community);




function Main(){
    let filename = window.location.href.split('/').pop();
    console.log(filename)
              const urls = community.JustSmartCustomHomes.filter(data=>data.type === filename);
              console.log(urls)
              let keys = Object.keys(urls);
              console.log(keys)

              const urls1=  community.JustSmartCustomHomes.map(record=>
                record.house.filter(record2=>
                   record2.houseType===filename)
                )
               
                    console.log(urls1)
return(
    <Router>
        <Routes>
            <Route exact path="" element={<HomePage />} />
            <Route path="/Community-1" element={<CommunityDetails url={urls}/>}/>
            <Route path="/Community-2" element={<CommunityDetails url={urls}/>}/>
            <Route path="/Community-3" element={<CommunityDetails url={urls}/>}/>
            <Route path="/Community-4" element={<CommunityDetails url={urls}/>}/>
            <Route path="/Community-5" element={<CommunityDetails url={urls}/>}/>
            <Route path="/House-1" element={<HouseDetails url1={urls1[0]}/>} />
            <Route path="/House-2" element={<HouseDetails url1={urls1[0]}/>} />
            <Route path="/House-3" element={<HouseDetails url1={urls1[0]}/>} />
            <Route path="/House-4" element={<HouseDetails url1={urls1[0]}/>} />
            <Route path="/House-5" element={<HouseDetails url1={urls1[0]}/>} />
            <Route path="/House-6" element={<HouseDetails url1={urls1[0]}/>} />
            <Route path="/House-7" element={<HouseDetails url1={urls1[0]}/>} />
            <Route path="/House-8" element={<HouseDetails url1={urls1[0]}/>} />
            <Route path="/House-9" element={<HouseDetails url1={urls1[0]}/>} />
            <Route path="/House-10" element={<HouseDetails url1={urls1[0]}/>} />
           
           
        </Routes>
    </Router>
)


}

ReactDom.render(<Main/>, document.getElementById('root'));















