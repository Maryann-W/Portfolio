import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Maryann Wanjiru,</span> developer and QA engineer based in Kenya.</h1>
        <p>I am a developer and Quality Assurance engineer passionate about building reliable, user-friendly digital experiences.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero