import React from "react"
import ScrollToTopButton from "./features/ScrollToTopButton"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title">

        <h1 >Knowledge Base for SE4ML</h1>
      </div>
      <div className="menu-profile">
        <ScrollToTopButton className="scroll-top-button" />
        <input className="search-bar" type="search" id="search" name="q" placeholder="Search..." />
        <a href="https://www.youtube.com/" className="menu-btn">Menu</a>
        <a href="https://www.youtube.com/" className="profile-btn">Profile</a>
      </div>
    </div>
  )
}