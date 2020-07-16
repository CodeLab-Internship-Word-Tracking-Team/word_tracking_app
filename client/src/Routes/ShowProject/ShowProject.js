import React, { useState, useEffect } from 'react';

export default function ShowProject({ user, projectId }) {
  useEffect(() => {
    fetchProject(projectId);
  }, []);

  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    // change `/projects/` to `/project/:projectId` once route exists
    const data = await fetch('/projects');
    // change to `project`
    const projects = await data.json();
    // change `projects.projects[0]` to just `project`
    const pro = Object.values(projects.projects);
    const progress = Object.values(pro[0]);
    console.log(progress[3]['wordCount']);
    // console.dir(pro[0].id);
    setProject(Object.values(projects.projects));
  };

  return (
    <div>
      {/* <div key={project[0].id}> */}
        {/* <h1>{project.projects[0].name}</h1> */}
        {/* <h1>{project.description}</h1> */}
        {/* <h1>{project['progress']['wordGoal']}</h1> */}
      {/* </div> */}
    </div>
  );
}
