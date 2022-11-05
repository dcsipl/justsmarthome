import React from 'react'
import './Gallery.css'
import json from '../../JustsmartCustomHomes.json'

export default function Gallery() {
  return (
    <>
   <div className='gallerybox'>
    {json.JustSmartCustomHomes[0].gallery.map((data)=>
      <img className="galleryimages" src={data.image} alt="galleryimages"/>
      
   )}
  </div>
    </>
  )
}
