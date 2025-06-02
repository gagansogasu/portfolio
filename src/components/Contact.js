import React from 'react';

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Get In Touch</h2>
            <div className="contact-content">
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact; 