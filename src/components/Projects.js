import React from 'react';

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>Prerana – A Role-Based School Website</h3>
                    <p>Developing a role-based website for a School using MERN Stack. Completed frontend using React.js with a responsive design and role-based login for Admin, Student and Teacher. Working on backend implementation using Node.js and MongoDB to enable student and teacher management and document upload/download.</p>
                    {/* Add project links if available */}
                </div>
            </div>
        </section>
    );
}

export default Projects; 