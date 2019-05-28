import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/og_logo.png';
import { Link } from 'react-router-dom';


function Header(props) {

  const imgStyle = {
    width: '40%',
    height: '40%'
  };


  return (
    <div className='main-banner'>
      <div className='container'>
        <Link to='/'><img alt={"home"} src={logo} style={imgStyle}/></Link>
        <div className='main-title'>
          <medium>{props.pageTitle}</medium>
          <h2>{props.head}</h2>
        </div>
      </div>
      <style global jsx>{`
        .container {
            width: 100%;
            margin: auto;
        }

        .main-banner {
            background: url(${props.bgImg}) no-repeat center;
            height: 40%;
            background-size: cover;
        }

        .main-banner img {
          position: relative;
          top: 5%
        }

        small {
            text-transform: uppercase;
        }

        .main-title {
          position: relative;
          top: 50%;
        }
        .main-title h2 {
          font-size: 2rem;
          max-width: 30%;
          line-height: 3rem;
          font-weight: 400;
          margin-top: 0;
          letter-spacing: 1%;
        }
        .main-banner .container {
            height: 100%;
            color: #fff;
        }
      `}</style>
    </div>
  );
}

Header.propTypes = {
  bgImg:PropTypes.string,
  pageTitle:PropTypes.string,
  head:PropTypes.string
};

export default Header;
