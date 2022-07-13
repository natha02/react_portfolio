import React from "react";
import "./nav.css";
import {FiBookOpen, FiEdit3, FiHome, FiMail, FiUser} from "react-icons/fi";

const Nav = () => {

    return(
        <nav>
            <a href="/" className="home">
                <FiHome className="nav-icon"/>
            </a>
            <a href="/about">
                <FiUser className="nav-icon" />
            </a>
            <a href="/competences" >
                <FiBookOpen className="nav-icon"/>
            </a>
            <a href="/portfolio">
                <FiEdit3 className="nav-icon"/>
            </a>
            <a href="/contact">
                <FiMail className="nav-icon"/>
            </a>
        </nav>
    );
}

export default Nav;