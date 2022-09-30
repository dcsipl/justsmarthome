import React from 'react';
import { useState } from 'react';
import json from '../../Justsmarthome.json';

export default function HouseDetails(props) {
    const [image, setImage] = useState(
        <>
            <p className="roommeasurement">{props.url1[0].room[0].type}-{props.url1[0].room[0].measurement.totalArea}</p>
            <img className="mainroom" src={props.url1[0].room[0].image} />
        </>)

    const array = props.url1[0].room.map((data, i) =>
        <div>
            <p className="roommeasurement">{data.type}-{data.measurement.totalArea}</p>
            <img className="mainroom" src={data.image} />
        </div>);
    return (
        <>
            <h1 style={{ color: "white" }}>
                some text for plays scroll in  down
                some text for plays scroll in  down
                some text for plays scroll in  down
                some text for plays scroll in  down
                some text for plays scroll in  down
                some text for plays scroll in  down
            </h1>
            <div className="communityname-housename">
                Community name : {json.JustSmartCustomHomes[0].name} - {props.url1[0].name}
            </div>
            <div className="roomscontainer">
                {props.url1[0].room.map((data, i) =>
                    <div className='roomslider'>
                        <p className="roomsname">{data.type}</p>
                        <img className="roomsimg" src={data.image} onClick={() => { setImage(array[i]) }} />
                    </div>)}
                <p>{image}</p>
            </div>
            <div className="housepagebooking">For Booking:
                {json.JustSmartCustomHomes[0].booking1}<br />
                <span>{json.JustSmartCustomHomes[0].booking2} </span>
            </div>
            <div className="houseplan">
                <h5 id="details">Details....</h5>
                <p> {props.url1[0].name} - Plan:</p>
            </div>
            <div>
                <h4 className="twobhktitle" id="plan2BHK">2 BHK</h4>
                <img className="twobhkimg" src={props.url1[0].twobhk} />
            </div>
            <div>
                <h4 className="threebhktitle" id="plan3BHK">3 BHK</h4>
                <img className="threebhkimg" src={props.url1[0].threebhk} />
            </div>
        </>
    )
}