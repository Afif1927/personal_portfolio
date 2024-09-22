import React from 'react'
import './About.css'

import about_img from '../../assets/afif1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={about_img} alt=''/>
            </div>
            <div className="about-right">
          
                 <h1>Hi There! I'M Mohammad Afif</h1>
                 <h4>Web Developer</h4>
                 <p>I am an experienced React developer with a strong understanding of API's, Redux Toolkit, MUI, Tailwind and Node.js. I excel at developing frontend web applications using JavaScript, HTML, CSS, and Git. With my attention to detail and passion for collaboration, I consistently deliver high-quality software solutions that meet business requirements and enhance the user experience.</p>
                  
                 <div className="about-intro">
                    <p>Email  <span>: afifarfan808@gmail.com</span></p>
                    <p>From  <span>: Dhaka, Bangladesh</span></p>
                    <p>Language  <span>: English, Bangla</span></p>
                 </div>
                 <div className="about-resume">My resume</div>
         </div>
         
         </div>
         
         </div>
  )
}

export default About;
