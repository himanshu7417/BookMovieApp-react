import React, { Component } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
            <div className="app-header">
                <img src={logo} alt="Movie-app-logo" className='logo' />
            </div>
        </header>
      </div>
    )
  }
}
