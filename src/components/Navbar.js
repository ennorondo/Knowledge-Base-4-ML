import React from "react"
import ScrollToTopButton from "./features/ScrollToTopButton"
import MenuButton from './features/MenuButton';

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="title">

        <h1 >{props.name}</h1>
      </div>
      <div className="menu-profile">
        <input className="search-bar" type="search" id="search" name="q" placeholder="Search..." />
        <ScrollToTopButton />
        <MenuButton />
        <button href="https://www.youtube.com/" className="navbar-buttons">Profile</button>
      </div>
    </div>
  )
}