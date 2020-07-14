import React from "react";
import '../Components/ProjectCard.css';

function ProjectCard() {
    return (
        <div className="project-card-container">
            <div className="project-card-content">
                <h2>Project Title</h2>
                <p>Project description or tagline. We'll need to decide at what point the words get cut...</p>
                <progress id="progress-bar" className="project-card-progress-bar" value="20" max="100"></progress><label for="progress-bar" className="project-card-progress-label">20%</label>
            </div>
        </div>
    );
}

export default ProjectCard;