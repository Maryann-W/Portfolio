import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I enjoy building responsive websites and applications — and just as much, I enjoy testing them to make sure they work perfectly.</p>
                    <p>With hands-on experience in both manual and automated testing, I work with tools like Playwright, JMeter, and Jenkins. On the development side, I enjoy using React, Tailwind CSS, and JavaScript to bring ideas to life.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Dart</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Playwright</p><hr style={{width:"85%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"75%"}}/></div>
                    <div className="about-skill"><p>Php</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>3+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About