import React from "react"
import ScrollToTopButton from "./features/ScrollToTopButton"
import MenuButton from './features/MenuButton';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title">

        <h1 >Knowledge Base for SE4ML</h1>
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