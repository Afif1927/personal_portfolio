import React from 'react'
import './Skills.css'
import skills_data from '../../assets/skills_data'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='skills'>
     <div className="skill-title">
        <h1>My Skills</h1>
     </div>
     <div className="skill-container">
      {skills_data.map((skill,index) => {
        return (
            <motion.div 
             key={index} 
             className="skill-format"
             initial= {{opacity: 0, y: 50}}
             whileInView={{opacity:1, y: 0}}
             transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeInOut',
             }}
             viewport={{ once:false }}
             >
                <img src={skill.s_img} 
                     alt=''  
                     className={skill.className ? skill.className : ''}
                />
                <h3>{skill.s_name}</h3>
                <p>{skill.s_ratio}</p>
            </motion.div>
        )
      })}
     </div>
    </div>
  )
}

export default Skills
