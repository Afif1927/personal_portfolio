import React from 'react';
import { motion } from 'framer-motion'; 
import './About.css';
import about_img from '../../assets/afifimg2.jpg';
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
      
        <motion.div
          className="about-left"
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, ease: 'easeInOut' }} 
        >
          <img src={about_img} alt='' />
        </motion.div>

       
        <motion.div
          className="about-right"
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }} 
        >
          <h1>Hi There! <span>I'M</span> Mohammad Afif</h1>
          <h4>Web Developer</h4>
          <p>
            I’m a skilled React developer with expertise in APIs, Tailwind CSS, Node.js, and Framer Motion for animations. I specialize in building responsive front-end web applications using JavaScript, HTML, and CSS, with a strong focus on clean code and seamless user experiences. Driven by attention to detail and a collaborative mindset, I consistently deliver high-quality solutions that align with business needs.
          </p>
          <div className="about-intro">
            <p>Email  <span>: afifarfan808@gmail.com</span></p>
            <p>From  <span>: Dhaka, Bangladesh</span></p>
            <p>Language  <span>: English, Bangla</span></p>
          </div>
          <div className="about-resume">
            <a
              className="button"
              href="./public/AFIF'S RESUME .pdf"
              download = "AFIF'S RESUME .pdf"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;


