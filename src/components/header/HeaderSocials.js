import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/andrilalaina-kalaha-94391b215/"><BsLinkedin className="header_socials-icon"/></a>
            <a href="https://github.com/natha02"><BsGithub className="header_socials-icon"/></a>
        </div>
    )
}

export default HeaderSocials;