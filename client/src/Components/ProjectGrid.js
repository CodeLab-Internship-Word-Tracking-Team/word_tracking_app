// React
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
}));

export default function ProjectGrid() {
    const classes = useStyles();

    const cards = [1, 2, 3, 4, 5];

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {cards.map(card => (
                    <Grid item xs={12} lg={4}>
                        <ProjectCard />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
