import React from 'react'
import './Contact.css'
import { FaMailBulk } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

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
            alert(res.message);
        }else {
            alert("Something went wrong. Please try again.");
        }
        
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Feel free to reach out to me with any inquiries, questions, or opportunities. I'm always open to connecting with new people and discussing potential collaborations or projects. Your feedback is valuable to me, and I'm here to provide any additional information you may need. Don't hesitate to get in touch!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FaMailBulk />
                            <p>wanjirumaryann86@gmail.com</p>

                        </div>
                        <div className="contact-detail">
                            <IoCall />
                            <p>+254791020406</p>
                        </div>
                        <div className="contact-detail">
                            <FaLocationDot />
                            <p>Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <button type='submit' className="contact-submit">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Contact