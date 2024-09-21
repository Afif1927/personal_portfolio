import React from 'react'
import './Skills.css'
import skills_data from '../../assets/skills_data'

const Skills = () => {
  return (
    <div className='skills'>
     <div className="skill-title">
        <h1>My Skills</h1>
     </div>
     <div className="skill-container">
      {skills_data.map((skill,index) => {
        return (
            <div key={index} className="skill-format">
                <img src={skill.s_img}/>
                <h3>{skill.s_name}</h3>
                <p>{skill.s_ratio}</p>
            </div>
        )
      })}
     </div>
    </div>
  )
}

export default Skills
