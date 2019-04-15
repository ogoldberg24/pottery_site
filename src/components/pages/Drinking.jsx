import React from 'react';
import Nav from '../ui/Nav';
import Header from '../ui/Header';
import Gallery from 'react-grid-gallery';

import mug1 from '../../assets/pottery_grid_images/mug1.jpg';
import mug2 from '../../assets/pottery_grid_images/mug2.jpg'
import mug3 from '../../assets/pottery_grid_images/mug3.jpg'
import mug4 from '../../assets/pottery_grid_images/mug4.jpg'
import mug5 from '../../assets/pottery_grid_images/mug5.jpg'
import mug6 from '../../assets/pottery_grid_images/mug6.jpg'
import mug7 from '../../assets/pottery_grid_images/mug7.jpg'
import mug8 from '../../assets/pottery_grid_images/mug8.jpg'
import mug9 from '../../assets/pottery_grid_images/mug9.jpg'
import mug10 from '../../assets/pottery_grid_images/mug10.jpg'
import mug11 from '../../assets/pottery_grid_images/mug11.jpg'
import mug12 from '../../assets/pottery_grid_images/mug12.jpg'
import mug13 from '../../assets/pottery_grid_images/mug13.jpg'
import mug14 from '../../assets/pottery_grid_images/mug14.jpg'



import careersBanner from '../../assets/images/banner2.jpg';



function Drinking() {

  const caption = "Click the image to purchase on etsy"
  const drinking = [
    {
      "src": mug1,
      "thumbnail": mug1,
      "thumbnailWidth": 1000,
			"thumbnailHeight": 1000,
			"caption": caption
    },
    {
      "src": mug2,
      "thumbnail": mug2,
      "thumbnailWidth": 1000,
			"thumbnailHeight": 1000,
			"caption": caption
    },
    {
      "src": mug3,
      "thumbnail": mug3,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
			"caption": caption
    },
    {
      "src": mug4,
      "thumbnail": mug4,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
			"caption": caption
    },
    {
      "src": mug5,
      "thumbnail": mug5,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
			"caption": caption
    },
    {
      "src": mug6,
      "thumbnail": mug6,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
			"caption": caption
    },
    {
      "src": mug7,
      "thumbnail": mug7,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
			"caption": caption
    },
    {
      "src": mug8,
      "thumbnail": mug8,
      "thumbnailWidth": 1000,
      "thumbnailHeight": 1000,
			"caption": caption
    },
    {
        "src": mug9,
        "thumbnail": mug9,
        "thumbnailWidth": 1000,
        "thumbnailHeight": 1000,
				"caption": caption
    },
    {
        "src": mug10,
        "thumbnail": mug10,
        "thumbnailWidth": 1000,
        "thumbnailHeight": 1000,
				"caption": caption
    },
    {
        "src": mug11,
        "thumbnail": mug11,
        "thumbnailWidth": 1000,
        "thumbnailHeight": 1000,
				"caption": caption
    },
    {
        "src": mug12,
        "thumbnail": mug12,
        "thumbnailWidth": 1000,
        "thumbnailHeight": 1000,
				"caption": caption
    },
    {
        "src": mug13,
        "thumbnail": mug13,
        "thumbnailWidth": 1000,
        "thumbnailHeight": 1000,
				"caption": caption
    },
    {
        "src": mug14,
        "thumbnail": mug14,
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
        head="For drinking"
        pageTitle="MUGS"/>
      <Nav />
      <center>
      <div style={divStyle}>
        <Gallery images={drinking} enableImageSelection={false}/>
      </div>
      </center>
    </div>
  );
}

export default Drinking;