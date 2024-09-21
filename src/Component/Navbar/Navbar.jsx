import React, {  useRef } from 'react'
import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
// for responsive
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
 
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0'
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-350px'
  }

  return (
    <div className='navbar'>
        <div className="portfolio">
           <h1>Portfolio</h1>
        </div>
        <img src={menu_open} onClick={openMenu} alt='' className='nav-mov-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mov-close" />
          <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink> </li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p>Portfolio</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
        </ul> 
      
    </div>
  )
}

export default Navbar
