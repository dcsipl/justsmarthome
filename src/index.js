import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

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
import Community1 from './community1.js';
import Community2 from './community2.js';
import Community3 from './community3.js';
import Community4 from './community4.js';
import Community5 from './community5.js';

import './communitydetails.css';
import './housedetails1.css';
import './housedetails2.css';
import './housedetails3.css';
import './housedetails4.css';
import './housedetails5.css';
import "./justsmarthome.json";
let community=require("./justsmarthome.json");
console.log(community);




const Main = (

    <Router>
        <Routes>
            <Route exact path="" element={<HomePage />} />
            <Route path="/community1details" element={<Community1/>}/>
            <Route path="/community2details" element={<Community2/>}/>
            <Route path="/community3details" element={<Community3/>}/>
            <Route path="/community4details" element={<Community4/>}/>
            <Route path="/community5details" element={<Community5/>}/>
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




ReactDom.render(Main, document.getElementById('root'));















