// React Imports
import React from 'react';

// Material UI Imports
import { Typography, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Style Import
import './ProjectNavigationItem.scss';

import moment from 'moment';

const useStyles = makeStyles(() => ({
  item: {
    borderBottom: '1px solid grey',
  },
  title: {
    flexGrow: 1,
  },
}));

function ProjectNavigationItem({ project, focusProject }) {
  // Destructure `project` prop
  const {
    title,
    percentageComplete,
    wordCountEvents,
    _id: projectId,
  } = project;

  return (
    <ListItem key={projectId} onClick={focusProject}>
      <div className="project-navigation-item">
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
