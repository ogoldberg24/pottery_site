import React from 'react';
import Nav from '../ui/Nav';
import Header from '../ui/Header';
import Gallery from 'react-grid-gallery';


import foodBanner from '../../assets/images/food.jpg';
 
class Dining extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIds: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=91325757bece30c1b07fa0be1f91dd32&photoset_id=72157708875167616&user_id=181769962@N03&format=json&nojsoncallback=1",
    )
    .then(response => response.json())
    .then(data => data.photoset.photo.map(photoObj => [photoObj.id, photoObj.secret]))
    .then(data => this.setState({photoIds: data}))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header bgImg={foodBanner}
          head="For dining"
          pageTitle="CUPS AND BOWLS"/>
        <Nav />
        <center>
        </center>
      </div>
    );
  }
}

export default Dining;