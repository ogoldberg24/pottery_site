import React from 'react';
import Nav from '../ui/Nav';
import Header from '../ui/Header';
import Gallery from 'react-grid-gallery';

import foodBanner from '../../assets/images/food.jpg';
 
class Dining extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoUrls: [],
    };
  }

  componentDidMount() {
    const api_key = "91325757bece30c1b07fa0be1f91dd32"
    const photoset_id = "72157708875167616"
    const user_id = "181769962@N03"
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${api_key}&photoset_id=${photoset_id}&user_id=${user_id}&format=json&nojsoncallback=1`,
    )
    .then(response => response.json())
    .then(data => data.photoset.photo.map(
      photoObj =>
        `https://live.staticflickr.com/${photoObj.server}/${photoObj.id}_${photoObj.secret}_z.jpg`
      ))
    .then(data => this.setState({photoUrls: data}))
  }

  render() {
    const gallery_obj = []
    this.state.photoUrls.map(
      url => {
        let obj = {
          src: url,
          thumbnail: url,
          thumbnailWidth: 1000,
          thumbnailHeight: 1000,
        }
        return gallery_obj.push(obj)
      }
    )

    const divStyle = {
      justifyContent: 'center',
      width: '95%'
      
    };

    return (
      <div>
        <Header bgImg={foodBanner}
          head="Bowls & plates"
          pageTitle=""/>
        <Nav />
        <center>
        <div style={divStyle}>
          <Gallery images={gallery_obj} enableImageSelection={false}/>
        </div>
        </center>
      </div>
    );
  }
}

export default Dining;
