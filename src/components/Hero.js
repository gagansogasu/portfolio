import React, { useEffect } from 'react';
import profileImage from '../asset/images/profile.jpg';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <motion.div 
                    className="hero-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="greeting">Hi, I'm</h1>
                    <h1 className="name">Ananya E Bhat</h1>
                    <h2 className="title">Computer Science Student & Developer</h2>
                    <p className="description">
                        Passionate about creating beautiful and functional web applications.
                        Currently pursuing my degree in Computer Science.
                    </p>
                    <div className="cta-buttons">
                        <motion.a 
                            href="#contact" 
                            className="btn primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                        <motion.a 
                            href="#projects" 
                            className="btn secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="profile-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <img 
                        src={profileImage} 
                        alt="Ananya E Bhat" 
                        className="profile-image" 
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;