import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About GPS Tracker</h1>
                <p>Your reliable partner in real-time transportation location.</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide efficient, reliable, and real-time bus tracking solutions to help commuters save time and plan their journeys better. We believe in the power of technology to simplify everyday travel.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        We are a team of passionate developers and transportation enthusiasts dedicated to improving the public transit experience. Our GPS Tracker platform is built with the latest technologies to ensure accuracy and speed.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default About;
