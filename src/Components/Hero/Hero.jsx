import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Maryann Wanjiru,</span> developer and QA engineer based in Kenya.</h1>
        <p>I am a developer and Quality Assurance engineer passionate about building reliable, user-friendly digital experiences.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a href="/Maryann Wanjiru - Resume.pdf" target='_blank'><div className="hero-resume">My resume</div></a>
        </div>
    </div>
  )
}

export default Hero