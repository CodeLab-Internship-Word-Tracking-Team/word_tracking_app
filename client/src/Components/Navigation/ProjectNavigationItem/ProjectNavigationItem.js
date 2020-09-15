// React Imports
import React from 'react';

// Material UI Imports
import { Typography, ListItem } from '@material-ui/core';

// Style Import
import './ProjectNavigationItem.scss';

// Moment.js Import
import moment from 'moment';

function ProjectNavigationItem({ project, focusProject, active }) {
  // Destructure `project` prop
  const {
    title,
    percentageComplete = 25,
    wordCountEvents,
    _id: projectId,
  } = project;

  if (wordCountEvents.length === 0) {
    wordCountEvents.push({ updateOn: new Date() });
  }

  // If first element in projects array,
  // fake focusProject onClick event
  if (active) {
    setTimeout(() => {
      const element = document.getElementById(projectId);
      const event = { target: element };
      focusProject(event);
    }, 200);
  }

  return (
    <ListItem key={projectId} onClick={focusProject}>
      <div className="project-navigation-item" id={projectId}>
        <Typography className="project-navigation-title" variant="body1">{title}</Typography>
        <div className="project-navigation-information">
          <Typography className="project-navigation-percentage-complete">
            {percentageComplete}
            %
          </Typography>
          <span aria-describedby="Bullet Point Symbol">&nbsp; &#8226; &nbsp;</span>
          <Typography className="project-navigation-update-on">
            {moment(wordCountEvents[0].updateOn).format('MMMM Do YYYY')}
          </Typography>
        </div>
      </div>
    </ListItem>
  );
}

export default ProjectNavigationItem;
