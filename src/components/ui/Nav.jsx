import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <style global jsx>{`
          nav {
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #ddd;
          }
          nav .navigation {
            padding: 2rem;
            text-decoration: none;
            color: #999;
            font-size: .9rem;
            letter-spacing: 1px;
            transition: .4s ease-in;
          }
          nav .navigation:hover, nav .navigation.active {
            background-color: rgba(0,0,0, 0.1);
            color: #000;
          }
      `}</style>
      <nav>
        <NavLink exact className="navigation" to='/'>ABOUT</NavLink>
        <NavLink  className="navigation" to='/planters'>PLANTERS</NavLink>
        <NavLink  className="navigation" to='/dining'>DINING</NavLink>
        <NavLink  className="navigation" to='/drinking'>DRINKING</NavLink>
      </nav>
    </div>
  );
}

export default Nav;
