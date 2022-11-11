
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";//npm i react-router-dom

import HomePage from './Components/HomePageComponents/HomePage.js';
import OngoingCommunityDetailsPage from './Components/CommunityDetailsComponents/OngoingCommunityDetailsPage';
import AvailableCommunityDetailsPage from './Components/CommunityDetailsComponents/AvailableCommunityDetailsPage';
import CompletedCommunityDetailsPage from './Components/CommunityDetailsComponents/CompletedCommunityDetailsPage';
import HouseDetailsPage from './Components/HouseDetailsComponents/HouseDetailsPage.js';



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
    
                   
                   const ongoingurl1= community.JustSmartCustomHomes.map((data,i)=>data.status1);
                   console.log(ongoingurl1)
                   const availableurl1= community.JustSmartCustomHomes.map((data,i)=>data.status2);
                   console.log(availableurl1)
                   const completedurl1= community.JustSmartCustomHomes.map((data,i)=>data.status3);
                   console.log(completedurl1)

                   let filename1 = window.location.href.split('/').pop();
              console.log("FILENAME1",filename1)
              const urls1=  community.JustSmartCustomHomes.map(record=>
                record.ongoinghouses.filter(record2=>
                   record2.houseType===filename1)
                )
               console.log(urls1)
            //    const type=  community.JustSmartCustomHomes.map(record=>
            //     record.ongoinghouses.map(record2=>
            //        record2.houseType)
            //     )
            //    console.log([...type[0],...type[1],...type[2]])
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
            {["/House-1","/House-2","/House-3","/House-4",
            "/House-5","/House-6","/House-7","/House-8",
            "/House-9","/House-10"].map(housedetailspaths=>(
            <Route path={housedetailspaths} element={<HouseDetailsPage url1={urls1[0]}/>} />
            ))}
        </Routes>
    </Router>
)


}

ReactDom.render(<Main/>, document.getElementById('root'));







// import React from 'react';
// import ReactDom from 'react-dom';
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";//npm i react-router-dom

// import HomePage from './Components/HomePageComponents/HomePage.js';
// import OngoingCommunityDetailsPage from './Components/CommunityDetailsComponents/OngoingCommunityDetailsPage';
// import AvailableCommunityDetailsPage from './Components/CommunityDetailsComponents/AvailableCommunityDetailsPage';
// import CompletedCommunityDetailsPage from './Components/CommunityDetailsComponents/CompletedCommunityDetailsPage';
// import HouseDetailsPage from './Components/HouseDetailsComponents/HouseDetailsPage.js';



// import './Components/CommunityDetailsComponents/CommunityDetails.css';
// import './Components/HouseDetailsComponents/HouseDetails.css';
// import './index.css';

// import community from "./JustsmartCustomHomes.json";
// import GalleryPage from './Components/GalleryComponent/GalleryPage.js';

// console.log(community);




//     function Main(){
//     let filename = window.location.href.split('/').pop();
//     console.log("FILENAME",filename)
//               const ongoingurls = community.JustSmartCustomHomes.filter(data=>data.status1 === filename);
//               console.log("ONGOINGURLS",Object.values(ongoingurls))
//               const availableurls = community.JustSmartCustomHomes.filter(data=>data.status2 === filename);
//               console.log("AVAILABLEURLS",Object.values(availableurls))
//               const completedurls = community.JustSmartCustomHomes.filter(data=>data.status3 === filename);
//               console.log("COMPLETEDURLS",Object.values(completedurls))
    
                   
//                    const ongoingurl1= community.JustSmartCustomHomes.map((data,i)=>data.status1);
//                    console.log(ongoingurl1)
//                    const availableurl1= community.JustSmartCustomHomes.map((data,i)=>data.status2);
//                    console.log(availableurl1)
//                    const completedurl1= community.JustSmartCustomHomes.map((data,i)=>data.status3);
//                    console.log(completedurl1)

//                    let filename1 = window.location.href.split('/').pop();
//               console.log("FILENAME1",filename1)
//               const ongoinghouseurls = community.JustSmartCustomHomes.map(record=>record.ongoinghouses.filter((record2,i)=>record2.houseType===filename1));
//               console.log("ONGOINGHOUSEURLS",Object.values(ongoinghouseurls))
//               const availablehouseurls = community.JustSmartCustomHomes.map(record=>record.availablehouses.filter((record2,i)=>record2.houseType===filename1));
//               console.log("AVAILABLEHOUSEURLS",Object.values(availablehouseurls))
//               const completedhouseurls = community.JustSmartCustomHomes.map(record=>record.completedhouses.filter((record2,i)=>record2.houseType===filename1));
//               console.log("COMPLETEDHOUSEURLS",Object.values(completedhouseurls))
             
//               const ongoinghouseurl1= community.JustSmartCustomHomes.map(record=>record.ongoinghouses.map((record2,i)=>record2.houseType));
//               console.log(ongoinghouseurl1[0])
//               const availablehouseurl1= community.JustSmartCustomHomes.map(record=>record.availablehouses.map((record2,i)=>record2.houseType));
//               console.log(availablehouseurl1[0])
//               const completedhouseurl1= community.JustSmartCustomHomes.map(record=>record.completedhouses.map((record2,i)=>record2.houseType));
//               console.log(completedhouseurl1[0])
// return(
//     <Router>
//         <Routes>
//             <Route exact path="" element={<HomePage />} />
//             <Route exact path="/gallery" element={<GalleryPage/>} />
//             {ongoingurl1.map(ongoingcommunitydetailspaths=>(
//             <Route path={ongoingcommunitydetailspaths} element={<OngoingCommunityDetailsPage ongoingurl={ongoingurls}/>}/>
//             ))}
//              {availableurl1.map(availablecommunitydetailspaths=>(
//             <Route path={availablecommunitydetailspaths} element={<AvailableCommunityDetailsPage availableurl={availableurls}/>}/>
//             ))}
//              {completedurl1.map(completedcommunitydetailspaths=>(
//             <Route path={completedcommunitydetailspaths} element={<CompletedCommunityDetailsPage completedurl={completedurls}/>}/>
//             ))}
//              {ongoinghouseurl1.map(ongoinghousedetailspaths=>(
//             <Route path={ongoinghousedetailspaths} element={<HouseDetailsPage ongoinghouseurl={ongoinghouseurls}/>}/>
//             ))}
//              {availableurl1.map(availablehousedetailspaths=>(
//             <Route path={availablehousedetailspaths} element={<HouseDetailsPage availablehouseurl={availablehouseurls}/>}/>
//             ))}
//              {completedurl1.map(completedhousedetailspaths=>(
//             <Route path={completedhousedetailspaths} element={<HouseDetailsPage completedhouseurl={completedhouseurls}/>}/>
//             ))}
           
//         </Routes>
//     </Router>
// )


// }

// ReactDom.render(<Main/>, document.getElementById('root'));
























