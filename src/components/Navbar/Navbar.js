import { logDOM } from '@testing-library/react';
import React, { useState } from 'react'

import './Navbar.css';

function Navbar({search}) {


  
  return (
    <>
<header>
  <a href="#" className="logo">
    <img  id='logo' src="https://i.imgur.com/w1Pnays.png" alt="logo" />
  </a>
  <ul className="navigation">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="#movies">Movies</a>
    </li>

    <li>
      <a href="#">Latest</a>
    </li>
    <li>
      <a href="/Login">Login</a>
    </li>
  </ul>
  <div className="search" >
    <a href="/Ser"> <div className="item-search">find movies <i class='bx bx-search-alt-2'></i></div> </a>

  </div>
</header>

  </>
  
  )
}

export default Navbar





// <img  id='navcontent' className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NETFLIX"/>
// <img id='navcontent' className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar"/>