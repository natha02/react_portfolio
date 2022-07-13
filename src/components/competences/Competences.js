import React from "react";
import "./competences.css";
import {SiCss3, SiHtml5, SiJavascript} from "react-icons/si";
import {ImAndroid} from "react-icons/im";
import {TbBrandPhp, TbBrandReactNative} from "react-icons/tb";
import { FaGitAlt, FaGithub, FaJava} from "react-icons/fa";

const Competences = () => {
    return (
        <section id="experiences">
            <h5>What Skills I have</h5>
            <h2>My Skills</h2>

            <div className="container experiences_container">

                <div className="experience_frontend">
                    <h3>FrontEnd</h3>
                    <div className="experiences_content">
                        <article className="experiences_details">
                            <SiHtml5 className="experiences_details-icon" color="#F06529"/>
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className="experiences_details">
                            <SiCss3 className="experiences_details-icon" color="#28A4D9"/>
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className="experiences_details">
                            <SiJavascript className="experiences_details-icon" color="#EFD81D"/>
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                    </div>
                </div>


                <div className="experience_backend">
                    <h3>BackEnd</h3>
                    <div className="experiences_content">
                        <article className="experiences_details">
                            <FaJava className="experiences_details-icon" color="#DD0031"/>
                            <div>
                                <h4>JAVA</h4>
                            </div>
                        </article>
                        <article className="experiences_details">
                            <FaJava className="experiences_details-icon" color="#DD0031"/>
                            <div>
                                <h4>J2EE</h4>
                            </div>
                        </article>
                        <article className="experiences_details">
                            <TbBrandPhp className="experiences_details-icon" color="#7377A0"/>
                            <div>
                                <h4>PHP</h4>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_mobile">
                    <h3>Mobile</h3>
                    <div className="experiences_content">
                        <article className="experiences_details">
                            <ImAndroid className="experiences_details-icon" color="#28A429"/>
                            <div>
                                <h4>Android (android studio)</h4>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_framework">
                    <h3>Frameworks & Libraries</h3>
                    <div className="experiences_content">
                        <article className="experiences_details">
                            <TbBrandReactNative className="experiences_details-icon" color="#5ED4F4"/>
                            <div>
                                <h4>ReactJS</h4>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_version">
                    <h3>Control Version & Hosting </h3>
                    <div className="experiences_content">
                        <article className="experiences_details">
                            <FaGitAlt className="experiences_details-icon" color="#F1502F"/>
                            <div>
                                <h4>Git</h4>
                            </div>
                        </article>

                        <article className="experiences_details">
                            <FaGithub className="experiences_details-icon" color="#2D3135"/>
                            <div>
                                <h4>GitHub</h4>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Competences;