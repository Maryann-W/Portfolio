import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/Logo.png'
import { FaUser } from "react-icons/fa";


const Footer = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "9575501f-5ae1-4e5e-9854-17bd14186587");

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
            alert("Thank you for subscribing!");
            event.target.reset(); //clear input
        } else {
            alert("Something went wrong. Please try again.");
        }
    };
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <div className='footer-top-left-bottom'>
                        <p>I'm Maryann Wanjiru, developer and QA engineer based in Kenya.</p>
                        <div className='footer-top-left-bottom-links'>
                            <p> <a href="https://www.linkedin.com/in/maryann-wanjiru-5b4487275/" target='_blank'> LinkedIn </a></p>
                            <p> <a href="https://github.com/Maryann-W" target='_blank'> GitHub </a></p>
                            <p> <a href="/Maryann Wanjiru - Resume.pdf" target='_blank'> Resume </a></p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="footer-top-right">
                    <div className="footer-email-input">
                        <FaUser />
                        <input type="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <button type="submit" className="footer-subscribe">Subscribe</button>
                </form>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Maryann Wanjiru. All rights deserved.</p>
                {/*<div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>*/}
            </div>

        </div>
    )
}

export default Footer