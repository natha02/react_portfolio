import "./contact.css";
import {RiMailSendFill} from "react-icons/ri";
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"


const center= [45.7578137, 4.8320114];
const Contact = () => {

    /*==============emailJS================*/
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jgwjqtr', 'template_3w1c2cu', form.current, '-dU9nY0AQK54oI6yv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };
    /*==============emailJS-END================*/

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <RiMailSendFill className="contact_option-icon"/>
                        <h4>kalaha.pro@gmail.com</h4>
                        <h4>+262 692 55 18 99</h4>
                        <a href="mailto:kalaha.pro@gmail.com">Send me a message</a>
                    </article>

                </div>
                {/*END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your full name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>



                <div className="map-wrap">
                    <MapContainer
                        center={center}
                        zoom={13}
                        style={{width: "100%" , height : "60vh"}}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />

                    </MapContainer>
                </div>

            </div>
        </section>
    );
}

export default Contact;