import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import { FaArrowRight } from 'react-icons/fa';

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="work-item">
                        <img src={work.w_img} alt="" />
                        <div className="hover-text">{work.w_name}</div>
                    </div>
                ))}
            </div>
            <a href="https://mbandicoffee.ke/" target='_blank'><div className="mywork-showmore">
                <p>Show More</p>
                <FaArrowRight className="text-lg text-blue-500" />
            </div></a>


        </div>
    )
}

export default MyWork