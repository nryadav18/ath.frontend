import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li>
                        <Link to="/privacy-policy">
                            <img src="https://img.icons8.com/ios/452/security-checked.png" alt="Privacy" width="20" height="20" />
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <img src="https://img.icons8.com/ios/452/info.png" alt="About" width="20" height="20" />
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <img src="https://img.icons8.com/ios/452/phone.png" alt="Contact" width="20" height="20" />
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <div className="footer-copyright">
                    &copy; {currentYear} GPS Tracker. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
