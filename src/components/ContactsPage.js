import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './ContactsPage.css'

const ContactsPage = () => {
    return (
        <div className="contacts-wrapper">
            <form className="contacts-wrapper__form">
                <h2 className="contacts-wrapper__form-title">Get in touch with us</h2>
                <input placeholder="Your name" className="contacts-wrapper__form-input"></input>
                <input placeholder="Email" className="contacts-wrapper__form-input"></input>
                <textarea placeholder="Your message" className="contacts-wrapper__form-input"></textarea>
            </form>
            <div className="contacts-buttons">
                <button className="contacts-wrapper__form-button">Get in touch</button>
                <a target="_black" href="https://github.com/MikeGitFront"><FaGithub /></a>
            </div>
        </div>
    )
}

export default ContactsPage
