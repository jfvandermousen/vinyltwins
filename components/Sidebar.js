import React from 'react'
import { slide as Menu } from "react-burger-menu";

export default function Sidebar(props) {
    return (
        <Menu {...props}>
        <a className="menu-item" href="/">
          Home
        </a>
  
        <a className="menu-item" href="/about">
          About
        </a>
  
        <a className="menu-item" href="/services">
          Services
        </a>
  
        <a className="menu-item" href="/contact">
          Contact us
        </a>
      </Menu>
    )
}
