const { useState, useEffect } = require("react")

function ProjectPage() {
    const [projects, setProjects] = useState([]);
    const [selectedProjectID, setSelectedProjectID] = useState(0);

    /* Get and other operations */

    useEffect(() => { 
        getProjects(); 
        setSelectedProjectID(projects[0].id);
    }, []);


    return (<div>
        <ProjectNavigation projects={projects} />
        <ProjectDescription project={projects.filter((project) => project.id === selectedProjectIDState)} />
        <ProjectStatistics project={projects.filter((project) => project.id === selectedProjectIDState)} />
    </div>)
}