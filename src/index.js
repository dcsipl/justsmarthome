// import React from 'react';
// import ReactDom from 'react-dom';
// import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
// import Header from './header.js';
// // import FirstHalf from './firsthalf.js';
// // import SecondHalf from './secondhalf.js';
// //import SecondPage from './secondpage.js';
// import ThirdPage from './thirdpage.js';
// import Footer from './footer.js';
// import './header.css';
// // import './firsthalf.css';
// // import './secondhalf.css';
// //import './secondpage.css';
// import './thirdpage.css';
// import './footer.css';

// export default function Main(){
//     return(
//     <>
//        <Header/>
//        {/* {/* <FirstHalf/>
//        <SecondHalf/> */}
//        {/* <SecondPage/>  */}
//        <ThirdPage/>
//        <Footer/>
//     </>
//     )
// }



// ReactDom.render(<Main/>,document.getElementById('root'));











import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

import FirstPage from './firstpage.js';
import SecondPage from './secondpage.js';
import ThirdPage1 from './thirdpage1.js';
import ThirdPage2 from './thirdpage2.js';
import ThirdPage3 from './thirdpage3.js';
import ThirdPage4 from './thirdpage4.js';
import ThirdPage5 from './thirdpage5.js';
import ThirdPage6 from './thirdpage6.js';
import ThirdPage7 from './thirdpage7.js';
import ThirdPage8 from './thirdpage8.js';


import './secondpage.css';
import './thirdpage1.css';
import './thirdpage2.css';
import './thirdpage3.css';
import './thirdpage4.css';
import './thirdpage5.css';
import './thirdpage6.css';
import './thirdpage7.css';
import './thirdpage8.css';


const Main = (
   
    <Router>
        <Routes>
        <Route exact path="" element={<FirstPage/>}/>    
        <Route path="/b" element={<SecondPage/>}/>
        <Route path="/c1" element={<ThirdPage1/>}/>
         <Route path="/c2" element={<ThirdPage2/>}/>
        <Route path="/c3" element={<ThirdPage3/>}/>
        <Route path="/c4" element={<ThirdPage4/>}/>
        <Route path="/c5" element={<ThirdPage5/>}/>
       <Route path="/c6" element={<ThirdPage6/>}/>
        <Route path="/c7" element={<ThirdPage7/>}/>
        <Route path="/c8" element={<ThirdPage8/>}/> 
        </Routes>
    </Router>
    )




ReactDom.render(Main,document.getElementById('root'));

