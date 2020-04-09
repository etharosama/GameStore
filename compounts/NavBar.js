// NavBar
import React from 'react';
import logo from '../logo.svg';
import {Link} from "react-router-dom";
import {Stylebytton ,  Nav} from './styled/Button.js'

class NavBar extends React.Component {
  render() {
    return (
      < Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to = '/'>
          <img src ={logo} alt= 'brand'
          className='navbar-brand' width="60" height="60"/>
        </Link>
        <ul className='navbar-nav nav '>
          <li className = 'nav-item mr-5'>
            <Link to = '/' className='nav-link active'>
              Games
            </Link>
          </li>

        </ul>
        <Link to = '/Cart' className='ml-auto nav-link'>
          < Stylebytton className=''>
            <i className = 'fas fa-cart-plus mr-2'/>
            <span>
             my card </span>
          </ Stylebytton >
        </Link>
      </ Nav>
    )
  }
}

export default NavBar ;
