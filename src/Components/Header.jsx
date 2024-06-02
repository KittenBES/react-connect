// import { useState } from 'react'
import HeaderList from '../assets/header-list.svg';
import HeaderLike from '../assets/header-like.svg';
import Profile from '../assets/profile.png';
import '../CSS/App.css';
import '../CSS/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <div class='header--left'>
          <Link to='/' class='header--left--logo'>
            Connect
          </Link>
          <div class='header--left--city'>Томск</div>
        </div>
        <div class='header--right'>
          <p class='header--rigft--item header--rigft--status'>No business</p>
          <Link to='/myentries'>
            <img src={HeaderList} class='header--rigft--item'></img>
          </Link>
          <a>
            <img src={HeaderLike} class='header--rigft--item'></img>
          </a>
          <Link to='/profile'>
            <img class='header--right--profile header--rigft--item' src={Profile}></img>
          </Link>
        </div>
      </header>
    </>
  );
}



export default Header;

