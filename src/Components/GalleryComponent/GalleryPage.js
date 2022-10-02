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
        <Header third="Contact-us"  fifth="Gallery" thirdid="contactus" fifthid="/gallery" />
        <Gallery/>
        <Footer/>
    </div>
  )
}
