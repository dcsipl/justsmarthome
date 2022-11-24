import React from 'react'
import Header from '../CommonComponents/Header.js';
import '../CommonComponents/Header.css';
import Gallery from './Gallery.js';
import '../GalleryComponent/Gallery.css';
import Footer from '../CommonComponents/Footer.js';
import '../CommonComponents/Footer.css';

export default function GalleryPage() {
  return (
    <div>
        <Header fourth="Contact-us" fourthid="contactus"/>
        <Gallery/>
        <Footer/>
    </div>
  )
}
