import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import profile_img from '../../assets/picofme (1).png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LinkedIn_img from '../../assets/LinkedIn.png';
import GitHub_img from '../../assets/github.png';
import Skype_img from '../../assets/skype.png';
import Gmail_img from '../../assets/Gmail.png';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const array = ["Front-end Developer", "ReactJS Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % array.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-left"  >
        <h4>Hello, I'm</h4>
        <h1>Mohammad Afif</h1>

        <AnimatePresence mode="wait">
          <motion.h3
            key={currentText} 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {array[currentText]}
          </motion.h3>
        </AnimatePresence>

        <div className="platforms">
          <a href="https://www.linkedin.com/in/md-afif1/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn_img} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Afif1927" className="github" target="_blank" rel="noopener noreferrer">
            <img src={GitHub_img} alt="GitHub" />
          </a>
          <a href="https://join.skype.com/invite/pdbgyaXGHbyk"  target="_blank" rel="noopener noreferrer">
            <img src={Skype_img} alt="Skype" />
          </a>
          <a  href="mailto:afifarfan808@gmail.com">
            <img src={Gmail_img} alt="Gmail" />
          </a>
        </div>

        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Hire me
          </AnchorLink>
        </div>
      </div>
      <div className="hero-right">
        <img  src={profile_img} alt="Profile of Mohammad Afif" />
      </div>
    </section>
  );
};

export default Hero;

