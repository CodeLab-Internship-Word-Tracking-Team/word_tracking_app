// Import React
import React, { useState, useEffect } from 'react';

// Import Components
import ProjectNavigation from '../Components/Navigation/ProjectNavigation/ProjectNavigation';
import ProjectDescription from './ShowProject/Components/ProjectDescription/ProjectDescription';
import ProjectStatistics from './ShowProject/Components/ProjectStatistics/ProjectStatistics';

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectID, setSelectedProjectID] = useState(0);

  /* Get and other operations */

  useEffect(() => {
    getProjects();
    setSelectedProjectID(projects[0].id);
  }, []);

  return (
    <div>
      <ProjectNavigation projects={projects} />
      <ProjectDescription project={projects.filter((project) => project.id === selectedProjectIDState)} />
      <ProjectStatistics project={projects.filter((project) => project.id === selectedProjectIDState)} />
    </div>
  );
}
