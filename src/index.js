import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import HomePage from './homepage.js';
import CommunityDetails from './communitydetails.js';
import HouseDetails1 from './housedetails1.js';
import HouseDetails2 from './housedetails2.js';
import HouseDetails3 from './housedetails3.js';
import HouseDetails4 from './housedetails4.js';
import HouseDetails5 from './housedetails5.js';
import HouseDetails6 from './housedetails6.js';
import HouseDetails7 from './housedetails7.js';
import HouseDetails8 from './housedetails8.js';


import './communitydetails.css';
import './housedetails1.css';
import './housedetails2.css';
import './housedetails3.css';
import './housedetails4.css';
import './housedetails5.css';
import community from "./justsmarthome.json";

console.log(community);




function Main(){
    let filename = window.location.href.split('/').pop();
    console.log(filename)
              const urls = community.JustSmartCustomHomes.filter(data=>data.type === filename);
              console.log(urls)
              let keys = Object.keys(urls);
              console.log(keys)
return(
    <Router>
        <Routes>
            <Route exact path="" element={<HomePage />} />
            <Route path="/Community-1" element={<CommunityDetails url={urls}/>}/>
            <Route path="/Community-2" element={<CommunityDetails url={urls}/>}/>
            <Route path="/Community-3" element={<CommunityDetails url={urls}/>}/>
            <Route path="/Community-4" element={<CommunityDetails url={urls}/>}/>
            <Route path="/Community-5" element={<CommunityDetails url={urls}/>}/>
            <Route path="/house1details" element={<HouseDetails1 />} />
            <Route path="/house2details" element={<HouseDetails2 />} />
            <Route path="/house3details" element={<HouseDetails3 />} />
            <Route path="/house4details" element={<HouseDetails4 />} />
            <Route path="/house5details" element={<HouseDetails5 />} />
            <Route path="/house6details" element={<HouseDetails6 />} />
            <Route path="/house7details" element={<HouseDetails7 />} />
            <Route path="/house8details" element={<HouseDetails8 />} />
        </Routes>
    </Router>
)


}

ReactDom.render(<Main/>, document.getElementById('root'));















