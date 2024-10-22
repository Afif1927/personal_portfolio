import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
        </div>
        <div className="mywork-container">
           {mywork_data.map((work,index) => {
              return (
               <motion.div 
                 key={index} 
                 className='work-format'
                 initial= {{opacity: 0, y: 50}}
                 whileInView={{opacity: 1, y: 0}}
                 transition={{
                  duration:0.6,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                 }}
                 viewport={{once: false}}
                 >
                   <div className="image-container">
                     <img src={work.w_img} alt={work.w_name}/>  
                     <div className="hover-content">
                     <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                       <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon"/>
                       </a>
                     </div>
                   </div>
               </motion.div>
            )
           })}
        </div>
    </div>
  )
}

export default MyWork
