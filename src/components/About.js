import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaCode, FaServer, FaMobile } from 'react-icons/fa';

function About() {
    const personalDetails = [
        { 
            icon: <FaMapMarkerAlt />, 
            text: 'Mangalore, India',
            label: 'Location'
        },
        { 
            icon: <FaPhone />, 
            text: '+91 9980867350',
            label: 'Phone'
        },
        { 
            icon: <FaEnvelope />, 
            text: 'ananya.edurkala@gmail.com',
            label: 'Email'
        },
        { 
            icon: <FaGithub />, 
            text: 'Ananya-1041',
            link: 'https://github.com/Ananya-1041',
            label: 'GitHub'
        },
        { 
            icon: <FaLinkedin />, 
            text: 'ananya-e-bhat',
            link: 'https://linkedin.com/in/ananya-e-bhat-b50126268',
            label: 'LinkedIn'
        }
    ];

    const skills = {
        'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
        'Backend': ['Node.js', 'Python', 'Java', 'SQL', 'REST APIs'],
        'Tools': ['Git', 'VS Code', 'Figma', 'Postman', 'Command Line']
    };

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>About Me</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">Get to know me better</p>
                </motion.div>
                
                <div className="about-content">
                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="about-intro">
                            <h3>Hello, I'm Ananya E Bhat</h3>
                            <p>A passionate and dedicated Computer Science student with a strong foundation in web development and problem-solving. My journey in technology began with a simple curiosity about how websites work, which has since evolved into a deep passion for creating elegant and efficient digital solutions.</p>
                            
                            <div className="info-grid">
                                <div className="info-item">
                                    <FaCode className="info-icon" />
                                    <div>
                                        <h4>Frontend Development</h4>
                                        <p>Crafting beautiful and responsive user interfaces</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <FaServer className="info-icon" />
                                    <div>
                                        <h4>Backend Development</h4>
                                        <p>Building robust and scalable server-side applications</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <FaMobile className="info-icon" />
                                    <div>
                                        <h4>Responsive Design</h4>
                                        <p>Ensuring great experience across all devices</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="personal-details">
                            <h4>Personal Information</h4>
                            <div className="details-grid">
                                {personalDetails.map((item, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="detail-item"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                        aria-label={item.label}
                                    >
                                        <span className="detail-icon">{item.icon}</span>
                                        <div className="detail-content">
                                            <span className="detail-label">{item.label}</span>
                                            {item.link ? (
                                                <a 
                                                    href={item.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="detail-link"
                                                >
                                                    {item.text}
                                                </a>
                                            ) : (
                                                <span className="detail-text">{item.text}</span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="skills-section"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3>My Skills</h3>
                        <p className="skills-intro">Here are the technologies and tools I work with:</p>
                        
                        {Object.entries(skills).map(([category, items], catIndex) => (
                            <div key={catIndex} className="skill-category">
                                <h4>{category}</h4>
                                <div className="skills-container">
                                    {items.map((skill, skillIndex) => (
                                        <motion.span 
                                            key={skillIndex}
                                            className="skill-tag"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                duration: 0.3, 
                                                delay: 0.05 * (catIndex * 5 + skillIndex)
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;