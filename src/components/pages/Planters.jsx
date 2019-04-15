import React from 'react';
import Nav from '../ui/Nav';
import Header from '../ui/Header';
import Gallery from 'react-grid-gallery';

import plant1 from '../../assets/pottery_grid_images/plant1.jpg';
import plant2 from '../../assets/pottery_grid_images/plant2.jpg'
import plant3 from '../../assets/pottery_grid_images/plant3.jpg'
import plant4 from '../../assets/pottery_grid_images/plant4.jpg'
import plant5 from '../../assets/pottery_grid_images/plant5.jpg'
import plant6 from '../../assets/pottery_grid_images/plant6.jpg'
import plant7 from '../../assets/pottery_grid_images/plant7.jpg'
import plant8 from '../../assets/pottery_grid_images/plant8.jpg'

import careersBanner from '../../assets/images/banner2.jpg';



function Planters() {

  const caption = "Click the image to purchase on etsy"
  const planters = [
    {
      "src": plant1,
      "thumbnail": plant1,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
      "caption": caption
      // onClickImage go to etsy link
    },
    {
      "src": plant2,
      "thumbnail": plant2,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
      "caption": caption
    },
    {
      "src": plant3,
      "thumbnail": plant3,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
      "caption": caption
    },
    {
      "src": plant4,
      "thumbnail": plant4,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
      "caption": caption
    },
    {
      "src": plant5,
      "thumbnail": plant5,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
      "caption": caption
    },
    {
      "src": plant6,
      "thumbnail": plant6,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
      "caption": caption
    },
    {
      "src": plant7,
      "thumbnail": plant7,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
      "caption": caption
    },
    {
      "src": plant8,
      "thumbnail": plant8,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
      "caption": caption
    },
  ]

  const divStyle = {
    justifyContent: 'center',
    width: '50%'
    
  };

  return (
    <div>
      <Header bgImg={careersBanner}
        head="For your plants"
        pageTitle="PLANTERS"/>
      <Nav />
      <center>
      <div style={divStyle}>
        <Gallery images={planters} enableImageSelection={false}/>
      </div>
      </center>
    </div>
  );
}

export default Planters;
