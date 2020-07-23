// React Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Styling Imports
import './ProjectCard.css';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActions, CardContent, Button, Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontSize: 28,
  },
});

export default function ProjectCard({ project, focusProject }) {
  const {
    name, description, _id: id, word_count: wordCount, word_goal: wordGoal,
  } = project;

  const classes = useStyles();

  const handleClick = () => {
    focusProject(id);
  };

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title}>{name}</Typography>
          <Typography variant="body1" noWrap>{description}</Typography>
          <progress id="progress-bar" className="project-card-progress-bar" value={wordCount} max={wordGoal} />
          <label htmlFor="progress-bar" className="project-card-progress-label">
            {Math.round((wordCount / wordGoal) * 100)}
            %
          </label>
          <CardActions>
            <Link to="/project">
              <Button variant="outlined" onClick={handleClick}>VIEW PROJECT</Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
