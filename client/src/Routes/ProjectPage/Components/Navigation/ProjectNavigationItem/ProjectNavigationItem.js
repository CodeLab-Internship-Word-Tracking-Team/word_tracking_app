// React Imports
import React from 'react';

// Material UI Imports
import { Typography, ListItem } from '@material-ui/core';

// Style Import
import './ProjectNavigationItem.scss';

// Moment.js Import
import moment from 'moment';

function ProjectNavigationItem({ project, handleProjectSelection, selectedProjectID }) {
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

  return (
    <ListItem
      key={projectId}
      onClick={() => handleProjectSelection(project._id)}
    >
      <div
        className={`${selectedProjectID === projectId ? 'project-navigation-item list-item-selected' : 'project-navigation-item'}`}
        id={projectId}
      >
        <Typography className="project-navigation-title" variant="body1">
          {title}
        </Typography>
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
