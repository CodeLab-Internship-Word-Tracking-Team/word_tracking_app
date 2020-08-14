// React Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActions, CardContent, Button, Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  projectCardTitle: {
    fontSize: 22,
  },
  projectCardProgressBar: {
    width: "80%",
    padding: "4px",
    marginTop: "1vh"
  },
  projectCardProgressLabel: {
    padding: "4px",
    marginLeft: "1vw",
  },
  projectCardDescription: {
    marginTop: "1vh",
    marginBottom: "2vh",
  },
  projectCardButton: {
    marginTop: "2vh",
    bottomMargin: 0,
  }
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
          <Typography className={classes.projectCardTitle}>{name}</Typography>
          <Typography variant="body1" noWrap className={classes.projectCardDescription}>{description}</Typography>
          <progress id="progress-bar" className={classes.projectCardProgressBar} value={wordCount} max={wordGoal} />
          <label htmlFor="progress-bar" className={classes.projectCardProgressLabel}>
            {Math.round((wordCount / wordGoal) * 100)}
            %
          </label>
          <CardActions>
            <Link to="/project">
              <Button variant="outlined" className={classes.projectCardButton} onClick={handleClick}>VIEW PROJECT</Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
