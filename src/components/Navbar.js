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
        <MenuButton />
        <ScrollToTopButton />
      </div>
    </div>
  )
}