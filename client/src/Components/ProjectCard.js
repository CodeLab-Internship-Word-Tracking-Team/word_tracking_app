import React, { useState, useEffect } from 'react';
import '../Components/ProjectCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '25%',
    },
    title: {
        fontSize: 28,
    },
});

export default function ProjectCard() {
    const classes = useStyles();

    useEffect(() => {
        fetchItems();
      }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
    const data = await fetch('http://localhost:3000/projects');

    let items = await data.json();
    items = items["projects"];
    setItems(items);
    }

    return (
        <div>
            {(Object.values(items)).map(item => (
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title}>{ item.name }</Typography>
                        <p>{ item.description }</p>
                        <progress id="progress-bar" className="project-card-progress-bar" value="20" max="100"></progress>
                        <label for="progress-bar" className="project-card-progress-label">20%</label>
                        <CardActions>
                            <Button variant="outlined">VIEW PROJECT</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
