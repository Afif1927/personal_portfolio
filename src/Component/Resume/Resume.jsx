import React from 'react'
import './Resume.css'
import education_img from '../../assets/education.svg'
import work_img from '../../assets/bag.svg'

const Resume = () => {
  return (
    <div className='resume'>
             <div className="resume-title">
                <h1>Resume</h1>
             </div>
             <div className="resume-format">
             <div className="resume-left">
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
        </div>
        <div className="resume-right">
            <div className="test">
            <img src={work_img} alt=''/>
            <h1>Experience</h1>
            </div>
            <div className="knowledges">
                <div className="knowledge">
                    <h3>React JS Developer</h3>
                    <h5>2017-2021</h5>
                    <h4>Riemann System</h4>
                    <p>Experienced React JS developer proficient in crafting innovative web applications, dedicated to cross-functional teamwork, delivering scalable and maintainable code, and staying current with cutting-edge technologies and best practices.</p>
                </div>
                <div className="knowledge">
                    <h3>Frontend Developer</h3>
                    <h5>2015-2017</h5>
                    <h4>Career Institute</h4>
                    <p>Experienced front-end engineer specializing in HTML, CSS and Bootstrap with a strong leadership and mentoring background, poised to drive impactful contributions at Career Institute.</p>
                </div>
            </div>
        </div>
             </div>
        
    </div>
  )
}

export default Resume
