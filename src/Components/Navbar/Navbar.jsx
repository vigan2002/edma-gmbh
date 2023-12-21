import React, { useState, useEffect } from 'react'
import logo from '../../Assets/logo.png'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import LoginModal from '../Login/Modal/LoginModal';
import Login from '../Login/Login';

const Navbar = () => {

    const [toggleBtn, setToggleBtn] = useState(false);
    const [checkUser, setCheckUser] = useState(localStorage.getItem("user"));
    const [openModal, setOpenModal] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            setToggleBtn(!toggleBtn);
            document.body.classList.toggle("scroll-y");
            window.scrollTo(0, 0);
        }
    }

    const logOut = () => {
        localStorage.setItem("user", "")
        setCheckUser("")
    }

    useEffect(() => {
        setCheckUser(localStorage.getItem("user"))
    }, [openModal])


    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
            <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                <ul
                    onClick={() => toggleMenu()}
                    className={`${toggleBtn ? "mobile-menu" : ""} menu`}
                >
                    <li>
                        <NavLink to="/">HEIM</NavLink>
                    </li>
                    <li>
                        <NavLink to="/uber-uns">ÜBER UNS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/architecture">ARCHITECTURE</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">SERVICES</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">PROJECTS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">KONTAKT</NavLink>
                    </li>
                    <li>
                        {checkUser ? (
                            <>
                                <button onClick={() => logOut()}>Log out</button>
                                <span>"{checkUser}"</span>
                            </>
                        ) : (
                            <button onClick={() => setOpenModal(true)}>Login</button>
                        )}
                    </li>
                </ul>
                <button className='btn-menu' onClick={() => toggleMenu()}>
                    Menu
                </button>
                <LoginModal isOpen={openModal} closeModal={()=>setOpenModal(false)}>
                    <Login close={() =>setOpenModal(false)}/>
                </LoginModal>
            </div>
        </div>
    )
}

export default Navbar