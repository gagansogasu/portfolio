import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Achievements />
                <Hobbies />
                <Contact />
            </main>
        </div>
    );
}

export default App;
