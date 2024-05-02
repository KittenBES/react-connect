import { useState } from 'react'
import HeaderList from '../assets/header-list.svg'
import HeaderLike from '../assets/header-like.svg'
import Profile from '../assets/profile.png'
import '../App.css'
import '../CSS/Header.css'

function Header() {
  
    return (
      <>
      <header>
          <div class="header--left">
            <a class="header--left--logo">Connect</a>
            <div class="header--left--city">Томск</div>
          </div>
          <div class="header--right">
            <p class="header--rigft--item header--rigft--status">No business</p>
            <a><img src={HeaderList} class="header--rigft--item"></img></a>
            <a><img src={HeaderLike} class="header--rigft--item"></img></a>
            <a><img class="header--right--profile header--rigft--item" src={Profile} ></img></a>
          </div>
        </header>
      </>
    )
   }
  
  export default Header