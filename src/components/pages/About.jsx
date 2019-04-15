import React from 'react';
import Banner from '../ui/Banner';
import Header from '../ui/Header';
import Nav from '../ui/Nav';
import Title from '../ui/Title';

import aboutBanner from '../../assets/images/banner1.jpg';

function About() {

  const titleText = {
    small: 'Browse work on this site and follow links to etsy to purchase.',
    large: 'Handmade pottery. Made in Brooklyn'
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
