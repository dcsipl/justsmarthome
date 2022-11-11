import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import json from '../../JustsmartCustomHomes.json';
import "./Gallery.css"
export default function Gallery() {
  return (
    <div className='gallerybox'>
    {json.JustSmartCustomHomes[0].gallery.map((data)=>
          
            
         
    <Card className='galleryimages'>
       <CardContent>
        <Typography gutterBottom variant="h5" height="5px" fontFamily="georgia"fontSize="25px" component="div">
          {data.cname}
        </Typography>
        </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={data.image}
      />
     
        <CardContent>
        <Typography gutterBottom variant="h6" fontFamily="georgia" component="div">
         ({data.hname})
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {data.description}
        </Typography>
      </CardContent>
    </Card>)}
    </div>
  );
}
