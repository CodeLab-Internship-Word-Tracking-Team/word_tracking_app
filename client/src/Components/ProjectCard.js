// React imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Styling
import './ProjectCard.css';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: 28,
  },
});

export default function ProjectCard({ focusProject }) {
  const classes = useStyles();

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('http://localhost:3000/projects');
    const data = await response.json();
    setItems(data.projects);
  };

  const handleClick = () => {
    // Replace string with project._id when available
    focusProject('5f162f0bbe5fa9a20ed8e33b');
  };

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title}>Project Name</Typography>
          <p>Here is a description of a project. It will have a lot of words...</p>
          <progress id="progress-bar" className="project-card-progress-bar" value="20" max="100" />
          <label htmlFor="progress-bar" className="project-card-progress-label">20%</label>
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
