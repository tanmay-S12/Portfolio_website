import React from 'react';
import './css/AboutImage.scss'

const AboutImage = () => {
    const circles = [];
    for (let i = 1; i <= 100000; i++) {
        circles.push(
            <div key={i} className="circle-container">
                <div className="circle"></div>
            </div>
        );
    }

    return (
        <div className="container">
            {/* Uncomment this line if you want to include an image */}
            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg" className="background" alt="Background Image" /> */}
            {/* Uncomment this line if you want to include a paragraph */}
            {/* <p className="message">all your dreams can come true<br />if you have the courage to pursue them</p> */}
            <img src={require('../assets/SVGIcons/hacker.png')} alt="Hacker" />
            {circles}
        </div>
    );
};

export default AboutImage;
