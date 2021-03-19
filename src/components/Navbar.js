import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { ContextApp } from './contextApp'
import { FaBars, FaCookieBite, FaSignInAlt, FaSignOutAlt, FaTimes, FaUser } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const { search, value, setValue, isLogged, setIsLogged, isSearching } = useContext(ContextApp)

    const leaveAccount = () => {
        setIsLogged(false)
        localStorage.setItem('isLogged', JSON.stringify(false))
    }

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="logo">
                    <Link className="menu-list__item-link" to="/">
                        <h1 className="title">WebCook<FaCookieBite className="title-cookie" /></h1>
                    </Link>
                </div>
                {isSearching ? <Redirect to="/" /> : null}
                {isLogged ? <div className="search mobile-btn">
                    <form className="search-form" onSubmit={search}>
                        <input placeholder="Empty gonna give fries" className="search-input" value={value} onChange={e => setValue(e.target.value)} type="text" />
                        <button onClick={() => setIsMobileMenuOpen(false)} className="search-button" type="submit">Search</button>
                    </form>
                    {isMobileMenuOpen ? <FaTimes onClick={() => setIsMobileMenuOpen(false)} className="close-mobile-menu" /> : <FaBars onClick={() => setIsMobileMenuOpen(true)} className="open-mobile-menu" />}
                </div> : <div className="mobile-btn">
                    <Link onClick={() => setIsMobileMenuOpen(false)} className="search-button-link" to="/login">Log in to start searching</Link>
                    {isMobileMenuOpen ? <FaTimes onClick={() => setIsMobileMenuOpen(false)} className="close-mobile-menu" /> : <FaBars onClick={() => setIsMobileMenuOpen(true)} className="open-mobile-menu" />}
                </div>
                }
                <div className="menu">
                    <ul className={isMobileMenuOpen ? "menu-list-active" : "menu-list"}>
                        {isMobileMenuOpen ? <li onClick={() => setIsMobileMenuOpen(false)} className="menu-list__item close-mobile-menu-wrapper">
                            <FaTimes className="close-mobile-menu" ></FaTimes>
                        </li> : null}
                        <li className="menu-list__item">
                            <Link onClick={() => setIsMobileMenuOpen(false)} className="menu-list__item-link" to="/">Recipes</Link>
                        </li>
                        <li className="menu-list__item">
                            <Link onClick={() => setIsMobileMenuOpen(false)} className="menu-list__item-link" to="/use">Use</Link>
                        </li>
                        <li className="menu-list__item">
                            <Link onClick={() => setIsMobileMenuOpen(false)} className="menu-list__item-link" to="/contacts">Contacts</Link>
                        </li>
                        {isLogged ? <li className="menu-list__item">
                            <Link onClick={() => setIsMobileMenuOpen(false)} className="menu-list__item-link" to="/home">
                                <FaUser />
                            </Link>
                        </li> : <li className="menu-list__item">
                            <Link onClick={() => setIsMobileMenuOpen(false)} className="menu-list__item-link" to="/login">
                                <FaSignInAlt />
                            </Link>
                        </li>}
                        {isLogged ? <li onClick={leaveAccount} className="menu-list__item">
                            <Link onClick={() => setIsMobileMenuOpen(false)} className="menu-list__item-link" to="/">
                                <FaSignOutAlt />
                            </Link>
                        </li> : null}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
