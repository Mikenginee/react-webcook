import React from 'react'
import './Footer.css'
import { FaCookieBite, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">

                <div className="footer-body">
                    <div className="footer-body-links">
                        <Link className="footer-body-links__item" to="/contacts" >Contacts</Link>
                        <button className="footer-body-links__item">About</button>
                        <button className="footer-body-links__item">Design</button>
                        <button className="footer-body-links__item">Information</button>
                    </div>
                    <div className="footer-logo-wrapper">
                        <Link to="/" className="footer-logo">WebCook</Link>
                        <FaCookieBite className="footer-logo-icon" />
                    </div>
                    <div className="footer-icons">
                        <a target="_black" className="footer-icons__item" href="https://github.com/MikeGitFront"> <FaGithub /></a>
                        <a target="_black" className="footer-icons__item" href="https://www.linkedin.com/in/mikhail-ulasevich/"> <FaLinkedin /></a>
                        <button className="footer-icons__item"> <FaFacebook /></button>
                        <button className="footer-icons__item"> <FaInstagram /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
