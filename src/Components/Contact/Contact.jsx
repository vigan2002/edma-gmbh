import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_xxcw0pd',
            'template_zrerbvh',
            form.current,
            'GhfK8IapI53rAtcPG'
        )
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact">
            <div className='contact-wrapper'>
                <h1>- KONTACT -</h1>
                <p>LASSEN SIE UNS MIT UNS ZUSAMMENARBEITEN</p>
                <h4>Gemeinsam können wir Träume wahr werden lassen</h4>
                <div className='contact-form'>
                    <div className='info'>
                        <h2>adresse:</h2>
                        <p>Täfernstrasse 2a 5405 Dättwil</p>
                        <h2>telefonnummer:</h2>
                        <p>079 586 00 92</p>
                        <p>044 593 54 11</p>
                        <h2>email:</h2>
                        <p>edma@gmx.ch</p>
                    </div>
                    <div className='contact-form-wrapper'>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Phone</label>
                            <input type="number" name="user_phone" />
                            <label>Message</label>
                            <textarea name="message" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;