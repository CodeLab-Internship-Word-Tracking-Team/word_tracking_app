import React from 'react';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Card, CardContent, Typography,
} from '@material-ui/core';

// Styling Imports
import '../../ShowProjects/Components/ProjectCard/ProjectCard.css';

const useStyles = makeStyles({
  root: {
    minHeight: '25vh',
  },
  title: {
    fontSize: 28,
    margin: '2vh',
  },
  description: {
    margin: '2vh',
  },
  exampleCardGridContainer: {
    marginTop: '5vh',
  },
});

export default function ExampleCardGrid() {
  const classes = useStyles();

  return (
    <Grid className={classes.exampleCardGridContainer} container spacing={3}>
      <Grid item xs={12} lg={4}>
        <div>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title}>The Peach Princess</Typography>
              <Typography variant="body1" className={classes.description}>
                A princess finds a magic peach and becomes a fruit witch.
              </Typography>
              <progress id="progress-bar" className="project-card-progress-bar" value="204" max="10000" />
              <label htmlFor="progress-bar" className="project-card-progress-label">
                2%
              </label>
            </CardContent>
          </Card>
        </div>
      </Grid>
      <Grid item xs={12} lg={4}>
        <div>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title}>The Dark Knight</Typography>
              <Typography variant="body1" className={classes.description}>
                A knight who loves the night goes on a quest to save the sun.
              </Typography>
              <progress id="progress-bar" className="project-card-progress-bar" value="21000" max="30000" />
              <label htmlFor="progress-bar" className="project-card-progress-label">
                70%
              </label>
            </CardContent>
          </Card>
        </div>
      </Grid>
      <Grid item xs={12} lg={4}>
        <div>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title}>Smell You Later</Typography>
              <Typography variant="body1" className={classes.description}>
                A lonely trashcan befriends chaotic creatures of the night — raccoons.
              </Typography>
              <progress id="progress-bar" className="project-card-progress-bar" value="1091" max="5000" />
              <label htmlFor="progress-bar" className="project-card-progress-label">
                21%
              </label>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
}
