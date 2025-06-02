import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import scrollToSection from '../utils/scrollUtils';
import './Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleNavClick = (id) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container">
                <motion.div 
                    className="logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => scrollToSection('home')}
                >
                    <span className="logo-text">AE</span>
                    <span className="full-name">Ananya E Bhat</span>
                </motion.div>
                
                <button 
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        {navItems.map((item, index) => (
                            <motion.li 
                                key={item.id}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.3, 
                                    delay: 0.1 * index,
                                    type: 'spring',
                                    stiffness: 100
                                }}
                            >
                                <button 
                                    className="nav-link"
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.label}
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;