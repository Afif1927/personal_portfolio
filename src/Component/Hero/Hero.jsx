import React from 'react'
import "./Hero.css" 
import profile_img from '../../assets/afif1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LinkedIn_img from '../../assets/LinkedIn.png'
import GitHub_img from '../../assets/github.png'
import Skype_img from '../../assets/skype.png'
import Gmail_img from '../../assets/Gmail.png'

 
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-left">
      <h1><span>I am Mohammad Afif,</span> front end developer based in Bangladesh</h1>
        <div className="platforms">
          <a href='https://www.linkedin.com/in/afif-muntasir-162960289/'><img src={LinkedIn_img}/></a>
          <a href='https://github.com/Afif1927' className='github' ><img src={GitHub_img}/></a>
          <a href='https://join.skype.com/invite/pdbgyaXGHbyk'><img src={Skype_img}/></a>
          <a href="mailto:afifarfan808@gmail.com"><img src={Gmail_img}/></a>
        </div>
        
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      
        </div>
        <div className="hero-right"><img src={profile_img} alt=''/></div>
    </div>
  )
}

export default Hero

