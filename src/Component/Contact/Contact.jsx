import React from 'react'
import "./Contact.css"
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import LinkedIn_img from '../../assets/LinkedIn.png'
import GitHub_img from '../../assets/github.png'
import Skype_img from '../../assets/skype.png'
import Gmail_img from '../../assets/Gmail.png'
import { motion } from 'framer-motion'

const Contact = () => {
   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "941b4bca-0f14-4074-8199-75cdc04d56e8");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        alert(res.message);
      }
    };
  
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
           
        </div>
        <div className="contact-section">
        <motion.div 
        className="contact-left"
        initial={{opacity: 0, x:50}}
        whileInView={{opacity:1, x:0}}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: 'easeOut'
        }}
        viewport={{ once: false}}
        >
           <h1>Let's talk</h1>
           <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
           <div className="contact-details">
             <div className="contact-detail">
                <img src={mail_icon} alt=''/> <p>afifarfan808@gmail.com</p>
             </div>
             <div className="contact-detail">
                <img src={call_icon} alt=''/> <p>+8801991026042</p>
             </div>
             <div className="contact-detail">
                <img src={location_icon} alt=''/> <p>Dhaka,Bangladesh</p>
             </div>
           </div>
           <div className="platform">
            <p>Visit my social profile & get connected</p>
            <div className="platforms">
            <a href='https://www.linkedin.com/in/afif-muntasir-162960289/'><img src={LinkedIn_img}/></a>
          <a href='' className='github' ><img src={GitHub_img}/></a>
          <a href=''><img src={Skype_img}/></a>
          <a href=''><img src={Gmail_img}/></a>
            </div>
          
           </div>
        </motion.div>
        <motion.div 
          initial={{opacity: 0, x:-50}}
          whileInView={{opacity:1, x:0}}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: 'easeOut'
          }}
          viewport={{ once: false}}
        >
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor=''>Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor=''>Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor=''>Write your message here</label>
            <textarea name='message' rows='8' placeholder='Enter your message'/>
            <button type='submit' className='contact-button'>Submit now</button>
         </form>
        </motion.div>
        </div>
    </div>
  )
}

export default Contact