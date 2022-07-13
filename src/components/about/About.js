import React from "react";
import "./about.css";
import {
    FaAndroid,
    FaAward,
    FaCss3,
    FaFolder,
    FaGamepad,
    FaHtml5, FaJava,
    FaJsSquare, FaReact
} from 'react-icons/fa';

const About = () => {
    return (
        <section id="about">
            <h5> Get to know</h5>
            <h2>About me</h2>

            <div className="container about_container">
                <div className="stage-cube-cont">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FaHtml5 className="icon-cube" color="#F06529"/>
                        </div>
                        <div className="face2">
                            <FaCss3 className="icon-cube" color="#28A4D9"/>
                        </div>
                        <div className="face3">
                            <FaJsSquare className="icon-cube" color="#EFD81D"/>
                        </div>
                        <div className="face4">
                            <FaReact className="icon-cube" color="#5ED4F4"/>
                        </div>
                        <div className="face5">
                            <FaAndroid className="icon-cube" color="#28A429"/>
                        </div>
                        <div className="face6">
                            <FaJava className="icon-cube" color="#DD0031"/>
                        </div>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h2>Degree</h2>
                            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                            <marquee width="60%" direction="up" height="100px" scrollamount="3">
                                <small>BAC+3 in Computer Sciences</small>
                            </marquee>
                        </article>

                        <article className="about_card">
                            <FaGamepad className="about_icon"/>
                            <h2>Hobbies</h2>

                            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                            <marquee width="90%" direction="up" height="100px" scrollamount="3">
                                <small>
                                    Video-Games <br/> Programming <br/> Sports <br/> Hardware-PC
                                </small>
                            </marquee>

                        </article>

                        <article className="about_card">
                            <FaFolder className="about_icon"/>
                            <h2>Projects</h2>

                            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                            <marquee width="90%" direction="right" height="100px" scrollamount="3">
                                <small>4+ Completed</small>
                            </marquee>
                        </article>

                    </div>

                    <p>
                        <br/>
                    </p>
                    <a href="/contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>

        </section>

    );
}

export default About;