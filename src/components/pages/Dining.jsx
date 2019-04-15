import React from 'react';
import Nav from '../ui/Nav';
import Header from '../ui/Header';
import Gallery from 'react-grid-gallery';

import bowl1 from '../../assets/pottery_grid_images/bowl1.jpg';
import bowl2 from '../../assets/pottery_grid_images/bowl2.jpg'
import bowl3 from '../../assets/pottery_grid_images/bowl3.jpg'
import bowl4 from '../../assets/pottery_grid_images/bowl4.jpg'
import bowl5 from '../../assets/pottery_grid_images/bowl5.jpg'
import bowl6 from '../../assets/pottery_grid_images/bowl6.jpg'
import bowl7 from '../../assets/pottery_grid_images/bowl7.jpg'
import bowl8 from '../../assets/pottery_grid_images/bowl8.jpg'
import bowl9 from '../../assets/pottery_grid_images/bowl9.jpg'
import plate1 from '../../assets/pottery_grid_images/plate1.jpg'
import plate2 from '../../assets/pottery_grid_images/plate2.jpg'



import careersBanner from '../../assets/images/banner2.jpg';



function Dining() {


  const dining = [
    {
      "src": bowl1,
      "thumbnail": bowl1,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000
    },
    {
      "src": bowl2,
      "thumbnail": bowl2,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000
    },
    {
      "src": bowl3,
      "thumbnail": bowl3,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000
    },
    {
      "src": bowl4,
      "thumbnail": bowl4,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000
    },
    {
      "src": bowl5,
      "thumbnail": bowl5,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000
    },
    {
      "src": bowl6,
      "thumbnail": bowl6,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000
    },
    {
      "src": bowl7,
      "thumbnail": bowl7,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000
    },
    {
      "src": bowl8,
      "thumbnail": bowl8,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000
    },
    {
        "src": bowl9,
        "thumbnail": bowl9,
        "thumbnailWidth": 1000,
        "thumbnailHeight": 1000
    },
    {
        "src": plate1,
        "thumbnail": plate1,
        "thumbnailWidth": 1000,
        "thumbnailHeight": 1000
    },
    {
        "src": plate2,
        "thumbnail": plate2,
        "thumbnailWidth": 1000,
        "thumbnailHeight": 1000
    },
  ]

  const divStyle = {
    justifyContent: 'center',
    width: '50%'
    
  };

  return (
    <div>
      <Header bgImg={careersBanner}
        head="For dining"
        pageTitle="CUPS AND BOWLS"/>
      <Nav />
      <center>
      <div style={divStyle}>
        <Gallery images={dining} enableImageSelection={false}/>
      </div>
      </center>
    </div>
  );
}

export default Dining;