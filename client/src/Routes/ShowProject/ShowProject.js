import React, { useState, useEffect } from 'react';

export default function ShowProject({ user, projectId }) {
  useEffect(() => {
    fetchProject(projectId);
  }, []);

  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    // change `/projects/` to `/project/:projectId` once route exists
    const response = await fetch('/projects');
    // change to `project`
    const data = await response.json();
    // change `projects.projects[0]` to just `project`
    setProject(data.projects[0]);
  };
  return (
    <div>
      <div key={project.id}>
        <h1>{project.name}</h1>
        <h1>{project.description}</h1>
        {/* <h1>{project['progress']['word goal']}</h1> */}
      </div>
    </div>
  );
}
