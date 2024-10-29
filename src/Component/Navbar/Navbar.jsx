import React, { useEffect, useRef, useState } from 'react'
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
    
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'about', 'services', 'work', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositions = window.scrollY
      sections.forEach((section)=> {
        const sectionElement = document.getElementById(section);
        if(sectionElement) {
         const offsetTop = sectionElement.offsetTop - 100;
         const offsetBottom = offsetTop + sectionElement.offsetHeight
          if(scrollPositions > offsetTop && scrollPositions < offsetBottom) {
            setActiveSection(section)
          }
        }
      });
    };

      window.addEventListener('scroll', handleScroll)
      return ()=> window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className='navbar'>
        <div className="portfolio">
           <h1> Mohammad Afif </h1>
        </div>
        <img src={menu_open} onClick={openMenu} alt='' className='nav-mov-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mov-close" />
          <li><AnchorLink className=
          {activeSection === 'home'? 'anchor-link-active' : 'anchor-link'}
           offset={50} 
           href='#home'><p>Home</p></AnchorLink></li>
          <li><AnchorLink className=
          {activeSection === 'about'? 'anchor-link-active' : 'anchor-link'} 
           offset={50} 
           href='#about'><p>About Me</p></AnchorLink> </li>

          <li><AnchorLink className=
          {activeSection === 'services'? 'anchor-link-active' : 'anchor-link'}
           offset={50} 
           href='#services'><p>Services</p></AnchorLink></li>
          <li><AnchorLink className=
          {activeSection === 'work'? 'anchor-link-active' : 'anchor-link'} 
           offset={50} 
           href='#work'><p>Portfolio</p></AnchorLink></li>
          <li><AnchorLink className=
          {activeSection === 'contact'? 'anchor-link-active' : 'anchor-link'} 
           offset={50} 
           href='#contact'><p>Contact</p></AnchorLink></li>
        </ul> 
      
    </div>
  )
}

export default Navbar
