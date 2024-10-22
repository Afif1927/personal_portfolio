import React from 'react'
import './Resume.css'
import education_img from '../../assets/education.svg'
import work_img from '../../assets/bag.svg'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <div className='resume'>
             <div className="resume-title">
                <h1>Resume</h1>
             </div>
             <div className="resume-format">
             <motion.div 
              className="resume-left"
              initial={{opacity: 0, y:150}}
              whileInView={{opacity:1, y:0}}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: 'easeOut',
              }}
              >
                <div className="test">
                <img src={education_img} alt=''/>   
                <h1>Education</h1>
                </div>
            <div className="degrees">
                <div className="degree">
                    <h3>Bachelor of Science</h3>
                    <h5>2017-2021</h5>
                    <h4>National University</h4>
                </div>
                <div className="degree">
                    <h3>Intermediate</h3>
                    <h5>2015-2017</h5>
                    <h4>National University</h4>
                </div>
                <div className="degree">
                    <h3>Matric</h3>
                    <h5>2013-2015</h5>
                    <h4>National Bank Public Collage</h4>
                </div>
            </div>
        </motion.div>
        <motion.div 
          className="resume-right"
          initial={{opacity: 0, y:150}}
              whileInView={{opacity:1, y:0}}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: 'easeOut',
              }}
          >
            <div className="test">
            <img src={work_img} alt=''/>
            <h1>Experience</h1>
            </div>
            <div className="knowledges">
                <div className="knowledge">
                    <h3>React JS Developer</h3>
                    <h5>2023-Present</h5>
                    <h4>Autodidact System</h4>
                    <p>React JS developer with hands-on experience building front-end projects using modern technologies. Committed to teamwork, delivering maintainable code, and continuously learning to stay updated with the latest practices and tools.</p>
                </div>
                <div className="knowledge">
                    <h3>Frontend Developer</h3>
                    <h5>2023-2024</h5>
                    <h4>CodeAlpha</h4>
                    <p>Experienced front-end engineer specializing in HTML, CSS and Bootstrap with a strong leadership and mentoring background, poised to drive impactful contributions at CodeAlpha.</p>
                </div>
               </div>
               </motion.div>
               </div>
        
            </div>
            )
          }

export default Resume
