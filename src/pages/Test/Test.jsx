import React, { useState, useEffect } from 'react';

function ProjectsList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div>
            {projects.map(project => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectsList;
