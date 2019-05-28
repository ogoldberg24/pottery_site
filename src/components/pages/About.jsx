import React from 'react';
import Header from '../ui/Header';
import Nav from '../ui/Nav';
import Title from '../ui/Title';

import aboutBanner from '../../assets/images/about.jpg';

function About() {

  const titleText = {
    small: 'ogceramics.etsy.com',
    large: 'Pottery handmade in Brooklyn, NY'
  };

  return (
    <div>
      <Header
        bgImg={aboutBanner}
        pageTitle="brooklyn based potter"
        head="OLIVIA GOLDBERG"/>
      <Nav />
      <Title {...titleText} />
    </div>
  );
}

export default About;
