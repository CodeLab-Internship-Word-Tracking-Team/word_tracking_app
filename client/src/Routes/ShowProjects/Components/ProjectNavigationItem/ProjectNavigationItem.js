// React Imports
import React from 'react';

// Material UI Imports
import { Typography } from '@material-ui/core';

function ProjectNavigationItem({ project }) {
  // Destructure `project` prop
  const { title, percentageComplete, wordCountEvents } = project
  return (
    <div>
      <Typography variant="body1">{title}</Typography>
      <div>
        <Typography variant="body1">{percentageComplete}</Typography>
        <Typography variant="body1">{wordCountEvents[0].updateOn}</Typography>
      </div>
    </div>
  );
}

export default ProjectNavigationItem;
