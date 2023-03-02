import React from 'react';
import { useState, useEffect,useCallback } from 'react';
import json from '../../JustsmartCustomHomes.json';

export default function CompletedHouseDetails(props) {


    const [roomIndex, setRoomIndex] = useState(0)

    const autoPlay=useCallback(()=> {
        roomIndex === props.completedhouseurls[0].room.length - 1 ?
            setRoomIndex(0)
            :
            setRoomIndex(roomIndex + 1)

    },[roomIndex,props.completedhouseurls])

    useEffect(() => {
        const interval = setTimeout(() => {
            autoPlay()
        }, 4000)
        return () => clearTimeout(interval)
    }, [roomIndex,autoPlay])
   
    const smallroom = (roomIndex) => setRoomIndex(roomIndex)



    

    return (
        <>
            <div className='thirdpage'>
                <div className="communityname-housename">
                <p> Community name : {props.cname} - {props.completedhouseurls[0].name}</p>
            
                </div>
                <div>
                    {props.completedhouseurls[0].room.map((data, index) => {
                        return (
                            <>
                                <div key={index} className={index === roomIndex ? "myroomslides" : "myroomslidesnone"}>
                                    <img className='mainroom' src={data.image} alt={data.type} />
                                </div>
                            </>)
                    })}
                    <div className='roomscontainer'>
                        {props.completedhouseurls[0].room.map((data, index) => {
                            return (
                                <>
                                    <div key={index} className={index === roomIndex ? "rooms activee" : "rooms"} onClick={() => smallroom(index)}>
                                        <img className="smallroom" src={data.image} alt={data.type} />
                                    </div>
                                </>
                            )
                        })}</div>
                </div>
                <div className="housepagebooking"id="booking">For Booking:<br />
            <span>
               <table>
                  <tbody >
                     {json.JustSmartCustomHomes[0].booking.map((book, i) =>
                        <tr key={i}>
                           <td style={{paddingRight:"10px"}}>{book.name}</td>
                           <td>{book.number}</td>
                        </tr>
                     )}
                  </tbody>
               </table>
               </span>
            
                </div>
                <div className="houseplan" id="plan">
                    <p> Plan: {props.completedhouseurls[0].name}</p>
                </div>
               
                {/* <div>
                <h4 className="twobhktitle" id="plan">2 BHK</h4>
                <img className="twobhkimg" src={props.completedhouseurls[0].twobhk} />
            </div>
            <div>
                <h4 className="threebhktitle" >3 BHK</h4>
                <img className="threebhkimg" src={props.completedhouseurls[0].threebhk} />
            </div> */}
                </div>
        </>
    )
}