import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/afif1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-left">
      <h1><span>I am Mohammad Afif,</span> front end developer based in Bangladesh</h1>
        <p>I am a front end developer from Dhaka,Bangladesh with two years of experience</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
      </div>
        </div>
        <div className="hero-right"><img src={profile_img} alt=''/></div>
    </div>
  )
}

export default Hero

