import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/pictures/Me.JPG"
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";
import "../../index.css"


const Header = () => {


    return (

        <header>
            <div className="container header_container">

                <h1 className="title">
                    <span className="hello">Hello  I  'm </span>
                    <br/>
                    <div className="rotate-words">
                        <span className="nom">KALAHA</span>
                        <span className="prenom">ANDRILALAINA</span>
                    </div>
                </h1>

                <h5>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "A Student Of Computer Science ...",
                                "A Junior Developer ...",
                                "A Junior Web & Application Developer ...",
                                "A Junior Front-End Developer ..."
                            ]
                        }}
                    />
                </h5>
                <div>

                </div>


                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={Me} alt="me"/>
                </div>

            </div>
        </header>
    );
}

export default Header;