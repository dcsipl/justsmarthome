import React from 'react';
import { useState, useEffect } from 'react';
import json from '../../Justsmarthome.json';

export default function HouseDetails(props) {


    const [roomIndex, setRoomIndex] = useState(0)
    useEffect(() => {
        const interval = setTimeout(() => {
            autoPlay()
        }, 4000)
        return () => clearTimeout(interval)
    }, [roomIndex])
    function autoPlay() {
        roomIndex === props.url1[0].room.length - 1 ?
            setRoomIndex(0)
            :
            setRoomIndex(roomIndex + 1)

    }
    const smallroom = (roomIndex) => setRoomIndex(roomIndex)



    

    return (
        <>
            <div className='thirdpage'>
                <div className="communityname-housename">
                    Community name : 
                </div>
                <div>
                    {props.url1[0].room.map((data, index) => {
                        return (
                            <>
                                <div key={index} className={index === roomIndex ? "myroomslides" : "myroomslidesnone"}>
                                    <img className='mainroom' src={data.image} alt={data.type} />
                                </div>
                            </>)
                    })}
                    <div className='roomscontainer'>
                        {props.url1[0].room.map((data, index) => {
                            return (
                                <>
                                    <div key={index} className={index === roomIndex ? "rooms activee" : "rooms"} onClick={() => smallroom(index)}>
                                        <img className="smallroom" src={data.image} alt={data.type} />
                                    </div>
                                </>
                            )
                        })}</div>
                </div>
                <div className="housepagebooking">For Booking:<br />
                    <span>{json.JustSmartCustomHomes[0].booking1}<br />
                        {json.JustSmartCustomHomes[0].booking2} </span>
                </div>
                <div className="houseplan" id="plan">
                    <p> Plan: {props.url1[0].name}</p>
                </div>
                <h1 className='work'>work in progress</h1>
                {/* <div>
                <h4 className="twobhktitle" id="plan">2 BHK</h4>
                <img className="twobhkimg" src={props.url1[0].twobhk} />
            </div>
            <div>
                <h4 className="threebhktitle" >3 BHK</h4>
                <img className="threebhkimg" src={props.url1[0].threebhk} />
            </div> */}
                </div>
        </>
    )
}