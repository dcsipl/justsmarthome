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


import './communitydetails.css';
import './housedetails1.css';
import './housedetails2.css';
import './housedetails3.css';
import './housedetails4.css';
import './housedetails5.css';




const Main = (

    <Router>
        <Routes>
            <Route exact path="" element={<HomePage />} />
            <Route path="/b" element={<CommunityDetails />}/>
            <Route path="/c1" element={<HouseDetails1 />} />
            <Route path="/c2" element={<HouseDetails2 />} />
            <Route path="/c3" element={<HouseDetails3 />} />
            <Route path="/c4" element={<HouseDetails4 />} />
            <Route path="/c5" element={<HouseDetails5 />} />
            <Route path="/c6" element={<HouseDetails6 />} />
            <Route path="/c7" element={<HouseDetails7 />} />
            <Route path="/c8" element={<HouseDetails8 />} />
        </Routes>
    </Router>
)




ReactDom.render(Main, document.getElementById('root'));

