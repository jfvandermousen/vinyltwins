import React from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

var bgStyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',

  },
  bmBurgerBars: {
    background: '#DBBE2C'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'absolute',
    top:'0',
    left:'0',
    height: '100%',

  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    fontWeight:'600',
    fontSize: "32px",
    padding: '1em',
  },
  bmItem: {
    
  },
  bmOverlay: {

    background: 'rgba(0, 0, 0, 0.3)'
  }
}

// class Sidebar extends React.Component {
  
  

//   render () {
//     // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
//     return (
//       <Menu styles={ bgStyles } >
//         <a id="home" className="menu-item" href="/">Home</a>
//         <a id="about" className="menu-item" href="/about">About</a>
//         <a id="contact" className="menu-item" href="/contact">Contact</a>
//       </Menu>
//     );
//   }
// }



export default function Sidebar() {

  return (
    <Menu styles={ bgStyles } noOverlay  itemListElement="div"   >
        <Link href="/">
          <a id="home" className="menu-item">Home</a>
          </Link>
          <Link href="/about">
          <a id="about" className="menu-item">About</a>
          </Link>
          <Link href="/">
          <a id="contact" className="menu-item">Contact</a>
          </Link>
      </Menu>
  )
}
