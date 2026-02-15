import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-container">
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <p>At GPS Tracker, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by GPS Tracker and how we use it.</p>
            <h2>Privacy Policies</h2>
            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of GPS Tracker.</p>
            <p>Note that GPS Tracker has no access to or control over these cookies that are used by third-party advertisers.</p>
            <h2>Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
        </div>
    );
};

export default PrivacyPolicy;
