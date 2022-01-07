import React from 'react';
import './about.scss';
import about from '../../assets/about.jpg';

function About(props) {
    return (
            <div className="about-us">
                <div className="wrapper">
                    <div className="about-us-section">
                        <img src={about} alt=""/>
                    </div>
                    <div className="about-us-section_2">
                        <div className="about-us-section__title"> <h2>ABOUT US</h2></div>
                        <div className="about-us-section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className="about-us-section__list">
                        <h4>Why Choose Us?</h4>
                            <div className="listBlock">
                                <ul>
                                    <li><span></span>Lorem ipsum dolor</li>
                                    <li><span></span>Tempor incididunt</li>
                                    <li><span></span> Lorem ipsum dolor</li>
                                    <li><span></span>Incididunt ut labore</li>
                                </ul>
                                <ul>
                                    <li><span></span>Aliquip ex ea commodo</li>
                                    <li><span></span>Lorem ipsum dolor</li>
                                    <li><span></span>Exercitation ullamco</li>
                                    <li><span></span>Lorem ipsum dolor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default About;